// add function
function add(a, b) {
  var result = a + b;
  console.log(result);
}

// change color to green
function makeItGreen() {
  document.getElementById("circle").style.backgroundColor = "green";
}


// object (includes at least 5 properties: strings, numbers, at least 1 array and 1 nested object)
var house = {
  address: "440 5th Ave",
  city: "New York",
  zipcode: "10001",
  livingRoom: { 
    furniture: ["couch", "fireplace", "coffee table", "floor lamp", "dinning table"],
    ultilities: ["light", "wifi", "electricity"], 
    size: {
      width: 12,
      length: 18,
    }
  },
  bedroom: {
    furniture: ["bed", "wardrobe", "desk"],
    ultilities: ["central air", "heater", "light"],
    size: {
      width: 11,
      length: 12,
    }
  },
  kitchen: {
    furniture: ["dishwasher", "sink", "fridge", "oven", "microwave", "stove"],
    ultilities: ["gas", "water"],
    cabinets: [
      { item: "Pans", category: "Cookware and Bakeware" },
      { item: "Cultery Sets", category: "Dining table accessories" },
      { item: "Food-Storage Boxes", category: "Cooking accesories" },
      { item: "Tablecloths", category: "Kitchen textiles" },
    ],
    size: {
      width: 13,
      length: 13,
    }
  },
  occupants: [
    {
      name: "Mia Chen",
      age: 25,
      occupation: "Researcher"
    },
    {
      name: "John Anderson",
      age: 30,
      occupation: "Graphic Designer"
    }
  ]
};

// address
var houseAddress = house.address;
console.log("Address: " + houseAddress);
// city
var houseCity = house.city;
console.log("City: " + houseCity);
// zipcode
var houseZipcode = house.zipcode;
console.log("Zipcode: " + houseZipcode);

// furniture in the living room
var livingRoomFurniture = house.livingRoom.furniture;
console.log("Furniture in Living Room:", livingRoomFurniture);
// ultilities in the living room
var livingRoomUltilities = house.livingRoom.ultilities;
console.log("Ultilities in Living Room:", livingRoomUltilities);
// living room size
var livingRoomSize = house.livingRoom.size;
console.log("Living Room Size:", livingRoomSize);

// bedroom furniture
var bedroomFurniture = house.bedroom.furniture;
console.log("Furniture in Bedroom:", bedroomFurniture);
// bedroom ultilities
var bedroomUltilities = house.bedroom.ultilities;
console.log("Ultilities in Bedroom:", bedroomUltilities);
// bedroom size
var bedroomSize = house.bedroom.size;
console.log("Bedroom Size:", bedroomSize);

// furniture in the kitchen
var kitchenFurniture = house.kitchen.furniture;
console.log("Furniture in Kitchen:", kitchenFurniture);
// ultilities in the living room
var kitchenUltilities = house.kitchen.ultilities;
console.log("Ultilities in Kitchen:", kitchenUltilities);
//things in cabinets
var cabinetsItems = house.kitchen.cabinets;
console.log("Items in kitchen's cabinets are:", cabinetsItems);
// access the first item inside the kitchen's cabinet
var firstCabinetItem = house.kitchen.cabinets[0].item;
console.log("The first item in the cabinet is:", firstCabinetItem);
// first category
var firstCabinetItemCategory = house.kitchen.cabinets[0].category;
console.log("The first item's category is:", firstCabinetItemCategory);

//occupants
var houseOccupants = house.occupants;
console.log("Ocucpants of this house is:", houseOccupants);




// let numberOne = 1;
// let numberTwo = 2;

// function add(){
//   //code here
//   let numberThree = numberOne + numberTwo

//   return numberThree;
// }
