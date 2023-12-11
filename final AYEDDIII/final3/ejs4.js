//Dado el vector de números enteros v = [2, 4, 35, 83, 22, 78] 
//escribir un reductor para obtener el número más grande.

// const v = [2, 4, 35, 83, 22, 78];

// const numGrande = v.reduce((maximo, actual) => {
//     if (actual > maximo){
//         return actual;
//     }
//     else{
//         return maximo;
//     }
// }, v[0]);
//  console.log("El numero más grande del vector es: "+numGrande);

const v = [2, 4, 35, 87, 22, 78];

const numMasGrande = v.reduce((acumulador, item) => {
    if (item > acumulador)
        acumulador = item;
        return acumulador;
}, 0);

console.log(numMasGrande);


