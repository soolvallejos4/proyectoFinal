//La variable dietetica esta definida en global scope, por lo que podemos acceder a ella desde cualquier sitio, sin la utilización de nodejs.
let map;
let markers = [];


//Permite linkear el html con el js para cada tienda. Hacer click en "Ver en mapa" del html
const setListener = () => {
  document.querySelectorAll('#tiendaNombre').forEach((dieteticaName, index) => {
    dieteticaName.addEventListener("click", () => {
      google.maps.event.trigger(markers[index], "click")
    })
  })
}



//hubica cada etiqueta dentro del mapa, con su informacion individual. 
const createMarker = (coord, name, address, phone) => {
  let html = `
  <div class="window">
          <h6>${name}</h6>
          <div class="address">
          <i class="fas fa-map-pin fa-lg"></i>
          <h6>${address}<h6>
          </div>

          <div class="phone">
          <i class="fas fa-phone-volume fa-lg"></i>
          <h6>${phone}<h6>
          </div>   
   </div>`
   //Caada markador individual
  const marker = new google.maps.Marker({
    position: coord,
    map: map,
  })
  //Permite hacer click en el markador para que de la informacion (globito rojo hubicado en el mapa)
  google.maps.event.addListener(marker, "click", () => {
    infoWindow.setContent(html);
    infoWindow.open(map, marker);
  })
  markers.push(marker);
};

//crea las etiquetas de las dieteticas utilizando mapa.js (coordenadas)
const creatLocationMarkers = () => {
  //Permite extender el mapa en caso de si una locacion se encuentra fuera del rango pre establecido (bounds)
  let bounds = new google.maps.LatLngBounds();
  dieteticas.forEach((dietetica) => {
    let coord = new google.maps.LatLng(dietetica.lat, dietetica.lng)
    let name = dietetica.name;
    let address = dietetica.address;
    let phone = dietetica.phone;
    
    bounds.extend(coord);
    //callback de las etiquetas individuales, link entre el html y el js.
    createMarker(coord, name, address, phone);//Callback de las etiquetas individuales
    map.fitBounds(bounds);
  });
}

//funcion inicial de google map
function initMap() {
  let caba = { lat: -34.62478470595177, lng: -58.482747059438395 }
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: caba,
  });
  // console.log(dieteticas);
  creatLocationMarkers();//Callback de la funcion que crea a los markets, utilizando mapa.js(las coordenadas)
  infoWindow = new google.maps.InfoWindow();
  setListener();//Callback de la funcion que linkea el js con el html, click en "Ver en mapa"
};


