const restaurants = [
  {
    name: "Los Tacos No.1",
    borough: "Manhattan",
    cuisine: "Mexican",
    address: "75 9th Ave, New York, NY",
    priceValue: 15,
    price: "$10-15",
    phone: "212-256-0343",
    affordability: 5,
    bang: 5,
    img: "https://source.unsplash.com/400x300/?tacos",
    reviews: ["Incredible tacos for cheap!", "Always fresh and worth the wait"]
  },
  {
    name: "Joe's Pizza",
    borough: "Manhattan",
    cuisine: "Pizza",
    address: "7 Carmine St, New York, NY",
    priceValue: 10,
    price: "$5-10",
    phone: "212-366-1182",
    affordability: 5,
    bang: 4,
    img: "https://source.unsplash.com/400x300/?pizza",
    reviews: ["Classic NYC slice", "Cheap and satisfying"]
  },
  {
    name: "King of Falafel",
    borough: "Queens",
    cuisine: "Middle Eastern",
    address: "3015 Broadway, Astoria, NY",
    priceValue: 12,
    price: "$8-12",
    phone: "718-728-9769",
    affordability: 5,
    bang: 5,
    img: "https://source.unsplash.com/400x300/?falafel",
    reviews: ["Best falafel in NYC", "Huge portions for cheap"]
  }
];

// FAVORITES
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// BUDGET SCORE
function getBudgetScore(r) {
  return ((r.affordability + r.bang) / 2).toFixed(1);
}

// RENDER
function render(data) {
  const list = document.getElementById("restaurantList");
  list.innerHTML = "";

  data.forEach(r => {
    const fav = favorites.includes(r.name);

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${r.img}">
      <div class="card-content">
        <h3>${r.name} ${fav ? "❤️" : ""}</h3>
        <p>${r.borough} • ${r.cuisine}</p>
        <p>${r.price}</p>

        <div>🔥 Budget Score: ${getBudgetScore(r)}</div>
        <div>⭐ ${r.affordability} | 🍽 ${r.bang}</div>

        <button onclick="toggleFavorite('${r.name}')">
          ${fav ? "Remove Favorite" : "Add Favorite"}
        </button>
      </div>
    `;

    card.onclick = (e) => {
      if (e.target.tagName !== "BUTTON") openModal(r);
    };

    list.appendChild(card);
  });
}

// FAVORITE TOGGLE
function toggleFavorite(name) {
  if (favorites.includes(name)) {
    favorites = favorites.filter(f => f !== name);
  } else {
    favorites.push(name);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  applyFilters();
}

// MODAL
function openModal(r) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modalBody");

  const avgReviewScore = ((r.affordability + r.bang) / 2).toFixed(1);

  body.innerHTML = `
    <h2>${r.name}</h2>
    <p><strong>${r.cuisine}</strong></p>
    <p>${r.address}</p>
    <p>${r.price}</p>

    <h3>Budget Score: 🔥 ${avgReviewScore}</h3>

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

// CLOSE MODAL
document.getElementById("closeModal").onclick = () => {
  document.getElementById("modal").classList.add("hidden");
};

// FILTER + SEARCH + SORT
function applyFilters() {
  let filtered = [...restaurants];

  const search = document.getElementById("search").value.toLowerCase();
  const borough = document.getElementById("boroughFilter").value;
  const sort = document.getElementById("sort")?.value;
  const cheapOnly = document.getElementById("cheapToggle")?.checked;

  if (search) {
    filtered = filtered.filter(r =>
      r.name.toLowerCase().includes(search) ||
      r.cuisine.toLowerCase().includes(search)
    );
  }

  if (borough !== "all") {
    filtered = filtered.filter(r => r.borough === borough);
  }

  if (cheapOnly) {
    filtered = filtered.filter(r => r.priceValue <= 15);
  }

  if (sort === "value") {
    filtered.sort((a, b) => getBudgetScore(b) - getBudgetScore(a));
  }

  if (sort === "cheap") {
    filtered.sort((a, b) => a.priceValue - b.priceValue);
  }

  render(filtered);
}

// EVENTS
document.getElementById("search").addEventListener("input", applyFilters);
document.getElementById("boroughFilter").addEventListener("change", applyFilters);

// INIT
render(restaurants);
