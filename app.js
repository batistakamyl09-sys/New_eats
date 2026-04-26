const restaurants = [
  {
    name: "Los Tacos No.1",
    borough: "Manhattan",
    cuisine: "Mexican",
    address: "75 9th Ave, New York, NY",
    priceValue: 15,
    price: "$10-15",
    phone: "212-256-0343",
    img: "https://source.unsplash.com/400x300/?tacos",
    featured: true,
    reviews: [
      { text: "Incredible tacos for cheap!", rating: 5 },
      { text: "Always fresh and worth the wait", rating: 5 }
    ]
  },
  {
    name: "Joe's Pizza",
    borough: "Manhattan",
    cuisine: "Pizza",
    address: "7 Carmine St, New York, NY",
    priceValue: 10,
    price: "$5-10",
    phone: "212-366-1182",
    img: "https://source.unsplash.com/400x300/?pizza",
    featured: true,
    reviews: [
      { text: "Classic NYC slice", rating: 4 },
      { text: "Cheap and satisfying", rating: 5 }
    ]
  },
  {
    name: "King of Falafel",
    borough: "Queens",
    cuisine: "Middle Eastern",
    address: "3015 Broadway, Astoria, NY",
    priceValue: 12,
    price: "$8-12",
    phone: "718-728-9769",
    img: "https://source.unsplash.com/400x300/?falafel",
    featured: false,
    reviews: [
      { text: "Best falafel in NYC", rating: 5 },
      { text: "Huge portions for cheap", rating: 5 }
    ]
  },
  {
    name: "Di Fara Pizza",
    borough: "Brooklyn",
    cuisine: "Pizza",
    address: "1424 Ave J, Brooklyn, NY",
    priceValue: 20,
    price: "$10-20",
    phone: "718-258-1367",
    img: "https://source.unsplash.com/400x300/?pizza,restaurant",
    featured: true,
    reviews: [
      { text: "Legendary pizza spot", rating: 5 },
      { text: "Pricey but worth it", rating: 4 }
    ]
  }
];

// 🔥 Budget Bites rating system
function calculateRatings(reviews, priceValue) {
  const avgReview = reviews.reduce((a, b) => a + b.rating, 0) / reviews.length;

  const bang = Math.round(avgReview);

  let affordability = 5;
  if (priceValue > 20) affordability = 2;
  else if (priceValue > 15) affordability = 3;
  else if (priceValue > 10) affordability = 4;

  return { bang, affordability };
}

function render(data) {
  const list = document.getElementById("restaurantList");
  list.innerHTML = "";

  data.forEach(r => {
    const { bang, affordability } = calculateRatings(r.reviews, r.priceValue);

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${r.img}">
      <div class="card-content">
        ${r.featured ? `<span style="color:#00c853;">★ Featured</span>` : ""}
        <h3>${r.name}</h3>
        <p>${r.borough} • ${r.cuisine}</p>
        <p>${r.price}</p>
        <div class="rating">⭐ ${affordability}</div>
        <div class="rating">🍽 ${bang}</div>
      </div>
    `;

    card.onclick = () => openModal(r, bang, affordability);
    list.appendChild(card);
  });
}

function openModal(r, bang, affordability) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modalBody");

  body.innerHTML = `
    <h2>${r.name}</h2>
    <p><strong>${r.cuisine}</strong> • ${r.borough}</p>

    <p><strong>📍 Address:</strong> ${r.address}</p>
    <p><strong>💲 Price:</strong> ${r.price}</p>

    <hr>

    <p>⭐ Affordability: ${affordability}</p>
    <p>🍽 Bang for Buck: ${bang}</p>

    <h3>💬 Reviews</h3>
    ${r.reviews.map(rv => `<p>• ${rv.text}</p>`).join("")}

    <br>

    <a href="tel:${r.phone}">
      <button>📞 Call Restaurant</button>
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

// 🔍 Search
document.getElementById("search").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  filterAndRender();
});

// 🏙 Borough filter + 💲 budget filter
function filterAndRender() {
  const search = document.getElementById("search").value.toLowerCase();
  const borough = document.getElementById("boroughFilter").value;

  let filtered = restaurants.filter(r =>
    r.name.toLowerCase().includes(search)
  );

  if (borough !== "all") {
    filtered = filtered.filter(r => r.borough === borough);
  }

  render(filtered);
}

document.getElementById("boroughFilter").addEventListener("change", filterAndRender);

render(restaurants);
