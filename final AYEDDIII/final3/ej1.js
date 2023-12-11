//es una funcion flecha asincrona donde en la constante promesa
//declara una nueva promesa con los parametros resolve y reject
//dentro de esta promesa se encuentra declarada la constante n 
//donde lo primero que hace es devolver un numero random utilizando el metodo 
//math.random multiplicado por 25 y lo redondea para arriba devolviendo un entero
//usando math.floor y sumandole +1 al resultado
//si el resultado dividido 5 es igual a 0 almacena a n en resolve y sino dentro de reject el error
//luego muestra por cnsola la respuesta o el error utilizando .then y .catch que son los 
//encargados de almacenar y mostrar los estados de la promesa


(async () => {
	const promesa = new Promise((resolve, reject) => {
		const n = Math.floor(Math.random()*25)+1;
        console.log("n es igual a: "+ n);
		if (n%5 == 0) 
			resolve(n);
		else
			reject("Error");
});

promesa
	.then((res) => console.info(res))
	.catch((error) => console.error(error));
})();
