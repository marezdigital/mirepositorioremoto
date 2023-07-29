let nombre = "Mariangel";
console.log (nombre);

console.log (nombre);
let edad = 19;
let altura = "168cm"
let esEstudiante = true;

console.log (nombre, edad, altura, esEstudiante)

const PI = 3.14159;
console.log (PI);

typeof 5;
typeof "Hola";
typeof true;
typeof {};

/* ///////////// */

function sumar (num1, num2){
    let resultado = num1 + num2;

    return resultado;
}

function restar (num1, num2){
    let resultado = num1 - num2;

    return resultado;
}

function mult (num1, num2){
    let resultado = num1 * num2;

    return resultado;
}

function cociente (num1, num2){
    let resultado = num1 / num2;

    return resultado;
}

function a (num1, num2){
    let resultado;
    if(num1>num2){
        resultado= true;
    } else {
        resultado = false;
    }
    return resultado;
}

function operadores (num1){
    let resultado;
    if(num1>0 && num1<10){
        resultado= true;
    } else {
        resultado = false;
    }
    return resultado;
}

function o (num1){
    let resultado;
    if(num1%2==0 || num1%3==0){
        resultado= true;
    } else {
        resultado = false;
    }
    return resultado;
}

let x=5;

x += 3;

let y=10;

y *= 2;

let cont=10;

cont--;


function showAlert (){

alert ("Cuidado");

}