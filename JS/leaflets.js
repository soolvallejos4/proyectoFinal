//Inicializacion del mapa en la ciudad de buenos aires
let caba = { lat: -34.62478470595177, lng: -58.482747059438395 };
let mymap = L.map('mapid').setView(caba, 9);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);


//Funcion que itera sobre el erray de las dieteticas que esta en el el archivo dieteticasCoodenadas.js

for (let i = 0; i < diet.length; i++) {

    console.log(diet[i]);

    market = new L.marker([diet[i][0], diet[i][1]]).bindPopup(`<ul class="tiendasPopup">
    <li>${diet[i][2]}</li><li>🏪 ${diet[i][3]}</li><li>☎️ ${diet[i][4]}</li></ul> `).addTo(mymap)
}


