----------------------VARIABLES Y OPERADORES

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?
Una variable es la representación en código de un espacio en memoria, se usa para apartar/guardar/modificar un valor de forme dinámica
Espacio en memoría donde se puede guardar información, cualquier cosa, depende del lenguaje, tipos y estructuras de datos

- ¿Cuál es la diferencia entre declarar e inicializar una variable?
Al declarar una variable, yo sólo la nombro para apartar el espacio en memoria, tiene un valor inicial indefinido, luego, al inicializar una variable, yo le otorgo un valor a esa variable
Decirle a JS que creamos una variable: DECLARAR
Asignar un valor a la variable: INICIALIZAR
Volver a asignar un valor a la variable: RE-INICIALIZAR


Para crear variables en JS, varias formas:
- var, forma más antigua, tiene errores en nuevas versiones de JS
- let, puede la variable tomar más valores después
- const, NO se puede cambiar el valor a la variable, es constante, valor siempre es el mismo


- ¿Cuál es la diferencia entre sumar números y concatenar strings?

Sumar números es una operación matemática, donde habrá un resultado distinto a sus implicados, se usa sólo con números, al concatenar, es unir dos cosas, por consiguiente, el resultado es directamente los strings implicados, unidos.

- ¿Cuál operador me permite sumar o concatenar?
Ambas acciones se dan con el operador “+”, la diferencia es que cuando se usa entre sólo números, se realiza la acción de sumar, cuando se concatena es porque alguno de los implicados en la operación, es un string.

2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
Nombre
Apellido
Nombre de usuario en Platzi
Edad
Correo electrónico
Mayor de edad
Dinero ahorrado
Deudas
----------------
```
Nombre: string 
Apellido: string
Nombre de usuario en Platzi: string 
Edad: number
Correo electrónico: string
Mayor de edad: boolean
Dinero ahorrado: number
Deudas: number
```
3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
```
let name = 'Thomas' ;
let lastName = 'Morales'; 
let username = 'thom037';
let mail = 'thomas@pedro.com';
let isLegalAge = true;
let moneySaved = 1000;
let debts = 100;
```

4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
- Nombre completo (nombre y apellido)
```
let name = prompt("Digita tu nombre");
let lastName = prompt("Digita tu apellido");
 console.log(`Hola, tu nombre completo es ${name} ${lastName} `);


function fullName(name, lastName){
    return name + ' ' + lastName
}

```

- Dinero real (dinero ahorrado menos deudas)

```
 let moneySaved = prompt("Digita tu dinero ahorrado");
 let debts = prompt("Digita tus deudas");
 let realMoney = moneySaved - debts;
 console.log(`Hola, tu dinero real es ${realMoney} `);
```

--------------FUNCIONES

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

-¿Qué es una función?
Una función en el conjunto de sentencias para hacer cálculos con variables, pueden ser declarativas o de expresión(anónimas)
Forma de encapsular bloques de código, reutilizables en código futuro, llamándolas cuando sea necesario

-¿Cuándo me sirve usar una función en mi código?
Cuando necesito un resultado, con diferentes valores pero con el mismo procesamiento interno
Cuando tenemos bloques de código muy parecidos (con cambios que podrían ser parámetros y argumentos) que podemos encapsular para reutilizar más de una vez en el futuro
También es útil para ordenar y mejorar la legibilidad del código

-¿Cuál es la diferencia entre parámetros y argumentos de una función?
Parámetro, lo que recibe una función cuando se está CREANDO
Ej

```js
function pepe(param1, param2){
    return 0
}
```

Argumento, cuando se ejecuta la función, se le envían argumentos llamados a ejecutar
```js
pepe(arg1, arg2)
```


2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```js
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function userGreeting(name, lastName, nickname){
const completeName = fullName(name, lastName);

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

```
 
----------------- CONDICIONALES

1️⃣ Responde las siguientes preguntas en la sección de comentarios:
-¿Qué es un condicional?
Función del lenguaje que permite realizar una acción u otra, dependiendo de validaciones con variables
Forma en que se ejecuta un bloque de código u otro dependiendo de alguna validación o condición 


-¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
If (else y else if), no siempre la validación es de la misma variable, puede haber más condiciones
Permite hacer validaciones completamente distintas en cada validación o condicional

Operador ternario

switch, todos los casos se comparan con la misma variable o condición que se define

-¿Puedo combinar funciones y condicionales?
Sí, las funciones pueden encapsular cualquier bloques de códigos, incluyendo condicionales

2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```js
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

```
Solución:

```js
if (tipoDeSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
```

-------------Si dentro de una función tenemos if, y queremos que después de realizar la acción del bloque, no haga nada más, se usa return;---------------

3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
Solución:

```js

function getTypeSuscription(tipoDeSuscripcion){

    if (tipoDeSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis");
    return;
    };
    
    if (tipoDeSuscripcion == "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
      return;
    };
    
    if (tipoDeSuscripcion == "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
      return;
    };
    
    if (tipoDeSuscripcion == "ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
      return;
    };

    console.warn('Ese tipo de suscripción no existe')
}

```


Bonus: Cómo replicar este comportamiento con arrays u objetos y un solo condicional.

```js
//Otra forma de acceder al objeto

suscriptions['free']
suscriptions.free

const suscriptions = {
    Free : "Solo puedes tomar los cursos gratis",
    Basic : "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert : "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertPlus : "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
};


function typeSuscription1conditional(type){
    if (suscriptions[type]){
        console.log(suscriptions[type])
        return;
    }
    console.warn('Este tipo de suscripción no existe')

}

```


--------------------------------CICLOS---------------------------

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

-¿Qué es un ciclo?
Manera fácil de hacer que una tarea se repita controladamente
Forma de ejecutar el mismo bloque de código hasta que se cumpla una condición
A diferencia de los condicionales, que se ejecutan una sóla vez

-¿Qué tipos de ciclos existen en JavaScript?
for, obliga a definir qué pasa al principio y final del ciclo, creamos una variable con su valor y después pregunta qué hacer con la variable hasta terminar la valdación
el for deja crear en el mismo condicional la variable que cambiará, el while no
while, hace la validación antes de hacer las ejecutar el bloque de código
do while, la primera vez ejecuta el código sin ver la validación, luego hace la validación, dependiendo de eso vuelve a ejecutarse o no

-¿Qué es un ciclo infinito y por qué es un problema?
Un ciclo infinito es aquel en donde la condición para que se cumpla, nunca se cumple. El problema es que genera un bug donde el procesador va a seguir realizando la rutina por siempre, no va a ejecutar 
el resto del codigo, termina toteando (dañando) la aplicación

-¿Puedo mezclar ciclos y condicionales?
Sí, los ciclos son una especia de condicionales, nada impide agregar más condicionales detro del ciclo


2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

let i = 0;
while(i < 5){
    console.log("El valor de i es: " + i);
    i ++;
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);

}

let i = 10;
while(i >= 2){
    console.log("El valor de i es: " + i);
    i--;
}

```

3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.

RTA 1
```js
    let calculo;

while (calculo != '4'){
    calculo = prompt("¿Cuánto es 2+2?");
    if (calculo == 4){
        console.log("¡Felicidades!");
    }else{
        console.log("Lo siento, vuelve a intentarlo"); 
    }
}
```

RTA 2
```js
let respuesta;
while (respuesta != '4'){
    let pregunta = prompt('¿Cuánto es 2+2?')
    respuesta = pregunta
}

```

---------------------------LISTAS----------------

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

-¿Qué es un array? []
array es una estructura de datos, que guarda cualquier tipo de variable
lista de elementos 
```js
let arraystring = [1, "pera", true, false, "tres"];
```

-¿Qué es un objeto? {}
Lista de elementos, PERO, cada elemento tiene un nombre clave (como un diccionario)
```js
const obj = {
    name : 'pepito',
    age : 3,
    favortiteFood: ['vegetables','chicken', 'meal']
};

```

-¿Cuándo es mejor usar objetos o arrays?
Cuando un elemento no es importante, no es revelante a los demás, se usan los arrays. Cuando sí se debe distinguir, los nombres de los elementos son importantes, un objeto

-¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
Sí, los arrays pueden guardar objetos. Y los objetos puedes guardar arrays entre sus propiedades

2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```js

let arraystring = ["pepe", "pera", "uno", "dos", "tres"];

let arraynum = [6, 3, 2, 45, 10];

function arrays(array){
    console.log(array[0])
}
```

3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```js
//De atrás hacia adelante
function imprimirarray(array){
    for (var i = array.length; i >= 0; i --){
        console.log(array[i]);
        }
}

//De adelante hacia atrás

function imprimirarray2(array){
    for (var i = 0; i <= array.length; i ++){
        console.log(array[i]);
        }
}
```

4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

Un objeto no tiene posiciones como un array, para imprimirlo, se convierte a arrays con la función Object.values(), en este caso, sólo saca los values, no las keys


```js
//De atrás hacia adelante
function imprimirarrayObj1(obj){
    const array = Object.values(obj);
    for (var i = array.length; i >= 0; i --){
        console.log(array[i]);
        }
}

//De adelante hacia atrás

function imprimirarrayObj2(obj){
    const array = Object.values(obj);
    for (var i = 0; i <= array.length; i ++){
        console.log(array[i]);
        }
}
```