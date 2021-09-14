//-------------------------Toogle imagenes de recetas------

let mostrarRecetas = document.querySelectorAll(".card-title")
let cuerpoRecetas = document.querySelectorAll(".card-body")


mostrarRecetas.forEach((mostrarReceta) => {
    mostrarReceta.addEventListener("click", () => {        
        cuerpoRecetas.forEach((cuerpoReceta) => {
            cuerpoReceta.classList.toggle('toggleCard');
            
            console.log(mostrarReceta, cuerpoReceta)
        })
    })

})