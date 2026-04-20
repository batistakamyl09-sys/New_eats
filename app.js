// Mock Data: Accurate NYC cheap eats to simulate database response
const restaurants = [

    {
        id: 2,
        name: "Joe's Pizza",
        cuisine: "Pizza • Italian",
        rating: "4.9",
        reviews: "20k+",
        deliveryTime: "20-30 min",
        avgPrice: 8,
        priceText: "$4.00 per slice",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        lat: 40.7305, 
        lng: -74.0021 // Carmine St
    },
    {
        id: 3,
        name: "Vanessa's Dumpling House",
        cuisine: "Chinese • Dumplings",
        rating: "4.7",
        reviews: "8k+",
        deliveryTime: "25-40 min",
        avgPrice: 12,
        priceText: "Meals under $12",
        img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        lat: 40.7183, 
        lng: -73.9918 // Chinatown
    },
    {
        id: 4,
        name: "Los Tacos No.1",
        cuisine: "Mexican • Tacos",
        rating: "4.9",
        reviews: "15k+",
        deliveryTime: "15-30 min",
        avgPrice: 15,
        priceText: "$5.00 per taco",
        img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        lat: 40.7571, 
        lng: -73.9888 // Times Square Area
    },
    {
        id: 5,
        name: "The Halal Guys",
        cuisine: "Middle Eastern • Street Food",
        rating: "4.6",
        reviews: "30k+",
        deliveryTime: "20-35 min",
        avgPrice: 15,
        priceText: "Platters $10-$15",
        img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        lat: 40.7618, 
        lng: -73.9791 // 53rd and 6th
    }
];

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
