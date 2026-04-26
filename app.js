const restaurants = [
  // MANHATTAN
  {name:"Los Tacos No.1", borough:"Manhattan", price:"$10-15", phone:"212-256-0343", affordability:5, bang:5},
  {name:"Joe's Pizza", borough:"Manhattan", price:"$5-10", phone:"212-366-1182", affordability:5, bang:4},
  {name:"Halal Guys", borough:"Manhattan", price:"$8-12", phone:"347-527-1505", affordability:5, bang:5},
  {name:"Xi'an Famous Foods", borough:"Manhattan", price:"$10-15", phone:"212-786-2068", affordability:4, bang:5},
  {name:"Shake Shack", borough:"Manhattan", price:"$10-18", phone:"646-747-7200", affordability:3, bang:4},
  {name:"Mamoun's Falafel", borough:"Manhattan", price:"$5-10", phone:"212-366-0444", affordability:5, bang:4},
  {name:"Prince Street Pizza", borough:"Manhattan", price:"$6-12", phone:"212-966-4100", affordability:4, bang:5},
  {name:"7th Street Burger", borough:"Manhattan", price:"$8-15", phone:"917-261-7000", affordability:4, bang:5},

  // BROOKLYN
  {name:"Di Fara Pizza", borough:"Brooklyn", price:"$10-20", phone:"718-258-1367", affordability:3, bang:5},
  {name:"L&B Spumoni Gardens", borough:"Brooklyn", price:"$8-15", phone:"718-449-1230", affordability:4, bang:5},
  {name:"Tacos El Bronco", borough:"Brooklyn", price:"$8-12", phone:"718-554-0527", affordability:5, bang:5},
  {name:"Famous Halal Food", borough:"Brooklyn", price:"$7-12", phone:"718-975-3444", affordability:5, bang:4},
  {name:"Junior's Restaurant", borough:"Brooklyn", price:"$12-20", phone:"718-852-5257", affordability:3, bang:4},
  {name:"BK Jani", borough:"Brooklyn", price:"$10-15", phone:"347-987-4321", affordability:4, bang:5},
  {name:"Birria-Landia", borough:"Brooklyn", price:"$10-15", phone:"347-555-1111", affordability:4, bang:5},
  {name:"Paulie Gee’s Slice Shop", borough:"Brooklyn", price:"$6-12", phone:"347-987-3747", affordability:4, bang:5},

  // QUEENS
  {name:"Arepas Cafe", borough:"Queens", price:"$10-15", phone:"718-204-1401", affordability:4, bang:5},
  {name:"King of Falafel", borough:"Queens", price:"$8-12", phone:"718-728-9769", affordability:5, bang:5},
  {name:"SriPraPhai", borough:"Queens", price:"$12-20", phone:"718-899-9599", affordability:3, bang:5},
  {name:"The Halal Guys (Astoria)", borough:"Queens", price:"$8-12", phone:"347-555-2222", affordability:5, bang:4},
  {name:"Nan Xiang Xiao Long Bao", borough:"Queens", price:"$10-18", phone:"718-321-3838", affordability:4, bang:5},
  {name:"Taverna Kyclades", borough:"Queens", price:"$15-20", phone:"718-545-8666", affordability:3, bang:5},
  {name:"Adda Indian Canteen", borough:"Queens", price:"$12-18", phone:"718-433-3888", affordability:3, bang:5},
  {name:"Casa Enrique", borough:"Queens", price:"$15-20", phone:"347-448-6040", affordability:3, bang:5},

  // BRONX
  {name:"City Island Lobster House", borough:"Bronx", price:"$15-20", phone:"718-885-1459", affordability:3, bang:4},
  {name:"Taqueria Tlaxcalli", borough:"Bronx", price:"$8-15", phone:"718-842-2100", affordability:4, bang:5},
  {name:"Beatstro", borough:"Bronx", price:"$12-20", phone:"718-489-9397", affordability:3, bang:5},
  {name:"Golden Krust", borough:"Bronx", price:"$5-10", phone:"718-220-0000", affordability:5, bang:4},
  {name:"Kennedy Fried Chicken", borough:"Bronx", price:"$5-10", phone:"718-555-3333", affordability:5, bang:4},
  {name:"La Morada", borough:"Bronx", price:"$10-15", phone:"718-401-2532", affordability:4, bang:5},
  {name:"Casa Della Mozzarella", borough:"Bronx", price:"$8-15", phone:"718-364-3867", affordability:4, bang:5},
  {name:"Sam's Fried Chicken", borough:"Bronx", price:"$6-12", phone:"718-555-4444", affordability:5, bang:4},

  // STATEN ISLAND
  {name:"Denino's Pizza", borough:"Staten Island", price:"$10-18", phone:"718-442-9401", affordability:4, bang:5},
  {name:"Ralph's Italian Ices", borough:"Staten Island", price:"$5-10", phone:"718-273-9700", affordability:5, bang:4},
  {name:"Lakruwana", borough:"Staten Island", price:"$12-20", phone:"718-240-9240", affordability:3, bang:5},
  {name:"Lee's Tavern", borough:"Staten Island", price:"$10-15", phone:"718-667-9749", affordability:4, bang:5},
  {name:"New Asha Sri Lankan", borough:"Staten Island", price:"$10-15", phone:"718-815-1234", affordability:4, bang:5},
  {name:"Goodfellas Pizza", borough:"Staten Island", price:"$8-15", phone:"718-987-2424", affordability:4, bang:4},
  {name:"Pastosa Ravioli", borough:"Staten Island", price:"$10-15", phone:"718-351-2900", affordability:4, bang:5},
  {name:"Royal Crown Bakery", borough:"Staten Island", price:"$5-10", phone:"718-668-8770", affordability:5, bang:5}
];

function render(restaurantsToRender) {
  const list = document.getElementById("restaurantList");
  list.innerHTML = "";

  restaurantsToRender.forEach(r => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${r.name}</h3>
      <p>${r.borough}</p>
      <p>Price: ${r.price}</p>
      <div class="rating">Affordability: ${"⭐".repeat(r.affordability)}</div>
      <div class="rating">Bang for Buck: ${"🍽".repeat(r.bang)}</div>
      <a href="tel:${r.phone}">
        <button>Call to Order</button>
      </a>
    `;

    list.appendChild(card);
  });
}

render(restaurants);

// Search
document.getElementById("search").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = restaurants.filter(r => r.name.toLowerCase().includes(value));
  render(filtered);
});

// Borough filter
document.getElementById("boroughFilter").addEventListener("change", e => {
  const value = e.target.value;
  if (value === "all") return render(restaurants);

  const filtered = restaurants.filter(r => r.borough === value);
  render(filtered);
});
