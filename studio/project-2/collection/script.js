collection = [
  {
    "title": "Coin Pouch",
    "color": "White",
    "material": "Cotton",
    "why": "I was finding someways to find my coins",
    "location": "New York",
    "description": "A small white coin pouch.",
    "image": "pouch.png" 

  },
  {
    "title": "Fragrance Car Tag",
    "color": "Cream",
    "material": "Paper",
    "why": "It was a gift with purchase.",
    "location": "New York",
    "description": "A square, cream car tag wrapped with plastic packaging.",
    "image": "cartag.png" 
  },
  {
    "title": "Big Bus Receipt",
    "color": "White",
    "material": "Paper",
    "why": "It was my first time traveling alone and visiting Los Angeles. I was exploring the city by myself, and it was a memorable and one of a kind experience that I've never had before.",
    "location": "Los Angeles",
    "description": "Los Angeles Celebrity & Lifestyle Tour Ticket Receipt.",
    "image": "receipt.png" 
  },
  {
    "title": "Takashi Murakami Sticker Tag",
    "color": "White",
    "material": "Vinyl",
    "why": "I bought a bag charm/ pin during my trip to LA, and from one of the museum that I visited",
    "location": "Los Angeles",
    "description": "Signature flower with smiley face from Takashi Murakami.",
    "image": "sticker2.png" 
  },
  {
    "title": " Brandy Melville Sticker ",
    "color": "Pink",
    "material": "Vinyl",
    "why": "I got it for free at the Brandy Melville store along with my purchase at the Brandy Meville store in LA. I thought it was cute to have.",
    "location": "Los Angeles",
    "description": "It's an illustration of a pizza truck. ",
    "image": "sticker.png" 
  },
  {
    "title": "Laduree Menu Flyer",
    "color": "Light_green",
    "material": "Paper",
    "why": "The design and packaging was very cute and appealing.",
    "location": "New York",
    "description": "Contains Laduree's menu of macaron favours, storage tips, and branding.",
    "image": "laduree.png" 
  },
  {
    "title": "Named Collective Sticker",
    "color": "Metalic",
    "material": "Vinyl",
    "why": "Come along with my order from Named Collective, a clothing brand based in London.",
    "location": "New York",
    "description": "Three flowers with multiple colors with white background.",
    "image": "sticker3.png" 
  },
  {
    "title": "Pin",
    "color": "Red",
    "material": "Metal",
    "why": "A birthday gift from my friend.",
    "location": "New York",
    "description": "It was a balerina-shaped pin to put on bags clothes.",
    "image": "pin.png" 
  },
  {
    "title": "Doordash receipt",
    "color": "White",
    "material": "Paper",
    "why": "It was when my friend suprises me by doordashing food to my pace.",
    "location": "New York",
    "description": "It is just a normal receipt with name, order, and the price amount.",
    "image": "receipt2.png" 
  },
  {
    "title": "Clothing tags/ Packaging",
    "color": "White",
    "material": "Paper",
    "why": "I keep random clothing tags just for fun.",
    "location": "New York",
    "description": "Normal clothing tags with brand names on it. ",
    "image": "receipt.png" 
  },
  {
    "title": "The MET ticket",
    "color": "White",
    "material": "Paper",
    "why": "My visit was for an assignment in the beginning of the school year.",
    "location": "New York",
    "description": "Purchasing detail and admission information written on the ticket/ receipt. ",
    "image": "met.png" 
  },
  {
    "title": "Film Rolls",
    "color": "Cream",
    "material": "Polyester",
    "why": "It was a film role I took with my friends during our trip to Chicago for winter break that I found was a fun experience and memory, captured in film.",
    "location": "Chicago",
    "description": "The negative films roll with images in physical form.",
    "image": "filmrolls.png" 
  },
  {
    "title": "Pink Cactus Packaging",
    "color": "Beige",
    "material": "Paper",
    "why": "I received a small pink cactus from a friend and I happen to keep the packaging as a memory.",
    "location": "New York",
    "description": "Written care instructions for the cactus and its information.",
    "image": "cactus.png" 

  },
  {
    "title": "Birthday cards/ letters",
    "color": "White",
    "material": "Paper",
    "why": "I love give out hand-written letters as much as I want to keep them. These are letters I received from my friend and I love to read them once in a while. ",
    "location": "New York",
    "description": "Different colors and sizes cards.",
    "image": "letter.png" 
  },
  {
    "title": "Plane tickets/ luggage tag",
    "color": "White",
    "material": "Paper",
    "why": "I like to keep plane tickets as a memory in its physical form.",
    "location": "",
    "description": "Mostly these are plane tickets that I traveled within the U.S. Some of them includes Chicago, Ohio, and Los Angeles. It's a normal plane tickets with flight information written on it.",
    "image": "plane.png" 
  },
  {
    "title": "Photos",
    "color": "Cream",
    "material": "Polyester",
    "why": "A physcial form of my memories. ",
    "location": "New York",
    "description": "It was a few photos from photo booths that I took with my friends in the city.",
    "image": "photo.png" 
  },
  {
    "title": "Postcard",
    "color": "White",
    "material": "Paper",
    "why": "I got it for free at a Museum I went to in Chicago.",
    "location": "Chicago",
    "description": "It contains image and information about the museum.",
    "image": "card.png" 
  },
  {
    "title": "Gift-wrap paper",
    "color": "Red",
    "material": "Paper",
    "why": "It was during Christmas where my friends and I played secret santa, it was a fun memory so I decided to keep the giftwrap paper to remind me of that memory whenever I look at it.",
    "location": "Chicago",
    "description": "It was Christmas-themed with a few illustrations and the main color palette is red.",
    "image": "giftpaper.png" 
  },
];

// console.log(collection[0].w + "inches" + "x" + collection[0].h + "inches");

let materialList = document.getElementById("material_list"); 
// materiallist is a variable = go into html doc, and get element by its id, and the id is material_list
// console.log(materialList);

console.log(collection[2].color);

//how to reference a value in JSON: nameOfJSON[indexNumber].key
//For example: collection[2].color = "White"

// to go through all items, starting at 0 (always start at 0); check i is less than collection length; when done running code below, increase i by 1
// lets run a loop, set at 0, check less than the length, then add 1 & redo
for (let i = 0; i < collection.length; i++) {
  
  // produce a random number and sends back to whatever calls it
  function random() {
    let number = Math.floor(Math.random() * 100);
    return number // sends the info back
  }

  let listItem = document.createElement("div"); // for each item in your JSON, create a new div called list item
  let materialDiv = document. createElement("div"); // for each material, create a new div called material div

  listItem.innerText = collection[i].title; // go to listitem div, and set the inner text to title
  materialDiv.innerHTML = 
  `<img class="item-image" src="${collection[i].image}" /> <br>
  <span class='title'>Material: </span> ${collection[i].material} <br> 
  <span class='title'>Why: </span> ${collection[i].why} <br>  
  <span class='title'>Location: </span> ${collection[i].location}`;  // Add additional values below here...

  // let hello = "HI Andrew!"
  // console.log(`Blah blah, ${hello} How are you today?`);
  
  // Add color class
  listItem.classList.add(collection[i].color); 
  listItem.classList.add("item"); 
  
  //Add material class
  materialDiv.classList.add(collection[i].material); // go to material div and give 2 classes; first one is item material
  materialDiv.classList.add("material"); // 2nd one is word material
  
  // positioning
  listItem.style.top = random() + "vh"; // next, position listitem. vh: viewport height (take random number+add numebrs to it); can use px instead
  listItem.style.left = random() + "vw"; // styling from left
  
  listItem.appendChild(materialDiv); // put material div inside listitem div,
  materialList.appendChild(listItem); // wrap everything back 


  const images = {
    "image1": "pouch.jpeg",
};
}

// add image path 