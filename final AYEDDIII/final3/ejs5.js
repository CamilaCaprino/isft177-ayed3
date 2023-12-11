//Escribir una función booleana que tome como argumento un vector y un número entero.
// La función debe retornar verdadero si el vector contiene al número o falso en caso contrario

const miVector = [1,2,8,3,5];
const miNum = 2;

function incluye (vector, numero){
    return vector.includes(numero);
}

const resultado = incluye(miVector, miNum);
console.log(resultado);
