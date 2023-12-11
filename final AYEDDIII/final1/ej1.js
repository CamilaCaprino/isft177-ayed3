//despues de 5 segundos devuelve un mensaje de error con la leyenda "fallo"
const promesa = new Promise((resolve, reject) => {
	setTimeout(() => { reject("Fallo"); }, 5000);
 	
});

promesa.then((respuesta) => console.info(respuesta)).catch((error) => console.warn("El error fue: " + error));
