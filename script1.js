'use strict'

const nombre  = document.getElementById("nombre")
const anoNacimiento = document.getElementById("anoNacimiento")
const fecha = new Date();
const ano= fecha.getFullYear();
const dia = fecha.getDate()
const mes = fecha.getMonth()+1
let myButtonImprimir = document.getElementById("imprimir")
let myButtonClean = document.getElementById("borrar")


myButtonImprimir.addEventListener("click", function() {



if ( anoNacimiento.value != "" && nombre.value != "" ){

    let edad = ano - anoNacimiento.value;

        document.getElementById("impreso").innerHTML = "Tu nombre es " + nombre.value + " y tenes " + edad + " años";
        document.getElementById("impreso").style.color = "green";
        document.getElementById("nombre").style.borderColor = "grey"
        document.getElementById("anoNacimiento").style.borderColor = "grey"
    
;} else {

        document.getElementById("impreso").innerHTML = "Vago, completá todos los campos";
        document.getElementById("impreso").style.color = "red";
        document.getElementById("nombre").style.borderColor = "red"
        document.getElementById("anoNacimiento").style.borderColor = "red"
    
} // aca termina el else


}) // aca termina la funcion ()


        nombre.addEventListener("input", function(escribir){
        document.getElementById("impNombre").textContent = escribir.target.value;


})

anoNacimiento.addEventListener("input", function(escribir){

document.getElementById("impEdad").textContent = escribir.target.value
})


myButtonClean.addEventListener("click", function(){

    nombre.value = ""
    anoNacimiento.value = ""
    document.getElementById("impNombre").textContent = ""
    document.getElementById("impEdad").textContent = ""


})

