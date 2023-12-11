const url = "nombres.json"

fetch(url)
	.then((res) => res.json())
    .then((data) => {
        // Trabajar con los datos obtenidos
        console.log("Arreglo con todos los datos: ", data);
        const resultado = data.map((persona) => {
            return { nombre_apellido:  `${persona.nombre} ${persona.apellido}`}
        })
        console.log(resultado);
    })
	.catch((error) => console.error(error));

 
