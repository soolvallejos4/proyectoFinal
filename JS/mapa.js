//La variable dietetica esta definida en global scope, por lo que podemos acceder a ella desde cualquier sitio
let map;
let markers = [];



const setListener = () => {
  document.querySelectorAll('#tiendaNombre').forEach((dieteticaName, index) => {
    dieteticaName.addEventListener("click", () => {
      google.maps.event.trigger(markers[index], "click")
    })
  })
}




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



  const marker = new google.maps.Marker({
    position: coord,
    map: map,
  })
  google.maps.event.addListener(marker, "click", () => {
    infoWindow.setContent(html);
    infoWindow.open(map, marker);
  })
  markers.push(marker);
};


const creatLocationMarkers = () => {
  let bounds = new google.maps.LatLngBounds();
  dieteticas.forEach((dietetica) => {
    let coord = new google.maps.LatLng(dietetica.lat, dietetica.lng)
    let name = dietetica.name;
    let address = dietetica.address;
    let phone = dietetica.phone;

    bounds.extend(coord);
    createMarker(coord, name, address, phone);
    map.fitBounds(bounds);
  });
}


function initMap() {
  let caba = { lat: -34.62478470595177, lng: -58.482747059438395 }
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: caba,
  });
  // console.log(dieteticas);
  creatLocationMarkers();

  infoWindow = new google.maps.InfoWindow();

  setListener();


};


