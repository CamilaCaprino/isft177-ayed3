//Dado el vector de números reales v = [1.5, 2.2, 3.5, 8.3, 2.2, 7.8] 
//escribir un reductor para calcular el valor promedio de sus valores

const v = [1.5, 2.2, 3.5, 8.3, 2.2, 7.8];

const SumandoVector = v.reduce((acumulador, item) => {
return acumulador + item
}
, 0)

const LongitudVector = v.length;

const Promedio = SumandoVector / LongitudVector;
console.log("El promedio es: "+ Promedio);

