// Función para leer HTML desde JS document.getElement, document.querySelectorAll, document.querySelector
//Node.js es el ejecutador de JS para back-end
// querySelector pide que le pasemos (en un string) el selector del elemento HTML desde JS, por el nombre, ya sea etiqueta, clase, id


/*
const h1 = document.querySelector('h1'); //Por nombre de la etiqueta
const p = document.querySelector('p'); // Por nombre de párrafo
const parrafito = document.querySelector('.parrafito'); //Párrafo con clase parrafito
const pid = document.querySelector('#pid'); //Párrafo con id
const input = document.querySelector('input'); //para input


//Para imprimir un objeto, nombre + valor

console.log(input.value); //Acá nos muestra el HTML que renderiza el selector
//Cuando se imprime dentro de un objeto, muestra todas las propiedades 
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

//Con la propiedad innerHTML se puede cambiar lo que se muestra de contenido por medio de JS, del código original de HTML
h1.innerHTML = 'Pedra <br> Feo'; //Puede meterse cualquier código HTML


h1.innerText = 'Pedra <br> Feo'; //Sólo coloca el código como texto

console.log(h1.getAttribute('class')); //Para leer cualquier atributo
//h1.setAttribute('class','red') //Para acceder a cambiar una clase
//console.log(h1.getAttribute('class')); //Para ver el cambio del color de la clase, se imprime luego la misma propiedad

h1.classList.add('rojo'); //Para agregar a la clase que ya tenía desde HTML
h1.classList.remove('blue'); //Para eliminar a la clase que ya tenía desde HTML
h1.classList.toggle('verde');
h1.classList.contains('verde');

input.value = "Thomas" //Por efecto dejar un valor, sólo es necesario ingresar a value

//Para crear un elemento HTMl desde cero
console.log(document.createElement('img')) //COn esto sólo se ve desde la consola

const img = document.createElement('img');  //crear una imagen en una constante
img.setAttribute('src', 'https://www.mindicsalud.com/sites/default/files/styles/open_graph/public/tecnica-pomodoro.jpg?itok=mu0wKM8O'); //a la imagen se le colocaron los atributos

console.log(img);

pid.innerHTML = ""; //Para omitir el párrafo de id y que quede sólo la imagen

pid.append(img); //insertar la imagen dentro de un contenedor que ya existía, agrega elemento después de lo que ya había

*/

/*
//Escuchar eventos desde JS

//Primero seleccionar los elementos de HTML en JS
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const verResult = document.querySelector('#result');

//función para escuchar el atributo de cambio en HTML como onClick, onChange
function btnOnClick(){
    const sumInputs = Number(input1.value) + Number(input2.value);
    verResult.innerText = "El resultado es: " + sumInputs;
}

*/

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const verResult = document.querySelector('#result');
const form = document.querySelector('#form');

//agrega un escuchador de eventos, dos argumentos, nombre del evento que se quiere ejecutar y el segundo, el código JS que se envía a llamar cuando ocurra el evento
// la función que se manda en addEventListener va sin paréntesis porque MANDA A LLAMAR, pero no la ejecuta, por dentro listener le pone los paréntesis


form.addEventListener('submit',btnOnClick);

function btnOnClick(event){
    console.log({event})
    event.preventDefault();  //Para evitar que se recargue la página
    const sumInputs = Number(input1.value) + Number(input2.value);
    verResult.innerText = "El resultado es: " + sumInputs;
}









