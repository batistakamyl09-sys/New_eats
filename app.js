const restaurants = [
  // 🟢 MANHATTAN (8)
  {
    name: "Los Tacos No.1",
    borough: "Manhattan",
    cuisine: "Mexican",
    address: "75 9th Ave, New York, NY",
    priceValue: 15,
    price: "$10-15",
    phone: "212-256-0343",
    img: "http://googleusercontent.com/image_collection/image_retrieval/2339352865319360989",
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
    img: "http://googleusercontent.com/image_collection/image_retrieval/15705720017743512884",
    featured: true,
    reviews: [
      { text: "Classic NYC slice", rating: 4 },
      { text: "Cheap and satisfying", rating: 5 }
    ]
  },
  {
    name: "Halal Guys",
    borough: "Manhattan",
    cuisine: "Middle Eastern",
    address: "W 53rd St & 6th Ave, New York, NY",
    priceValue: 10,
    price: "$8-12",
    phone: "347-527-1505",
    img: "http://googleusercontent.com/image_collection/image_retrieval/11032149828451296615",
    featured: true,
    reviews: [
      { text: "Legendary street food", rating: 5 },
      { text: "Huge portions", rating: 5 }
    ]
  },
  {
    name: "Xi'an Famous Foods",
    borough: "Manhattan",
    cuisine: "Chinese",
    address: "81 St Marks Pl, New York, NY",
    priceValue: 14,
    price: "$10-15",
    phone: "212-786-2068",
    img: "http://googleusercontent.com/image_collection/image_retrieval/395321749729998616",
    featured: false,
    reviews: [
      { text: "Spicy and flavorful", rating: 5 },
      { text: "Affordable and filling", rating: 4 }
    ]
  },
  {
    name: "Mamoun's Falafel",
    borough: "Manhattan",
    cuisine: "Middle Eastern",
    address: "119 MacDougal St, New York, NY",
    priceValue: 8,
    price: "$5-10",
    phone: "212-366-0444",
    img: "http://googleusercontent.com/image_collection/image_retrieval/5588023535887803934",
    featured: false,
    reviews: [
      { text: "Cheap and delicious", rating: 5 },
      { text: "Quick bite staple", rating: 4 }
    ]
  },
  {
    name: "Prince Street Pizza",
    borough: "Manhattan",
    cuisine: "Pizza",
    address: "27 Prince St, New York, NY",
    priceValue: 12,
    price: "$6-12",
    phone: "212-966-4100",
    img: "http://googleusercontent.com/image_collection/image_retrieval/3525335302134951367",
    featured: true,
    reviews: [
      { text: "Best pepperoni slice", rating: 5 },
      { text: "Crispy and rich", rating: 5 }
    ]
  },
  {
    name: "7th Street Burger",
    borough: "Manhattan",
    cuisine: "Burgers",
    address: "91 E 7th St, New York, NY",
    priceValue: 14,
    price: "$10-15",
    phone: "917-261-7000",
    img: "http://googleusercontent.com/image_collection/image_retrieval/7558577942569691585",
    featured: false,
    reviews: [
      { text: "Juicy burgers", rating: 5 },
      { text: "Simple but perfect", rating: 4 }
    ]
  },
  {
    name: "Shake Shack",
    borough: "Manhattan",
    cuisine: "American",
    address: "Madison Ave & E 23rd St, New York, NY",
    priceValue: 18,
    price: "$12-18",
    phone: "646-747-7200",
    img: "http://googleusercontent.com/image_collection/image_retrieval/606900623655521591",
    featured: false,
    reviews: [
      { text: "Consistent quality", rating: 4 },
      { text: "Bit pricey but good", rating: 4 }
    ]
  },

  // 🔵 BROOKLYN (8)
  {
    name: "Di Fara Pizza",
    borough: "Brooklyn",
    cuisine: "Pizza",
    address: "1424 Ave J, Brooklyn, NY",
    priceValue: 20,
    price: "$10-20",
    phone: "718-258-1367",
    img: "http://googleusercontent.com/image_collection/image_retrieval/14339643529991252059",
    featured: true,
    reviews: [
      { text: "Legendary pizza spot", rating: 5 },
      { text: "Worth the wait", rating: 4 }
    ]
  },
  {
    name: "L&B Spumoni Gardens",
    borough: "Brooklyn",
    cuisine: "Pizza",
    address: "2725 86th St, Brooklyn, NY",
    priceValue: 15,
    price: "$10-15",
    phone: "718-449-1230",
    img: "http://googleusercontent.com/image_collection/image_retrieval/7712852864569445597",
    featured: true,
    reviews: [
      { text: "Famous square slice", rating: 5 },
      { text: "Classic Brooklyn spot", rating: 5 }
    ]
  },
  {
    name: "Tacos El Bronco",
    borough: "Brooklyn",
    cuisine: "Mexican",
    address: "4324 4th Ave, Brooklyn, NY",
    priceValue: 12,
    price: "$8-12",
    phone: "718-554-0527",
    img: "http://googleusercontent.com/image_collection/image_retrieval/10004724909002099941",
    featured: false,
    reviews: [
      { text: "Authentic tacos", rating: 5 },
      { text: "Great late night food", rating: 4 }
    ]
  },
  {
    name: "BK Jani",
    borough: "Brooklyn",
    cuisine: "Pakistani",
    address: "679 Grand St, Brooklyn, NY",
    priceValue: 14,
    price: "$10-15",
    phone: "347-987-4321",
    img: "http://googleusercontent.com/image_collection/image_retrieval/18174342153197968426",
    featured: false,
    reviews: [
      { text: "Spicy burgers hit", rating: 5 },
      { text: "Different and tasty", rating: 5 }
    ]
  },
  {
    name: "Paulie Gee’s Slice Shop",
    borough: "Brooklyn",
    cuisine: "Pizza",
    address: "110 Franklin St, Brooklyn, NY",
    priceValue: 12,
    price: "$6-12",
    phone: "347-987-3747",
    img: "http://googleusercontent.com/image_collection/image_retrieval/10537666941481040769",
    featured: false,
    reviews: [
      { text: "Creative slices", rating: 5 },
      { text: "Affordable quality", rating: 4 }
    ]
  },
  {
    name: "Birria-Landia",
    borough: "Brooklyn",
    cuisine: "Mexican",
    address: "Brooklyn, NY",
    priceValue: 14,
    price: "$10-15",
    phone: "347-555-1111",
    img: "http://googleusercontent.com/image_collection/image_retrieval/12478076486399820741",
    featured: true,
    reviews: [
      { text: "Insane birria tacos", rating: 5 },
      { text: "Juicy and rich", rating: 5 }
    ]
  },
  {
    name: "Junior's Restaurant",
    borough: "Brooklyn",
    cuisine: "American",
    address: "386 Flatbush Ave Ext, Brooklyn, NY",
    priceValue: 18,
    price: "$12-20",
    phone: "718-852-5257",
    img: "http://googleusercontent.com/image_collection/image_retrieval/4455755993239490975",
    featured: false,
    reviews: [
      { text: "Famous cheesecake", rating: 5 },
      { text: "Portions are huge", rating: 4 }
    ]
  },
  {
    name: "Famous Halal Food",
    borough: "Brooklyn",
    cuisine: "Middle Eastern",
    address: "Flatbush Ave, Brooklyn, NY",
    priceValue: 10,
    price: "$7-12",
    phone: "718-975-3444",
    img: "http://googleusercontent.com/image_collection/image_retrieval/18077867890135338361",
    featured: false,
    reviews: [
      { text: "Cheap and filling", rating: 5 },
      { text: "Great street food", rating: 4 }
    ]
  },

  // 🟣 QUEENS (8)
  {
    name: "King of Falafel",
    borough: "Queens",
    cuisine: "Middle Eastern",
    address: "3015 Broadway, Astoria, NY",
    priceValue: 12,
    price: "$8-12",
    phone: "718-728-9769",
    img: "http://googleusercontent.com/image_collection/image_retrieval/16776155365432714017",
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
    address: "33-07 36th Ave, Queens, NY",
    priceValue: 14,
    price: "$10-15",
    phone: "718-204-1401",
    img: "http://googleusercontent.com/image_collection/image_retrieval/6697668701571587721",
    featured: false,
    reviews: [
      { text: "Flavorful arepas", rating: 5 },
      { text: "Very filling", rating: 4 }
    ]
  },
  {
    name: "SriPraPhai",
    borough: "Queens",
    cuisine: "Thai",
    address: "64-13 39th Ave, Queens, NY",
    priceValue: 18,
    price: "$12-20",
    phone: "718-899-9599",
    img: "http://googleusercontent.com/image_collection/image_retrieval/12872388463531661994",
    featured: false,
    reviews: [
      { text: "Authentic Thai", rating: 5 },
      { text: "Great spice levels", rating: 5 }
    ]
  },
  {
    name: "Nan Xiang Xiao Long Bao",
    borough: "Queens",
    cuisine: "Chinese",
    address: "38-12 Prince St, Queens, NY",
    priceValue: 15,
    price: "$10-18",
    phone: "718-321-3838",
    img: "http://googleusercontent.com/image_collection/image_retrieval/9421184889390858122",
    featured: true,
    reviews: [
      { text: "Soup dumplings amazing", rating: 5 },
      { text: "Worth the hype", rating: 5 }
    ]
  },
  {
    name: "Taverna Kyclades",
    borough: "Queens",
    cuisine: "Greek",
    address: "33-07 Ditmars Blvd, Queens, NY",
    priceValue: 20,
    price: "$15-20",
    phone: "718-545-8666",
    img: "http://googleusercontent.com/image_collection/image_retrieval/12750752374685682272",
    featured: false,
    reviews: [
      { text: "Fresh seafood", rating: 5 },
      { text: "Portions huge", rating: 4 }
    ]
  },
  {
    name: "Adda Indian Canteen",
    borough: "Queens",
    cuisine: "Indian",
    address: "31-31 Thomson Ave, Queens, NY",
    priceValue: 18,
    price: "$12-18",
    phone: "718-433-3888",
    img: "http://googleusercontent.com/image_collection/image_retrieval/441329237449850435",
    featured: false,
    reviews: [
      { text: "Rich flavors", rating: 5 },
      { text: "Affordable for quality", rating: 4 }
    ]
  },
  {
    name: "Casa Enrique",
    borough: "Queens",
    cuisine: "Mexican",
    address: "5-48 49th Ave, Queens, NY",
    priceValue: 20,
    price: "$15-20",
    phone: "347-448-6040",
    img: "http://googleusercontent.com/image_collection/image_retrieval/7800825179492826914",
    featured: false,
    reviews: [
      { text: "Authentic dishes", rating: 5 },
      { text: "High quality", rating: 5 }
    ]
  },
  {
    name: "Halal Guys Astoria",
    borough: "Queens",
    cuisine: "Middle Eastern",
    address: "Astoria, NY",
    priceValue: 12,
    price: "$8-12",
    phone: "347-555-2222",
    img: "http://googleusercontent.com/image_collection/image_retrieval/1272297246456965828",
    featured: false,
    reviews: [
      { text: "Reliable food", rating: 4 },
      { text: "Good portions", rating: 4 }
    ]
  },

  // 🟠 BRONX (8)
  {
    name: "Taqueria Tlaxcalli",
    borough: "Bronx",
    cuisine: "Mexican",
    address: "2103 Starling Ave, Bronx, NY",
    priceValue: 15,
    price: "$10-15",
    phone: "718-842-2100",
    img: "http://googleusercontent.com/image_collection/image_retrieval/5263091683084059027",
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
    address: "1373 Jerome Ave, Bronx, NY",
    priceValue: 10,
    price: "$5-10",
    phone: "718-220-0000",
    img: "http://googleusercontent.com/image_collection/image_retrieval/8190452297706796324",
    featured: false,
    reviews: [
      { text: "Great patties", rating: 5 },
      { text: "Cheap eats", rating: 4 }
    ]
  },
  {
    name: "La Morada",
    borough: "Bronx",
    cuisine: "Mexican",
    address: "308 Willis Ave, Bronx, NY",
    priceValue: 15,
    price: "$10-15",
    phone: "718-401-2532",
    img: "http://googleusercontent.com/image_collection/image_retrieval/10813038024618396305",
    featured: false,
    reviews: [
      { text: "Homestyle cooking", rating: 5 },
      { text: "Authentic flavors", rating: 5 }
    ]
  },
  {
    name: "Beatstro",
    borough: "Bronx",
    cuisine: "American",
    address: "135 Alexander Ave, Bronx, NY",
    priceValue: 18,
    price: "$12-20",
    phone: "718-489-9397",
    img: "http://googleusercontent.com/image_collection/image_retrieval/17635624174015894752",
    featured: false,
    reviews: [
      { text: "Great vibe", rating: 5 },
      { text: "Good portions", rating: 4 }
    ]
  },
  {
    name: "Casa Della Mozzarella",
    borough: "Bronx",
    cuisine: "Italian",
    address: "604 E 187th St, Bronx, NY",
    priceValue: 12,
    price: "$8-15",
    phone: "718-364-3867",
    img: "http://googleusercontent.com/image_collection/image_retrieval/16184666674329316032",
    featured: false,
    reviews: [
      { text: "Amazing sandwiches", rating: 5 },
      { text: "Fresh ingredients", rating: 5 }
    ]
  },
  {
    name: "Sam's Fried Chicken",
    borough: "Bronx",
    cuisine: "Fast Food",
    address: "Bronx, NY",
    priceValue: 10,
    price: "$6-12",
    phone: "718-555-4444",
    img: "http://googleusercontent.com/image_collection/image_retrieval/1987390514976059377",
    featured: false,
    reviews: [
      { text: "Cheap and filling", rating: 4 },
      { text: "Good late night", rating: 4 }
    ]
  },
  {
    name: "Kennedy Fried Chicken",
    borough: "Bronx",
    cuisine: "Fast Food",
    address: "Bronx, NY",
    priceValue: 9,
    price: "$5-10",
    phone: "718-555-3333",
    img: "http://googleusercontent.com/image_collection/image_retrieval/13968799751963071472",
    featured: false,
    reviews: [
      { text: "Budget staple", rating: 4 },
      { text: "Quick meals", rating: 4 }
    ]
  },
  {
    name: "City Island Lobster House",
    borough: "Bronx",
    cuisine: "Seafood",
    address: "691 Bridge St, Bronx, NY",
    priceValue: 20,
    price: "$15-20",
    phone: "718-885-1459",
    img: "http://googleusercontent.com/image_collection/image_retrieval/3637831161296420366",
    featured: false,
    reviews: [
      { text: "Fresh seafood", rating: 5 },
      { text: "Nice portions", rating: 4 }
    ]
  },

  // 🔴 STATEN ISLAND (8)
  {
    name: "Denino's Pizza",
    borough: "Staten Island",
    cuisine: "Pizza",
    address: "524 Port Richmond Ave, Staten Island, NY",
    priceValue: 18,
    price: "$10-18",
    phone: "718-442-9401",
    img: "http://googleusercontent.com/image_collection/image_retrieval/16814787843808276551",
    featured: true,
    reviews: [
      { text: "Best pizza on island", rating: 5 },
      { text: "Worth the trip", rating: 5 }
    ]
  },
  {
    name: "Lee's Tavern",
    borough: "Staten Island",
    cuisine: "Pizza",
    address: "60 Hancock St, Staten Island, NY",
    priceValue: 15,
    price: "$10-15",
    phone: "718-667-9749",
    img: "http://googleusercontent.com/image_collection/image_retrieval/4085122637710317335",
    featured: false,
    reviews: [
      { text: "Thin crust perfection", rating: 5 },
      { text: "Local favorite", rating: 5 }
    ]
  },
  {
    name: "Lakruwana",
    borough: "Staten Island",
    cuisine: "Sri Lankan",
    address: "668 Bay St, Staten Island, NY",
    priceValue: 18,
    price: "$12-20",
    phone: "718-240-9240",
    img: "http://googleusercontent.com/image_collection/image_retrieval/10736079246323478807",
    featured: false,
    reviews: [
      { text: "Unique flavors", rating: 5 },
      { text: "Great portions", rating: 4 }
    ]
  },
  {
    name: "Royal Crown Bakery",
    borough: "Staten Island",
    cuisine: "Bakery",
    address: "1350 Hylan Blvd, Staten Island, NY",
    priceValue: 10,
    price: "$5-10",
    phone: "718-668-8770",
    img: "http://googleusercontent.com/image_collection/image_retrieval/17985416898020832679",
    featured: false,
    reviews: [
      { text: "Great pastries", rating: 5 },
      { text: "Affordable sweets", rating: 4 }
    ]
  },
  {
    name: "Ralph's Italian Ices",
    borough: "Staten Island",
    cuisine: "Dessert",
    address: "501 Port Richmond Ave, Staten Island, NY",
    priceValue: 8,
    price: "$5-10",
    phone: "718-273-9700",
    img: "http://googleusercontent.com/image_collection/image_retrieval/2445734203762821880",
    featured: false,
    reviews: [
      { text: "Refreshing treats", rating: 5 },
      { text: "Cheap and fun", rating: 4 }
    ]
  },
  {
    name: "Goodfellas Pizza",
    borough: "Staten Island",
    cuisine: "Pizza",
    address: "181 New Dorp Ln, Staten Island, NY",
    priceValue: 14,
    price: "$8-15",
    phone: "718-987-2424",
    img: "http://googleusercontent.com/image_collection/image_retrieval/2054754855520560576",
    featured: false,
    reviews: [
      { text: "Solid slices", rating: 4 },
      { text: "Good value", rating: 4 }
    ]
  },
  {
    name: "Pastosa Ravioli",
    borough: "Staten Island",
    cuisine: "Italian",
    address: "764 Forest Ave, Staten Island, NY",
    priceValue: 15,
    price: "$10-15",
    phone: "718-351-2900",
    img: "http://googleusercontent.com/image_collection/image_retrieval/5409471229446013768",
    featured: false,
    reviews: [
      { text: "Fresh pasta", rating: 5 },
      { text: "Authentic Italian", rating: 5 }
    ]
  },
  {
    name: "New Asha Sri Lankan",
    borough: "Staten Island",
    cuisine: "Sri Lankan",
    address: "Staten Island, NY",
    priceValue: 15,
    price: "$10-15",
    phone: "718-815-1234",
    img: "http://googleusercontent.com/image_collection/image_retrieval/1330173746208675407",
    featured: false,
    reviews: [
      { text: "Flavor packed", rating: 5 },
      { text: "Hidden gem", rating: 5 }
    ]
  }
];document.addEventListener("DOMContentLoaded", () => {
function openModal(r, bang, affordability) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modalBody");

  body.innerHTML = `
    <span id="closeModal">&times;</span>

    <h2>${r.name}</h2>
    <p><strong>${r.cuisine}</strong> • ${r.borough}</p>

    <img src="${r.img}" alt="${r.name}">

    <p><strong>📍 Address:</strong> ${r.address}</p>
    <p><strong>💲 Price:</strong> ${r.price}</p>

    <hr>

    <p>⭐ Affordability: ${affordability}</p>
    <p>🍽 Bang for Buck: ${bang}</p>

    <h3>💬 Reviews</h3>
    ${r.reviews.map(rv => `<p>• ${rv.text}</p>`).join("")}

    <a href="tel:${r.phone}">
      <button>📞 Call Restaurant</button>
    </a>

    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.name + " " + r.address)}" target="_blank">
      <button>📍 Make the travel?</button>
    </a>
  `;

  modal.classList.add("active");

  // CLOSE BUTTON
  document.getElementById("closeModal").onclick = () => {
    modal.classList.remove("active");
  };
}

// CLICK OUTSIDE TO CLOSE
document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") {
    e.currentTarget.classList.remove("active");
  }
});
