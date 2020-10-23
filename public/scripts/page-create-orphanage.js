//creat map
const map = L.map('mapid').setView([-8.2784839,-35.9740272], 16);

//creat and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// creat icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68]
})

let marker;

map.on('click', (event) =>{
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    //pegando os valores de lat e lng
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon layer
    marker && map.removeLayer(marker);


    //add ivon layer 
    marker = L.marker([lat, lng], {icon}).addTo(map);

})

//adicionar o campo de fotos

function addPhotoField(){
    //pegar o container de fotos id="images"
    const container = document.querySelector('#images')
    //pegar o contaner para dublicar div=new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionadas
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)// ele conta quantas imagens tem no array faz -1 pra ficar normal e da uma resposta true se foi clonado
    
    
    //verificar se o campo esta vazio, se sim, nao adicionar ao container de imagens
    const input = newFieldContainer.children[0] //eu coloc 0 pois o input esta na posição 0, so colocar console.log(newFieldContainer)

    if(input.value == ""){
        return
    }
    //limpar o campo antes de adicionar ao container de imagens 
    input.value = "" 
    //advionar o clone ao container de id=images
    container.appendChild(newFieldContainer)
}

function deletField(event){
    const span = event.currentTarget  

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo 
    span.parentNode.remove() // parentNode me mostra quem é o pai de span

}

//seleção do sim e nao
function toggleSelect(event){
    //retirar a class .active (dos botões)
    document.querySelectorAll('.button-select button')
    .forEach(button =>button.classList.remove('active'))
    //add a class .active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')
    //pegar o botão clicado 

    

    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    //verificar se sim ou nao 
    input.value = button.dataset.value
}

