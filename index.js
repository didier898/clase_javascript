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

// if 
/*
// if (condicion){

}else if(condicion ){

}else {

}
*/

// if de linea 

//if (condicion) console.log('mensaje');
//if('0'==1){console.log('entro');}

//operador ternario 
//condicion ? operacion verdadera: operacion falsa:

/*  resultado= 4>5 ? 'verdadero' :'falso'
*/

//while

//while(condicion){}  */

// do while

/* do{} while(condicion)*/

//for 

/* 
for(comienzo;condicion;incremento){}

for(i=0;i<=10;i++){
    console.log(i+1)
}

*/

//switch 

/*
switch (valor):{
    case valor1:
        [break]
    case valor 2:
        [break];
    default:
            [break];

}

*/

a=2+2
switch(a){
    case 3:
        console.log('el resultado es 3')
    case 4:
        console.log('el resultado es 4')
    default:
        console.log('ninguno de los anteriores')
        
}


// hablaremos de js que toca react

// var vs let vs const 

/*var edad=10
var edad=20

lo que pasa es que var declara dos veces y e sun problema 

*/

/* let 

let edad=5; 
let edad=20; 
te dara error, te garantiza que declares una sola vez como debe de ser

*/


/* const

const edad=10
const edad=20

dara error porque no se puede sobrescribir ya que es una constante

*/

// escope de var, let y const 

/*var edad=10; 
if(true){
    var edad=20;
    console.log(edad);}
console.log(edad)
*/


// arrays 
let edades =[1,2,3];
edades=[10,20,30]
edades.push(70)
console.log(edades)

//objetos 

const persona ={
    nombre:"roberto"
    apellido:"morales"
    edad:33
}
persona.nombre="carlos"

console.log(persona)


//funciones 

/*function sumar(num_1,num_2,num_3){
    console.log(num_1+num_2)
}

sumar(4,5) */

//funcion flecha
const sumar =(num_1,num_2,num_3) =>{
    console.log(num_1+num_2)
}
sumar(4,6)

const saludar=()=>{
    console.log('hola mundo')

}  //sin parametros 


//con parametros 

const cuadrado= (base)=>{
    console.log(base**cuadrado)
}  //funcion flecha con parametro



const sumar_dos = (num_1,num_2)=> {
    return num_1+num_2;
}
//para retornar
const sumar_tres = (num_1,num_2)=> num_1+num_2;


// template string 

//backtick

const potencia= (base,altura) => `el resultado de la potencia es ${base**exponente}`;    //$ es interpolacion en javascript


//destructuring objetos 

const mascota ={
    nombre:'tom',
    edad:5,
    vivo:true,
    razas: ['pastor aleman','pitbull']
}

//si yo quiero acceder al nombre 

console.log(mascota.nombre)
const{edad,vivo}=mascota //si solo quiero saber dos atributos








