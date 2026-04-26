const restaurants = [
  {
    name: "Los Tacos No.1",
    borough: "Manhattan",
    cuisine: "Mexican",
    address: "75 9th Ave, New York, NY",
    price: "$10-15",
    phone: "212-256-0343",
    affordability: 5,
    bang: 5,
    img: "https://source.unsplash.com/400x300/?tacos",
    reviews: [
      "Incredible tacos for cheap!",
      "Always fresh and worth the wait"
    ]
  },
  {
    name: "Joe's Pizza",
    borough: "Manhattan",
    cuisine: "Pizza",
    address: "7 Carmine St, New York, NY",
    price: "$5-10",
    phone: "212-366-1182",
    affordability: 5,
    bang: 4,
    img: "https://source.unsplash.com/400x300/?pizza",
    reviews: [
      "Classic NYC slice",
      "Cheap and satisfying"
    ]
  },

  {
    name: "Di Fara Pizza",
    borough: "Brooklyn",
    cuisine: "Pizza",
    address: "1424 Ave J, Brooklyn, NY",
    price: "$10-20",
    phone: "718-258-1367",
    affordability: 3,
    bang: 5,
    img: "https://source.unsplash.com/400x300/?pizza,restaurant",
    reviews: [
      "Legendary pizza spot",
      "Expensive but worth every bite"
    ]
  },

  {
    name: "King of Falafel",
    borough: "Queens",
    cuisine: "Middle Eastern",
    address: "3015 Broadway, Astoria, NY",
    price: "$8-12",
    phone: "718-728-9769",
    affordability: 5,
    bang: 5,
    img: "https://source.unsplash.com/400x300/?falafel",
    reviews: [
      "Best falafel in NYC",
      "Huge portions for cheap"
    ]
  },

  {
    name: "Taqueria Tlaxcalli",
    borough: "Bronx",
    cuisine: "Mexican",
    address: "2103 Starling Ave, Bronx, NY",
    price: "$8-15",
    phone: "718-842-2100",
    affordability: 4,
    bang: 5,
    img: "https://source.unsplash.com/400x300/?mexican-food",
    reviews: [
      "Authentic tacos",
      "Great quality for price"
    ]
  },

  {
    name: "Denino's Pizza",
    borough: "Staten Island",
    cuisine: "Pizza",
    address: "524 Port Richmond Ave, Staten Island, NY",
    price: "$10-18",
    phone: "718-442-9401",
    affordability: 4,
    bang: 5,
    img: "https://source.unsplash.com/400x300/?pizza-slice",
    reviews: [
      "Best pizza on Staten Island",
      "Worth the trip"
    ]
  }
];

function render(data) {
  const list = document.getElementById("restaurantList");
  list.innerHTML = "";

  data.forEach(r => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${r.img}">
      <div class="card-content">
        <h3>${r.name}</h3>
        <p>${r.borough} • ${r.cuisine}</p>
        <p>${r.price}</p>
        <div class="rating">⭐ ${r.affordability}</div>
        <div class="rating">🍽 ${r.bang}</div>
      </div>
    `;

    card.onclick = () => openModal(r);

    list.appendChild(card);
  });
}

function openModal(r) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modalBody");

  body.innerHTML = `
    <h2>${r.name}</h2>
    <p><strong>Cuisine:</strong> ${r.cuisine}</p>
    <p><strong>Address:</strong> ${r.address}</p>
    <p><strong>Price:</strong> ${r.price}</p>

    <p>⭐ Affordability: ${r.affordability}</p>
    <p>🍽 Bang for Buck: ${r.bang}</p>

    <h3>Reviews</h3>
    ${r.reviews.map(rv => `<p>• ${rv}</p>`).join("")}

    <br>

    <a href="tel:${r.phone}">
      <button>📞 Call</button>
    </a>

    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.name + " " + r.address)}" target="_blank">
      <button>📍 Make the travel?</button>
    </a>
  `;

  modal.classList.remove("hidden");
}

document.getElementById("closeModal").onclick = () => {
  document.getElementById("modal").classList.add("hidden");
};

// Search
document.getElementById("search").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  render(restaurants.filter(r => r.name.toLowerCase().includes(value)));
});

// Filter
document.getElementById("boroughFilter").addEventListener("change", e => {
  const val = e.target.value;
  if (val === "all") return render(restaurants);
  render(restaurants.filter(r => r.borough === val));
});

render(restaurants);
