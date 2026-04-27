const restaurants = [

  // 🟢 MANHATTAN
  {
    name: "Los Tacos No.1",
    borough: "Manhattan",
    cuisine: "Mexican",
    address: "75 9th Ave, New York, NY",
    priceValue: 15,
    price: "$10-15",
    phone: "212-256-0343",
    imgs: [
      "https://source.unsplash.com/400x300/?tacos",
      "https://source.unsplash.com/400x300/?mexican-food",
      "https://source.unsplash.com/400x300/?street-tacos"
    ],
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
      { text: "Classic NYC slice", rating: 5 },
      { text: "Cheap and satisfying", rating: 5 }
    ]
  },

  {
    name: "Halal Guys",
    borough: "Manhattan",
    cuisine: "Middle Eastern",
    address: "53rd & 6th",
    priceValue: 10,
    price: "$8-12",
    phone: "347-527-1505",
    img: "https://source.unsplash.com/400x300/?gyro",
    featured: true,
    reviews: [
      { text: "Legendary street food", rating: 5 },
      { text: "Huge portions", rating: 5 }
    ]
  },

  {
    name: "7th Street Burger",
    borough: "Manhattan",
    cuisine: "Burgers",
    address: "East Village",
    priceValue: 14,
    price: "$10-15",
    phone: "917-261-7000",
    img: "https://source.unsplash.com/400x300/?burger",
    featured: false,
    reviews: [
      { text: "Juicy burgers", rating: 5 },
      { text: "Simple but perfect", rating: 4 }
    ]
  },

  // 🔵 BROOKLYN
  {
    name: "Di Fara Pizza",
    borough: "Brooklyn",
    cuisine: "Pizza",
    address: "1424 Ave J",
    priceValue: 20,
    price: "$10-20",
    phone: "718-258-1367",
    img: "https://source.unsplash.com/400x300/?pizza",
    featured: true,
    reviews: [
      { text: "Legendary pizza spot", rating: 5 },
      { text: "Worth the wait", rating: 4 }
    ]
  },

  {
    name: "Birria-Landia",
    borough: "Brooklyn",
    cuisine: "Mexican",
    address: "Williamsburg",
    priceValue: 14,
    price: "$10-15",
    phone: "347-555-1111",
    imgs: [
      "https://source.unsplash.com/400x300/?birria-tacos",
      "https://source.unsplash.com/400x300/?tacos"
    ],
    featured: true,
    reviews: [
      { text: "Insane tacos", rating: 5 },
      { text: "Juicy and rich", rating: 5 }
    ]
  },

  {
    name: "L&B Spumoni Gardens",
    borough: "Brooklyn",
    cuisine: "Pizza",
    address: "2725 86th St",
    priceValue: 15,
    price: "$10-15",
    phone: "718-449-1230",
    img: "https://source.unsplash.com/400x300/?sicilian-pizza",
    featured: true,
    reviews: [
      { text: "Famous square slice", rating: 5 },
      { text: "Classic Brooklyn spot", rating: 5 }
    ]
  },

  // 🟣 QUEENS
  {
    name: "King of Falafel",
    borough: "Queens",
    cuisine: "Middle Eastern",
    address: "Astoria",
    priceValue: 12,
    price: "$8-12",
    phone: "718-728-9769",
    img: "https://source.unsplash.com/400x300/?falafel",
    featured: true,
    reviews: [
      { text: "Best falafel", rating: 5 },
      { text: "Huge portions", rating: 5 }
    ]
  },

  {
    name: "Arepas Cafe",
    borough: "Queens",
    cuisine: "Venezuelan",
    address: "Astoria",
    priceValue: 14,
    price: "$10-15",
    phone: "718-204-1401",
    img: "https://source.unsplash.com/400x300/?arepas",
    featured: false,
    reviews: [
      { text: "Flavorful", rating: 5 },
      { text: "Very filling", rating: 4 }
    ]
  },

  // 🟠 BRONX
  {
    name: "Taqueria Tlaxcalli",
    borough: "Bronx",
    cuisine: "Mexican",
    address: "2103 Starling Ave",
    priceValue: 15,
    price: "$10-15",
    phone: "718-842-2100",
    img: "https://source.unsplash.com/400x300/?tacos",
    featured: true,
    reviews: [
      { text: "Authentic tacos", rating: 5 },
      { text: "Great quality", rating: 5 }
    ]
  },

  {
    name: "Golden Krust",
    borough: "Bronx",
    cuisine: "Caribbean",
    address: "Jerome Ave",
    priceValue: 10,
    price: "$5-10",
    phone: "718-220-0000",
    img: "https://source.unsplash.com/400x300/?jamaican-food",
    featured: false,
    reviews: [
      { text: "Great patties", rating: 5 },
      { text: "Cheap eats", rating: 4 }
    ]
  },

  // 🔴 STATEN ISLAND
  {
    name: "Denino's Pizza",
    borough: "Staten Island",
    cuisine: "Pizza",
    address: "524 Port Richmond Ave",
    priceValue: 18,
    price: "$10-18",
    phone: "718-442-9401",
    img: "https://source.unsplash.com/400x300/?pizza",
    featured: true,
    reviews: [
      { text: "Best on island", rating: 5 },
      { text: "Worth the trip", rating: 5 }
    ]
  }

];

// 🔧 APP LOGIC
document.addEventListener("DOMContentLoaded", () => {

  const list = document.getElementById("restaurantList");
  const searchInput = document.getElementById("search");
  const boroughFilter = document.getElementById("boroughFilter");
  const budgetToggle = document.getElementById("budgetToggle");
  const sortFilter = document.getElementById("sortFilter");
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modalBody");
  const closeModal = document.getElementById("closeModal");

  function calculateRatings(reviews, priceValue) {
    const avg = reviews.reduce((a, b) => a + b.rating, 0) / reviews.length;
    const bang = Math.round(avg);
    let affordability = 5;
    if (priceValue > 20) affordability = 2;
    else if (priceValue > 15) affordability = 3;
    else if (priceValue > 10) affordability = 4;
    return { bang, affordability };
  }

  function render(data) {
    list.innerHTML = "";

    data.forEach(r => {
      const { bang, affordability } = calculateRatings(r.reviews, r.priceValue);
      const imgSrc = r.imgs ? r.imgs[0] : r.img;

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${imgSrc}" onerror="this.src='https://via.placeholder.com/400x300'">
        <div class="card-content">
          ${r.featured ? `<span style="color:#00c853;">★ Featured</span>` : ""}
          <h3>${r.name}</h3>
          <p>${r.borough} • ${r.cuisine}</p>
          <p>${r.price}</p>
          <div>⭐ ${affordability}</div>
          <div>🍽 ${bang}</div>
        </div>
      `;

      card.onclick = () => openModal(r, bang, affordability);
      list.appendChild(card);
    });
  }

  function openModal(r, bang, affordability) {
    let current = 0;
    const images = r.imgs ? r.imgs : [r.img];

    modalBody.innerHTML = `
      <h2>${r.name}</h2>
      <img id="modalImg" src="${images[0]}" style="width:100%;border-radius:10px;">
      <p>${r.cuisine} • ${r.borough}</p>
      <p>${r.address}</p>
      <p>${r.price}</p>
      <p>⭐ ${affordability} | 🍽 ${bang}</p>
      ${images.length > 1 ? `
        <button id="prev">⬅</button>
        <button id="next">➡</button>
      ` : ""}
    `;

    modal.classList.remove("hidden");

    if (images.length > 1) {
      const img = document.getElementById("modalImg");
      document.getElementById("prev").onclick = () => {
        current = (current - 1 + images.length) % images.length;
        img.src = images[current];
      };
      document.getElementById("next").onclick = () => {
        current = (current + 1) % images.length;
        img.src = images[current];
      };
    }
  }

  // ❌ close modal (button)
  closeModal.onclick = () => modal.classList.add("hidden");

  // ❌ click outside closes modal
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });

  // ❌ ESC key closes modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.add("hidden");
    }
  });

  function filterAndRender() {
    const search = searchInput.value.toLowerCase();
    const borough = boroughFilter.value;
    const budgetOnly = budgetToggle.checked;
    const sort = sortFilter.value;

    let filtered = restaurants.filter(r =>
      r.name.toLowerCase().includes(search)
    );

    if (borough !== "all") {
      filtered = filtered.filter(r => r.borough === borough);
    }

    if (budgetOnly) {
      filtered = filtered.filter(r => r.priceValue <= 20);
    }

    if (sort === "cheap") {
      filtered.sort((a, b) => a.priceValue - b.priceValue);
    }

    render(filtered);
  }

  searchInput.addEventListener("input", filterAndRender);
  boroughFilter.addEventListener("change", filterAndRender);
  budgetToggle.addEventListener("change", filterAndRender);
  sortFilter.addEventListener("change", filterAndRender);

  render(restaurants);
});
