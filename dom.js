var texto = document.querySelector('p')
console.log(texto)

// texto.classList.add('rojo')

var click = 0;
var likesPares = 0;

function rellenarCorazon(){

    click++

    if (click%2==0) {
        likesPares ++
        console.log(likesPares)
        var numeroDeLikes = document.querySelector('#likes') 
        console.log(numeroDeLikes.innerHTML = likesPares)      
    }  

    var iconos = document.querySelector('i')
iconos.classList.toggle('fas')

}