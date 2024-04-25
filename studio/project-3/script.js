// fetch("https://data.cityofnewyork.us/resource/2hzz-95k8.json")
//   .then(response => response.json())
//   .then(data => {
//     var allLocation = data;
  
//     allLocation.forEach(location => {
//       var element = document.createElement('div');
     
//       element.className = 'theater';
//       element.innerHTML = `
//         <h2>${location.name}</h2>
//         <p>URL: ${location.url}</p>
//         <p>Address: 
//         ${location.address1}</p>
//       `;
      
//       document.body.appendChild(element);
//     });
//   })
//   .catch(error => console.error('Error:', error));

  fetch("https://data.cityofnewyork.us/resource/2hzz-95k8.json")
  .then(response => response.json())
  .then(data => {
    var allLocation = data;
  
    allLocation.forEach(location => {
      var element = document.createElement('div');
      element.innerHTML = `<div class="theater" onclick="window.open('${location.url}','mywindow');" style="cursor: pointer;"></div>`;
      document.body.appendChild(element); //get the HTML document, go to the <body> tag, append (meaning "add") a new element called "element"
    });
  })
  .catch(error => console.error('Error:', error));

  
