/* //COSTANTES
var PI = 3.14; //CONSTANTES EN MAY.

//FUNCIONES

function suma (num1, num2){
    let resultado = num1 + num2;
    return resultado;
}
function resta (num1, num2){
    let resultado = num1 - num2;
    return resultado;
}
function mult (num1, num2){
    let resultado = num1 * num2;
    return resultado;
}
function div (num1, num2){
    let resultado = num1 / num2;
    return resultado;
}
function Modulo (num1, num2){
    let resultado = num1 % num2;
    return resultado;
}
function raiz_cuadrada (num1){
    let resultado = Math.sqrt (num1);
    return resultado;
}
function area_triangulo (num1, num2){
    let resultado = (num1 * num2) / 2;
    return resultado;
}
function area_circulo(radio) { // Algoritmo
    // Entrada : radio de un circulo (radio)
    // Salida : area del circulo (resultado)
    // Inicializar variables
    let resultado = 0;
    // Calculo 
    resultado = PI * (radio * radio);
    // Devolver el valor
    return resultado
  }

  function area_cilindro(altura, radio) {
    // Inicializar variables
    let resultado = 0;
    let area_circulo = 0;
    // Calculo
    a_circulo  = area_circulo(radio);
    a_lateral = 2 * PI * radio * altura; 
    //area = area:lateral + 2 *(area:circulo)

    area = a_lateral + 2;
    resultado = 2 * PI * radio * (radio + altura);
    return resultado;
  }
  



  //CONSTANTES
  const PI = 3.1415926;
  
  //FUNCIONES
  
  //suma
  function suma(numero1, numero2) {
   let resultado = numero1 + numero2;
   return resultado;
  }
  
  //resta
  function resta(numero1, numero2) {
   let resultado = numero1 - numero2;
   return resultado;
  }
  
  //multiplicacion
  function multiplicacion(numero1, numero2) {
   let resultado = numero1 * numero2;
   return resultado;
  }
  
  //division
  function division(numero1, numero2) {
   let resultado = numero1 / numero2;
   return resultado;
  }
  
  //modulo
  function modulo(numero1, numero2) {
   let resultado = numero1 % numero2;
   return resultado;
  }
  
  //raiz
  function raiz(numero) {
   let resultado = Math.sqrt(numero);
   return resultado;
  }
  
  function area_circulo(radio) {
   // Algoritmo
   // Entrada : radio de un circulo (radio)
   // Salida : area del circulo (resultado)
   // Inicializar variables
   let resultado = 0;
   // Calculo
   resultado = PI * (radio * radio);
   // Devolver el valor
   return resultado;
  }
  
  //area del cilindro
  function area_cilindro(altura, radio) {
   // Inicializar variables
   let area = 0;
   let a_circulo = 0;
   let a_lateral = 0;
   // Calculo
   a_circulo = area_circulo(radio);
   a_lateral = 2 * PI * radio * altura;
   // AREA = Area_Lateral + 2 * (Area_circulo)
   area = a_lateral + 2 * a_circulo;
   return area;
  }
  
  //areal del trapecio
  function area_trapecio(base_menor, base_mayor, altura) {
   let resultado = 0.5 * altura * (base_mayor + base_menor);
   return resultado;
  }
  
  //areal del triangulo con lados
  function area_triangulo(lado1, lado2, lado3) {
   let semiperimetro = 0.5 * (lado1 + lado2 + lado3);
   let resultado = Math.sqrt(
   Math.abs(
   semiperimetro *
   ((semiperimetro - lado1) *
   (semiperimetro - lado2) *
   (semiperimetro - lado3))
   )
   );
   return resultado;
  }
  
  //main
  console.log("Mi calculadora integrada correctamente"); */

/* 
  function tablaMultiplicar(tabla, hasta = 10) {
      for (let i = 0; i <= hasta; i++);{
      console.log(tabla, "x", i, "=", tabla * i);
      }
    }

  //ejecución
 // tablaMultiplicar(2); //Esta tabla llegará hasta el número 10
  //tablaMultiplicar(2, 15); //Esta tabla llegará hasta el número 15
 */


/* 
  // FUNCIONES                    5     10
  function generarNumeroAleatorio(min, max) {
    // Entrada: numero maximo
    // Salida : numero aleatorio entre 0 - numero maximo
    //Inicializacion de variables
    let suerte = 0; //
    let random = 0;
    // 3 y el 6
    suerte = Math.random() * (max - min); // (0.01 - 0.99) * 3 = 0.01 - 2.99
    random = min + Math.round(suerte); // round(5.59)+3 = 6+3 = 9 , round(0.06)+3 = 0+3 = 3
  
    return random;
  }
  
  function avanzar() {
    let metros = 0;
    metros = generarNumeroAleatorio(10, 20);
    return metros;
  }
  
  // MAIN
  
  let auto = 0; // Metros
  const META = 100;
  
  do {
    auto += avanzar(); // auto = auto + avanzar()
    console.log("el auto avanzo", auto);
  } while (auto < META); // auto > 100
  
  console.log("Total recorrido", auto, "metros");
  
 */


/*CURSO DE HISTORIA*/

// CONSTANTES
const CREDITOS = 3,
  P1 = 0.3,
  P2 = 0.3,
  PF = 0.4;

// FUNCIONES

// MAIN

let nota_p1 = 4.1,
  nota_p2 = 4,
  nota_ef = 4.1;
let promedio = 0;
let producto = 0;

promedio = nota_p1 * P1 + nota_p2 * P2 + nota_ef * PF;

producto = promedio * CREDITOS;

console.log("Acumulado de Historia", producto);



  