import 'bootstrap/dist/css/bootstrap.css'

document.getElementById('svg2').addEventListener('click', function (event) {
  console.log(event);
//  console.log(event.path[0].id);
  
  event.path[0].style.fill='red';

  fetch('http://restcountries.eu/rest/v1/alpha?codes=' + event.path[0].id)
  .then
    ((response) => {
      return response.json();
    } )
  .then 
    ((data) => {
      console.log(data);
      document.getElementById("country").innerHTML = "Country: " + data[0].name + 
                                                     "<br>Population: " + data[0].population + 
                                                     "<br>Area: " + data[0].area +
                                                     "<br>Borders: " + data[0].borders.join(); 
    } );
  
}, false);

