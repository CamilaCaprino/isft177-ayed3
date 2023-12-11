// Escribir una función booleana que tome como argumento un vector
// y un número entero. La función debe retornar verdadero si el vector
// contiene al número o falso en caso contrario */

const miVector = [1,4,9,8,6];
const miNumero = 1;

function funcionBool (vector, numero){
    return vector.includes(numero);
}

const resultado = funcionBool(miVector, miNumero);

console.log(resultado);



  

  