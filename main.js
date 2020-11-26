/*let slider           = document.querySelector('.slider-contenedor');
let sliderIndividual = document.querySelectorAll('.contenido-slider');
let firstWidth       = sliderIndividual[0].clientWidth;
let contador         = 1;
let interval         = 1500;



//Resize

window.addEventListener('resize', function(){
    firstWidth = sliderIndividual[0].clientWidth;
    console.log(firstWidth);
});

setInterval(function(){
    slide();
}, interval)

function slide(){
    slider.style.transform  = "translate("+(-firstWidth*contador)+"px)";
    slider.style.transition = "transform 2s";
    contador++;
    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translateX(0px)";
            contador = 1;
        }, 1000);
    }
}

*/
