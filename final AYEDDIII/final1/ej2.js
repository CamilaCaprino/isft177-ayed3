//se agrega una lista con el texto "azafran" dentro dle contenedor que tiene de id "ingredientes"
const ingredientes = document.getElementById("ingredientes");
const ingrediente = document.createElement("li");
	ingrediente.innerText = "Azafrán";
ingredientes.appendChild(ingrediente);
