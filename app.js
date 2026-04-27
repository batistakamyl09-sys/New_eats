const restaurants = [

  // 🟢 MANHATTAN (10)
  { name:"Los Tacos No.1", borough:"Manhattan", cuisine:"Mexican", address:"75 9th Ave, New York, NY 10011", phone:"2122560343", priceValue:15, rating:4.8, img:"https://source.unsplash.com/400x300/?tacos", reviews:["Amazing tacos","Best in NYC"] },
  { name:"Joe's Pizza", borough:"Manhattan", cuisine:"Pizza", address:"7 Carmine St, New York, NY 10014", phone:"2123661182", priceValue:10, rating:4.7, img:"https://source.unsplash.com/400x300/?pizza", reviews:["Classic slice","Cheap and good"] },
  { name:"Halal Guys", borough:"Manhattan", cuisine:"Street Food", address:"W 53rd St & 6th Ave, New York, NY 10019", phone:"3475271505", priceValue:10, rating:4.6, img:"https://source.unsplash.com/400x300/?gyro", reviews:["Legendary","Huge portions"] },
  { name:"Prince Street Pizza", borough:"Manhattan", cuisine:"Pizza", address:"27 Prince St, New York, NY 10012", phone:"2129664100", priceValue:12, rating:4.7, img:"https://source.unsplash.com/400x300/?pepperoni-pizza", reviews:["Best pepperoni slice","Crispy"] },
  { name:"Mamoun's Falafel", borough:"Manhattan", cuisine:"Middle Eastern", address:"119 MacDougal St, New York, NY 10012", phone:"2123660444", priceValue:8, rating:4.6, img:"https://source.unsplash.com/400x300/?falafel", reviews:["Cheap","Classic"] },
  { name:"Xi'an Famous Foods", borough:"Manhattan", cuisine:"Chinese", address:"81 St Marks Pl, New York, NY 10003", phone:"2127862068", priceValue:14, rating:4.7, img:"https://source.unsplash.com/400x300/?noodles", reviews:["Spicy","Flavorful"] },
  { name:"7th Street Burger", borough:"Manhattan", cuisine:"Burgers", address:"91 E 7th St, New York, NY 10009", phone:"9172617000", priceValue:14, rating:4.6, img:"https://source.unsplash.com/400x300/?burger", reviews:["Juicy","Simple"] },
  { name:"Shake Shack", borough:"Manhattan", cuisine:"American", address:"Madison Ave & E 23rd St, New York, NY 10010", phone:"6467477200", priceValue:18, rating:4.5, img:"https://source.unsplash.com/400x300/?fast-food", reviews:["Consistent","Good"] },
  { name:"Katz's Delicatessen", borough:"Manhattan", cuisine:"Deli", address:"205 E Houston St, New York, NY 10002", phone:"2122542246", priceValue:20, rating:4.7, img:"https://source.unsplash.com/400x300/?pastrami", reviews:["Famous","Huge"] },
  { name:"Levain Bakery", borough:"Manhattan", cuisine:"Bakery", address:"167 W 74th St, New York, NY 10023", phone:"2128746080", priceValue:8, rating:4.8, img:"https://source.unsplash.com/400x300/?cookies", reviews:["Best cookies","Gooey"] },

  // 🔵 BROOKLYN (8)
  { name:"Di Fara Pizza", borough:"Brooklyn", cuisine:"Pizza", address:"1424 Ave J, Brooklyn, NY 11230", phone:"7182581367", priceValue:20, rating:4.6, img:"https://source.unsplash.com/400x300/?pizza", reviews:["Legendary","Worth it"] },
  { name:"L&B Spumoni Gardens", borough:"Brooklyn", cuisine:"Pizza", address:"2725 86th St, Brooklyn, NY 11223", phone:"7184491230", priceValue:15, rating:4.7, img:"https://source.unsplash.com/400x300/?sicilian-pizza", reviews:["Square slice","Classic"] },
  { name:"Tacos El Bronco", borough:"Brooklyn", cuisine:"Mexican", address:"4324 4th Ave, Brooklyn, NY 11232", phone:"7185540527", priceValue:12, rating:4.6, img:"https://source.unsplash.com/400x300/?tacos", reviews:["Authentic","Late night"] },
  { name:"Junior's Restaurant", borough:"Brooklyn", cuisine:"American", address:"386 Flatbush Ave Ext, Brooklyn, NY 11201", phone:"7188525257", priceValue:18, rating:4.7, img:"https://source.unsplash.com/400x300/?cheesecake", reviews:["Cheesecake","Huge"] },
  { name:"Paulie Gee’s Slice Shop", borough:"Brooklyn", cuisine:"Pizza", address:"110 Franklin St, Brooklyn, NY 11222", phone:"3479873747", priceValue:12, rating:4.6, img:"https://source.unsplash.com/400x300/?pizza-slice", reviews:["Creative","Affordable"] },
  { name:"BK Jani", borough:"Brooklyn", cuisine:"Pakistani", address:"679 Grand St, Brooklyn, NY 11211", phone:"3479874321", priceValue:14, rating:4.6, img:"https://source.unsplash.com/400x300/?burger", reviews:["Spicy","Different"] },
  { name:"Birria-Landia", borough:"Brooklyn", cuisine:"Mexican", address:"77 N 6th St, Brooklyn, NY 11249", phone:"3475551111", priceValue:14, rating:4.8, img:"https://source.unsplash.com/400x300/?birria-tacos", reviews:["Juicy","Amazing"] },
  { name:"Famous Halal Food", borough:"Brooklyn", cuisine:"Street Food", address:"Flatbush Ave, Brooklyn, NY 11226", phone:"7189753444", priceValue:10, rating:4.5, img:"https://source.unsplash.com/400x300/?halal-food", reviews:["Cheap","Filling"] },

  // 🟣 QUEENS (6)
  { name:"King of Falafel", borough:"Queens", cuisine:"Middle Eastern", address:"30-15 Broadway, Astoria, NY 11106", phone:"7187289769", priceValue:12, rating:4.7, img:"https://source.unsplash.com/400x300/?falafel", reviews:["Best","Big portions"] },
  { name:"Arepas Cafe", borough:"Queens", cuisine:"Venezuelan", address:"33-07 36th Ave, Astoria, NY 11106", phone:"7182041401", priceValue:14, rating:4.6, img:"https://source.unsplash.com/400x300/?arepas", reviews:["Flavorful","Filling"] },
  { name:"SriPraPhai", borough:"Queens", cuisine:"Thai", address:"64-13 39th Ave, Queens, NY 11377", phone:"7188999599", priceValue:18, rating:4.7, img:"https://source.unsplash.com/400x300/?thai-food", reviews:["Authentic","Spicy"] },
  { name:"Nan Xiang Xiao Long Bao", borough:"Queens", cuisine:"Chinese", address:"38-12 Prince St, Flushing, NY 11354", phone:"7183213838", priceValue:15, rating:4.7, img:"https://source.unsplash.com/400x300/?dumplings", reviews:["Soup dumplings","Worth it"] },
  { name:"Taverna Kyclades", borough:"Queens", cuisine:"Greek", address:"33-07 Ditmars Blvd, Astoria, NY 11105", phone:"7185458666", priceValue:20, rating:4.7, img:"https://source.unsplash.com/400x300/?greek-food", reviews:["Fresh seafood","Huge"] },
  { name:"Adda Indian Canteen", borough:"Queens", cuisine:"Indian", address:"31-31 Thomson Ave, Queens, NY 11101", phone:"7184333888", priceValue:18, rating:4.6, img:"https://source.unsplash.com/400x300/?indian-food", reviews:["Rich","Affordable"] },

  // 🟠 BRONX (4)
  { name:"Taqueria Tlaxcalli", borough:"Bronx", cuisine:"Mexican", address:"2103 Starling Ave, Bronx, NY 10462", phone:"7188422100", priceValue:15, rating:4.7, img:"https://source.unsplash.com/400x300/?tacos", reviews:["Authentic","Quality"] },
  { name:"Golden Krust", borough:"Bronx", cuisine:"Caribbean", address:"1373 Jerome Ave, Bronx, NY 10452", phone:"7182200000", priceValue:10, rating:4.5, img:"https://source.unsplash.com/400x300/?jamaican-food", reviews:["Patties","Cheap"] },
  { name:"Casa Della Mozzarella", borough:"Bronx", cuisine:"Italian", address:"604 E 187th St, Bronx, NY 10458", phone:"7183643867", priceValue:12, rating:4.7, img:"https://source.unsplash.com/400x300/?sandwich", reviews:["Fresh","Great"] },
  { name:"City Island Lobster House", borough:"Bronx", cuisine:"Seafood", address:"691 Bridge St, Bronx, NY 10464", phone:"7188851459", priceValue:20, rating:4.6, img:"https://source.unsplash.com/400x300/?seafood", reviews:["Fresh","Nice"] },

  // 🔴 STATEN ISLAND (2)
  { name:"Denino's Pizza", borough:"Staten Island", cuisine:"Pizza", address:"524 Port Richmond Ave, Staten Island, NY 10302", phone:"7184429401", priceValue:18, rating:4.7, img:"https://source.unsplash.com/400x300/?pizza", reviews:["Best","Worth it"] },
  { name:"Lee's Tavern", borough:"Staten Island", cuisine:"Pizza", address:"60 Hancock St, Staten Island, NY 10305", phone:"7186679749", priceValue:15, rating:4.7, img:"https://source.unsplash.com/400x300/?pizza", reviews:["Thin crust","Local"] }

];

document.addEventListener("DOMContentLoaded", () => {

  const list = document.getElementById("restaurantList");
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modalBody");

  function convertRating(rating, price) {
    return {
      bang: Math.round(rating),
      affordability: 5 - Math.floor(price / 5)
    };
  }

  function render(data) {
    list.innerHTML = "";

    data.forEach(r => {
      const { bang, affordability } = convertRating(r.rating, r.priceValue);
      const img = r.img || "https://via.placeholder.com/400x300?text=?";

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${img}">
        <div style="padding:10px">
          <h3>${r.name}</h3>
          <p>${r.borough} • ${r.cuisine}</p>
          <p>⭐ ${affordability} | 🍽 ${bang}</p>
        </div>
      `;

      card.onclick = () => openModal(r);
      list.appendChild(card);
    });
  }

  function openModal(r) {
    const mapLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(r.address)}`;
    const callLink = `tel:${r.phone}`;

    modalBody.innerHTML = `
      <h2>${r.name}</h2>
      <img src="${r.img || "https://via.placeholder.com/400x300?text=?"}" style="width:100%">
      <p>${r.cuisine}</p>
      <p>${r.address}</p>

      <button onclick="window.open('${mapLink}')">📍 Directions</button>
      <button onclick="window.location.href='${callLink}'">📞 Call</button>

      <h3>Reviews</h3>
      ${r.reviews.map(x => `<p>• ${x}</p>`).join("")}
    `;

    modal.classList.remove("hidden");
  }

  document.getElementById("closeModal").onclick = () =>
    modal.classList.add("hidden");

  modal.onclick = (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  };

  render(restaurants);
});
