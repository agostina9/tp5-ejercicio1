let numeroAdivinar = 0;
let formulario = document.querySelector('#formulario');

// agregar eventos desde js
formulario.addEventListener('submit', adivinar);

function comenzarJuego(){
  numeroAdivinar =  Math.floor(Math.random()*(10-1 +1) + 1)
console.log(numeroAdivinar);
}

function adivinar(e){
    e.preventDefault();
    console.log('desde la funcion adivinar');
let numeroIngresado = document.querySelector('#inputAdivinar').value;
console.log(numeroIngresado)
if(numeroIngresado == numeroAdivinar){
    alert("¡Acertaste!")
}
else if (numeroIngresado < numeroAdivinar){
    alert("¡Fallaste! Tu número  es menor al número mágico " )
}
else{
    alert("¡Fallaste! Tu número es mayor al número mágico ")
}
}

