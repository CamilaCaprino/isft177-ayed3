const arreglo = [
    {
      nombre: "Pepe",
      apellido: "Luis",
      edad: 20
    },
    {
      nombre: "Luis",
      apellido: "Fonsi",
      edad: 40
    },
    {
      nombre: "Mariela",
      apellido: "Rodríguez",
      edad: 23
    }
]

const url = "nombres.json";

fetch(url)
	.then((res) => res.json())
	.then((datos) => {
    console.log("Arreglo con todos los datos: ", datos);
     const resultado = datos.map((data) => {
        return {nacioEn: (2023 - data.edad) };
     })
     console.log(resultado);
    })
	.catch((error) => console.error(error));



 


