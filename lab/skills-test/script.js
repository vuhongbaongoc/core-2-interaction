// let numberOne = 1;
// let numberTwo = 2;

// function add(){
//   //code here
//   let numberThree = numberOne + numberTwo

//   return numberThree;
// }

//1. ADD-TWO-NUMBERS
function add(a, b) {
  var result = a + b;
  console.log(result);
}

// calling (or using) the function:
add(9, 3);

// 2. CHANGE-COLOR-GREEN
function makeItGreen() {
  var circle = document.getElementById('circle');
  circle.style.backgroundColor = 'green';
}


// 3. OBJECT (recipe, a house, or a fictional character) // (catch-up this part)
var house = {

  // 1. properties: 'livingRoom', 'bedroom', 'study', etc. 
  livingRoom: {
    // 2. numbers: 'floor'
    floor: 1,
    // 3. arrays: 'furniture' 
    furniture: ["sofa", "coffee table", "television"]
  },
  bedroom: {
    floor: 2,
    furniture: ["bed", "wardrobe", "desk"]
  },
  study: {
    floor: 1,
    furniture: ["desk", "chair"],

    // 4. nested object: 'bookshelf' 
    bookshelf: [
      { title: "Moby Dick", author: "Herman Melville" },
      { title: "1984", author: "George Orwell" },
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald" } // inside 'bookshelf' array > the 'title' property contains a string value representing the title of a book
    ]
  }
};

// Accessing the floor number of the bedroom
var bedroomFloor = house.bedroom.floor;
console.log("The bedroom is located on floor: " + bedroomFloor);

// Accessing furniture in the study
var studyFurniture = house.study.furniture;
console.log("Furniture in the study includes:", studyFurniture);

// Accessing the title of the first book on the bookshelf in the study
var firstBookTitle = house.study.bookshelf[0].title;
console.log("The first book on the bookshelf is:", firstBookTitle);



