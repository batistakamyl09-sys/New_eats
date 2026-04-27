const restaurants = [
  {
    name: "Los Tacos No.1",
    borough: "Manhattan",
    cuisine: "Mexican",
    address: "75 9th Ave",
    priceValue: 15,
    price: "$10-15",
    imgs: [
      "https://source.unsplash.com/400x300/?tacos",
      "https://source.unsplash.com/400x300/?mexican-food"
    ],
    featured: true,
    reviews: [
      { text: "Amazing tacos", rating: 5 },
      { text: "Worth it", rating: 5 }
    ]
  },

  {
    name: "Joe's Pizza",
    borough: "Manhattan",
    cuisine: "Pizza",
    address: "7 Carmine St",
    priceValue: 10,
    price: "$5-10",
    img: "https://source.unsplash.com/400x300/?pizza",
    featured: true,
    reviews: [
      { text: "Classic slice", rating: 5 }
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {

  const list = document.getElementById("restaurantList");
  const searchInput = document.getElementById("search");
  const boroughFilter = document.getElementById("boroughFilter");
  const budgetToggle = document.getElementById("budgetToggle");
  const sortFilter = document.getElementById("sortFilter");
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modalBody");
  const closeModal = document.getElementById("closeModal");

  if (!list || !modal || !modalBody || !closeModal) {
    console.error("Missing HTML elements ❌");
    return;
  }

  function calculateRatings(reviews, priceValue) {
    const avg = reviews.reduce((a, b) => a + b.rating, 0) / reviews.length;
    return { bang: Math.round(avg), affordability: 5 - Math.floor(priceValue / 5) };
  }

  function render(data) {
    list.innerHTML = "";

    if (!data.length) {
      list.innerHTML = "<p>No restaurants found</p>";
      return;
    }

    data.forEach(r => {
      const { bang, affordability } = calculateRatings(r.reviews, r.priceValue);
      const img = r.imgs ? r.imgs[0] : r.img;

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${img}">
        <div class="card-content">
          <h3>${r.name}</h3>
          <p>${r.borough} • ${r.cuisine}</p>
          <p>${r.price}</p>
          <p>⭐ ${affordability} | 🍽 ${bang}</p>
        </div>
      `;

      card.onclick = () => openModal(r, bang, affordability);
      list.appendChild(card);
    });
  }

  function openModal(r, bang, affordability) {
    let i = 0;
    const images = r.imgs ? r.imgs : [r.img];

    modalBody.innerHTML = `
      <h2>${r.name}</h2>
      <img id="modalImg" src="${images[0]}" style="width:100%">
      <p>${r.address}</p>
      <p>${r.price}</p>
      ${images.length > 1 ? `
        <button id="prev">⬅</button>
        <button id="next">➡</button>
      ` : ""}
    `;

    modal.classList.remove("hidden");

    if (images.length > 1) {
      const img = document.getElementById("modalImg");

      document.getElementById("prev").onclick = () => {
        i = (i - 1 + images.length) % images.length;
        img.src = images[i];
      };

      document.getElementById("next").onclick = () => {
        i = (i + 1) % images.length;
        img.src = images[i];
      };
    }
  }

  closeModal.onclick = () => modal.classList.add("hidden");

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.classList.add("hidden");
  });

  function filterAndRender() {
    let filtered = restaurants;

    const search = searchInput.value.toLowerCase();
    if (search) {
      filtered = filtered.filter(r => r.name.toLowerCase().includes(search));
    }

    if (boroughFilter.value !== "all") {
      filtered = filtered.filter(r => r.borough === boroughFilter.value);
    }

    if (budgetToggle.checked) {
      filtered = filtered.filter(r => r.priceValue <= 20);
    }

    if (sortFilter.value === "cheap") {
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
