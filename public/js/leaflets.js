//Inicializacion del mapa en la ciudad de buenos aires
let caba = { lat: -34.62478470595177, lng: -58.482747059438395 };
let mymap = L.map('mapid').setView(caba, 11);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);



let markers = [] //Creo un arrey markers que se van a ir guardando los marker por separado
for (let i = 0; i < diet.length; i++) {
      //Mediante la variable diet traigo las coordenadas del archivo dieteticasCoordenadas  
    marker = new L.marker([diet[i][0], diet[i][1]]).bindPopup(`<ul class="tiendasPopup">
    <li>${diet[i][2]}</li><li>🏪 ${diet[i][3]}</li><li>☎️ ${diet[i][4]}</li></ul> `).addTo(mymap)
    
    
    markers.push(marker)
}
console.log(markers)


