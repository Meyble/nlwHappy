const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//get values from html 
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//creat map
const map = L.map('mapid', options).setView([lat,lng], 16);

//creat and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// creat icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})


//creat and add marker

L
.marker([lat, lng],  {icon})
.addTo(map)

/*image gallery*/

function selectImage(event){
    //aqui ele me avisa quando o botao esta selecionado 
    const button = event.currentTarget
    
    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button") //aqui eu pego da classe do css
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        //esse botao se refere ao um dos 6 botoes clicados no document.query
        button.classList.remove("active");
    }

   
    //selecionar a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");

    //att o container de image
    imageContainer.src = image.src; 


    //adivionar a classe .active para este botao
    button.classList.add('active')

}