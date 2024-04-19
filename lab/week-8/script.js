collection = [ 
    {
  "artifacts": [
    {
      "title": "Car Tag",
      "color": "Beige",
      "material": "Paper or Cardboard",
      "where & why": "From My Mum Made It",
      "description": "Fragrance Car Tag"
    },
    {
      "title": "Car Tag",
      "color": "Beige",
      "material": "Paper or Cardboard",
      "where & why": "From My Mum Made It",
      "description": "Fragrance Car Tag"
    },
    {
      "title": "Car Tag",
      "color": "Beige",
      "material": "Paper or Cardboard",
      "where & why": "From My Mum Made It",
      "description": "Fragrance Car Tag"
    },
    {
      "title": "Car Tag",
      "color": "Beige",
      "material": "Paper or Cardboard",
      "where & why": "From My Mum Made It",
      "description": "Fragrance Car Tag"
    }
  ]
    }
];

// console.log(collection[0].w + "inches" + "x" + collection[0].h + "inches");


let materialList = document.getElementById("material_list");
// console.log(materialList);

for(let i = 0; i < collection.length; i++) {
  console.log(collection[i].material);
  let listItem = document.createElement ("li");
  listItem.innerText = collection[i].material;
  materialList.appendChild(listItem);
  console.log(listItem);
}
