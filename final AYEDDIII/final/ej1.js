const url = "nombres.json";

fetch(url)
	.then((res) => res.json())
	.then((datos) => {
        console.log("arreglo completo" , datos)
        const mayores = datos
        .filter((data) =>  data.edad >= 18 )
        .map((data) => {
            return {nacioEn: (2023 - data.edad)};
        })
        console.log("mayores de 18 nacimiento: " , mayores);
    })
	.catch((error) => console.error(error))


    