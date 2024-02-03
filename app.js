let titulo = document.querySelector('h1');

titulo.innerHTML='Hora del desafio';

function Boton(){
    alert("El botón fue clicado");

}

function mensajeAlerta(){
    alert('Yo amo JS');
}

function  ingreso(){
    var nombreCiudad 
    nombreCiudad= prompt ('Por favor ingresa una ciudad de brasil');
    alert(`Estuve en ${nombreCiudad} y me acorde de ti`);
}




function numero(){
 
let numero1 = parseInt(prompt ("Ingrese un número"));
let numero2 = parseInt(prompt ('Ingrese el segundo numero'));
let resutado = numero1 + numero2;
alert(`El resultado de la sumera ${numero1} + ${numero2} es ${resutado}`);
}
