//Inicializacion del mapa en la ciudad de buenos aires
let caba = { lat: -34.62478470595177, lng: -58.482747059438395 };
let mymap = L.map('mapid').setView(caba, 11);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);


//Funcion que itera sobre el erray de las dieteticas que esta en el el archivo dieteticasCoodenadas.js
//Creo un arrey markes que se van a ir guardando los marker por separado
let markers = []
for (let i = 0; i < diet.length; i++) {
        
    marker = new L.marker([diet[i][0], diet[i][1]]).bindPopup(`<ul class="tiendasPopup">
    <li>${diet[i][2]}</li><li>🏪 ${diet[i][3]}</li><li>☎️ ${diet[i][4]}</li></ul> `).addTo(mymap)

    
    markers.push(marker)
 


}


//traigo el html Ver en mapa
const links = document.querySelectorAll('.links');



//creo un loop para que en cada links, se cree un link y su posicion
links.forEach((link, index) => {
    link.addEventListener('click', () => 
    {
        marker.openPopup(markers[index])
        }
    

    )


})

