// capturando elementos

let elementoH1 = document.querySelector("h1");

elementoH1.innerHTML += " Como estas? ";

// let respuesta = prompt("Escriba su nombre");

// elementoH1.innerHTML += respuesta;

let idParrafo = document.querySelector("#parrafo");

idParrafo.innerHTML +=
  "<strong>Este elemento se esta agregando en negritasdfs</strong>";

idParrafo.innerHTML += "<div>esto esta dentro de un div</div>";

// idParrafo.style.backgroundColor = "teal";
// idParrafo.style.color = "#fff";
// idParrafo.style.padding = "20px";
// idParrafo.style.fontSize = "18px";

idParrafo.classList.add("destacado");

elementoH1.classList.add("destacado");
