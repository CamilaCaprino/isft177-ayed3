//función asíncrona anónima, dentro de la función asíncrona, se crea una promesa dentro de
//una constante llamada "promesa", dentro de la constante llamada "n" que genera un número aleatorio 
//usando math.random y lo multiplica por 30 generando un numero entre 1 y 30 inclusive
//usa el metodo math.floor que devuelve un numero entero redondeandolo para abajo y al resultado
// le suma +1, entra en un ciclo if donde si el resultado de n dividido 2 es == 1(impar)
//si es impar se resuelve la promesa con el valor de n o si rechaza la promesa
// muestra un mensaje de "error".
//usa then y catch que son handlers (manejadores) y segun cada estado de la promesa
//se asocia un manejador, es un manejador que recibe el resultado de la funcion asincronica o 
//la descripcion del error 
//Si la promesa se resuelve con éxito, se ejecutará el manejador de éxito (then),
// que imprimirá el resultado en la consola usando console.info(res).
//Si la promesa se rechaza (porque n no es impar), se ejecutará el manejador de error (catch), 
//que imprimirá el mensaje de error en la consola usando console.error(error).

(async () => {
	const promesa = new Promise((resolve, reject) => {
		const n = Math.floor(Math.random()*30)+1;
        console.log(n);
		if (n%2 == 1) 
			resolve(n);
		else
			reject("Error");
});

promesa
	.then((res) => console.info(res))
	.catch((error) => console.error(error));
})();
