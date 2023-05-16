//alert("hola mundo");   //hola mundo

// comentarios de linea 
/* comentarios de mas de una linea 
*/

// sentencias 
//alert('hola'); alert('mundo');
//alert('hola');
//alert('mundo');

//variables
let a=5;
let b=6;
let suma= a+b;
console.log("el resultado de la suma es "+ suma)

let nombre= "roberto"
let nombre_dos= nombre 

nombre_dos= "carlos"
console.log("el primer nombre es "+nombre)
console.log("el segundo nombre es "+nombre_dos)

// notaciones de variables

camelcase =5
snake_case= 5
pascal_case= 5

let nombre_completo= "didier silva amador "

// no puedes iniciar con numero 
//no puede tener guion medio


//constantes 
const PI =3.1416;
const COLOR="rojo";

//tipos de datos 

//tipo de dato Number 

let n=123;
console.log(n);


//valores numericos especiales, infinity y NaN 

console.log(1/0)

// NaN representa un error de calculo pero no es un error de javascript 
// infinity no es un error, es un valor numerico de havascript 

console.log("texto"/2);

//cualquier operacion con nan devuelve nan 

//tipo string 

let t='a'
let c= "a"
let d=  `s ` //backtik se usa para interpolacion 
console.log('roberto alias "robert"')

// tipo booleano 
//true false

let verdadero = true 
let falso=false 
let mayor=4>5

//valor null
//valor especial que no pertenece a ningun tipo de dato 
//forma un tipo propio separado que contiene solo el valor de null

let edad=null; 
console.log(edad)

// en js null no significa un objeto no existente 
// es un valor especial que significa nada, vacio o desconocido

// valor undefined 
// undefined significa valor no asignado 

let valor_no_asigned;
console.log(valor_no_asigned)

//operador typeof o funcion typeof(x)

console.log(typeof(undefined))  // undefined 
console.log(typeof(0)) //number
console.log(typeof(true)) //bolean
console.log(typeof(3.1416)) //number
console.log(typeof("hola mundo")) // string
console.log(typeof(alert)) // funcion 
console.log(typeof(null)) //object error de javascript porque null no significa un objeto existente 

//conversion de tipos 

//convertir string 
let valor=true;
valor=string(valor); //"true"
valor=string(false); //"false"
valor=string(null); //"null"
valor=string(undefined); //"undefined"

//conversion a number 

//conversiones numericas ocurren automaticamente en funciones matematicas y expresiones 

console.log('6'/'2') // 3
console.log(1+'2') //12
console.log('1'+2) //12

valor=number(undefined) //NaN
valor=number(null)  //0
valor=number(true) //1
valor=number(false) //0
valor= number('') //0
valor=number('hola mundo') //NaN

valor=boolean('') //false
valor=boolean('gh') //true 


//tablas de conversion numeros

/* undefined -> NaN
null->0
true->1
false->0
string '' ->0
string 'hola' ->NaN
*/

/* tabla conversion booleanos 
undefined -> false 
null->false
string '' -> false 
NaN ->false
0->false
'0' ->true
'   ' ->true 
*/
 
//comparaciones entre diferentes tipos 

console.log('2'>1) //true 
console.log('01'==1)//true
console.log(true>0)//true
console.log(false>0)//false 
console.log('hola'>1)// false
console.log(null==undefined) //true error de javascript 

console.log(0==false)// true 






