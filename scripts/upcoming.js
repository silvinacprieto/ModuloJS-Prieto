console.log(data); /* con esto traigo el array de la hoja de datos */
const allEvents = data.events;
console.log(allEvents)

let arrayEvents = [] /* uso iteraciones para crar las tarjetas a partir de la información en data.js */
for (let event of allEvents){
    if (! event.assistance) {
        let card = `
        <div class="card">
        <img src="${event.image}" class="card-img-top imgevents" alt="${event.name}">
            <div class="card-body">
                <h5 class="card-title">"${event.name}"</h5>
                <p class="card-text">${event.description}</p>
                <a href="./details.html" class="btn btn-light">see more</a>
            </div>
        </div>    
        `
        console.log(card)
        arrayEvents.push(card)
    }
}


/* creo una función para poder ver en pantalla las cards creadas. Consejo usar nombres de funciones que sean intuitivas de su función (en mi caso showCards). Lo primero que debe hacer mi función es seleccionar es seleccionar el contenedor padre de las cards (use getElementById y el id que le puse al contenedor es cardEvents).   */
function showCards(){
    let cardsEvents = document.getElementById("cardEvents")
    cardsEvents.innerHTML = arrayEvents.join ('') /* debo colocar el array con los datos de los eventos pero no puedo imprimir directamente el array así que uso el metodo join para convertirlo en string */
}

showCards()