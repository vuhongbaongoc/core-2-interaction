// var apiUrl = "https://geojson.org/geojson-ld/geojson-context.jsonld";

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   });

fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME")
  .then(response => response.json())
  .then(data => {
    var properties = data;
  
    properties.forEach(periods => {
      var element = document.createElement('div');
     
      element.className = 'periods';
      element.innerHTML = `
      <img src="${periods.url}"/>
      <p> Id: ${periods.id} </p>
      <p> Width: ${periods.width} </p>
      <p> Height: ${periods.height} </p>
      `;
        
      document.body.appendChild(element);
    });
  })

  .catch(error => console.error('Error:', error));


//   <h2>Number: ${periods.number}</h2>
//   <p>Name: ${periods.name}</p>
//   <p>Start Time: ${periods.startTime}</p>
//   <p>End Time: ${periods.endTime}</p>
//   <p>Is Day Time ${periods.isDaytime}</p>
//   <p>Temperature: ${periods.temperature}</p>
//   <p>Temperature Unit: ${periods.temperatureUnit}</p>
//   <p>Temperature Trend: ${periods.temperatureTrend}</p>
//   <p>Probability Of Precipitation: 
//   ${periods.probabilityOfPrecipitation.unitCode},
//   ${periods.probabilityOfPrecipitation.value} </p>
//   <p>Dew Point: 
//   ${periods.dewpoint.unitCode},
//   ${periods.dewpoint.value} </p>
//   <p> Relative Humidity:
//   ${periods.relativeHumidity.unitCode},
//   ${periods.relativeHumidity.value} </p>
//   <p> Wind Spped: ${periods.windSpeed} </p>
//   <p> Wind Direction ${periods.windDirection}</p>