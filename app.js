// REPLACE WITH YOUR ACTUAL KEYS
const supabaseUrl = 'https://adudvnzbjiddxqusmjzb.supabase.co';
const supabaseKey = 'https://adudvnzbjiddxqusmjzb.supabase.co/rest/v1/';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

const foodListContainer = document.getElementById('food-list');
const countDisplay = document.getElementById('results-count');
let map;
let allFoods = []; 
let mapMarkers = []; 

// 1. Initialize Map
window.initMap = function() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: { lat: 40.7128, lng: -74.0060 }, // Center of NYC
        style: [{ featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] }]
    });

    fetchFoods(); 
};

// 2. Fetch Data from Supabase
async function fetchFoods() {
    try {
        const { data, error } = await supabase.from('budget_foods').select('*');
        if (error) throw error;
        
        allFoods = data; // Store the 40 items in memory
        displayData(allFoods); 
    } catch (err) {
        console.error("Error:", err);
        foodListContainer.innerHTML = `<p style="color: red;">Failed to load data from Supabase.</p>`;
    }
}

// 3. Display Data & Update Map
function displayData(foodsToDisplay) {
    foodListContainer.innerHTML = '';
    countDisplay.textContent = `Showing ${foodsToDisplay.length} locations`;

    // Clear old map markers
    mapMarkers.forEach(marker => marker.setMap(null));
    mapMarkers = [];

    // Create a Bounds object to zoom the map properly
    const bounds = new google.maps.LatLngBounds();

    foodsToDisplay.forEach(food => {
        // --- Build HTML Card ---
        const card = document.createElement('div');
        card.className = 'card';
        const formattedPrice = Number(food.price).toFixed(2);
        card.innerHTML = `
            <img src="${food.image_url}" alt="${food.food_item}">
            <div class="card-info">
                <div class="restaurant-name">${food.restaurant_name}</div>
                <div class="food-item">${food.food_item}</div>
                <div class="card-footer">
                    <span class="price">$${formattedPrice}</span>
                    <span class="borough">${food.borough}</span>
                </div>
            </div>
        `;
        foodListContainer.appendChild(card);

        // --- Drop Map Pin ---
        if (food.lat && food.lng) {
            const position = { lat: food.lat, lng: food.lng };
            const marker = new google.maps.Marker({
                position: position,
                map: map,
                title: food.restaurant_name
            });

            const infoWindow = new google.maps.InfoWindow({
                content: `<strong>${food.restaurant_name}</strong><br>$${formattedPrice}`
            });

            marker.addListener("click", () => infoWindow.open(map, marker));
            
            mapMarkers.push(marker);
            bounds.extend(position); // Add this pin's location to the map bounds
        }
    });

    // Automatically zoom/pan the map to fit all the current pins perfectly
    if (mapMarkers.length > 0) {
        map.fitBounds(bounds);
    }
}

// 4. Setup Filters
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        // Highlight active button
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        // Filter the array
        const selectedBorough = e.target.getAttribute('data-borough');
        
        if (selectedBorough === 'All') {
            displayData(allFoods);
        } else {
            const filteredFoods = allFoods.filter(food => food.borough === selectedBorough);
            displayData(filteredFoods);
        }
    });
});
