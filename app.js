// Mock Data: Accurate NYC cheap eats to simulate database response
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://maps-data.p.rapidapi.com/review.php?review_id=ChdDSUhNMG9nS0VJLVlfZFhBMzl2enVBRRAB');
xhr.setRequestHeader('x-rapidapi-key', '95425b6aa1mshbfdf9ed251abb26p10dd83jsn6b3143fb2a10');
xhr.setRequestHeader('x-rapidapi-host', 'maps-data.p.rapidapi.com');
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.send(data);

let map;

// DOM Elements
const grid = document.getElementById('restaurantList');
const mapContainer = document.getElementById('mapContainer');
const listViewBtn = document.getElementById('listViewBtn');
const mapViewBtn = document.getElementById('mapViewBtn');

// Render Cards Function
function renderRestaurants(data) {
    grid.innerHTML = '';
    data.forEach(restaurant => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${restaurant.img}" alt="${restaurant.name}" class="card-img">
            <div class="card-content">
                <h3 class="card-title">${restaurant.name}</h3>
                <p class="card-cuisine">${restaurant.cuisine}</p>
                <div class="card-stats">
                    <span class="rating">⭐ ${restaurant.rating} (${restaurant.reviews})</span>
                    <span class="time">${restaurant.deliveryTime}</span>
                </div>
                <div class="price-tag">${restaurant.priceText}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Toggle Views
listViewBtn.addEventListener('click', () => {
    grid.classList.remove('hidden');
    mapContainer.classList.add('hidden');
    listViewBtn.classList.add('active');
    mapViewBtn.classList.remove('active');
});

mapViewBtn.addEventListener('click', () => {
    grid.classList.add('hidden');
    mapContainer.classList.remove('hidden');
    mapViewBtn.classList.add('active');
    listViewBtn.classList.remove('active');
});

// Filter Functionality (Demonstrating the < $20 focus)
document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
        // Remove active class from others
        document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        e.target.classList.add('active');

        const maxPrice = e.target.getAttribute('data-max');
        if (maxPrice) {
            const filtered = restaurants.filter(r => r.avgPrice <= parseInt(maxPrice));
            renderRestaurants(filtered);
        } else {
            renderRestaurants(restaurants);
        }
    });
});

// Google Maps Initialization Callback
function initMap() {
    // Default center to NYC (roughly lower Manhattan)
    const nycCenter = { lat: 40.730610, lng: -73.992383 };
    
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: nycCenter,
        styles: [
            // Minimalist map style to make markers pop
            { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] }
        ]
    });

    // Drop markers for each restaurant
    restaurants.forEach(restaurant => {
        const marker = new google.maps.Marker({
            position: { lat: restaurant.lat, lng: restaurant.lng },
            map: map,
            title: restaurant.name,
            icon: {
                // Using a custom SVG icon to mimic Grubhub/delivery pins
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: "#E23744",
                fillOpacity: 1,
                strokeWeight: 2,
                strokeColor: "#ffffff",
            }
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div style="padding: 5px; color: #333;">
                    <h3 style="margin: 0 0 5px 0; font-family: sans-serif;">${restaurant.name}</h3>
                    <p style="margin: 0; font-weight: bold; color: #1a7e43;">${restaurant.priceText}</p>
                </div>
            `
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    });
}

// Initial Render
renderRestaurants(restaurants);
