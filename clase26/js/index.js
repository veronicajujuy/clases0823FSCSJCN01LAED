let boton = document.querySelector(".boton");
let h1 = document.querySelector("h1");

boton.addEventListener("click", function () {
  alert("apretaste el boton!");
  h1.style.backgroundColor = "blue";
  h1.innerHTML += " a la clase de JS con front";
});

let lista = document.querySelectorAll("li");

// lista[0].addEventListener("mouseover", function () {
//   this.style.color = "orange";
// });

for (const item of lista) {
  item.addEventListener("mouseover", function () {
    this.classList.toggle("navbar-item");
  });
}

let body = document.querySelector("body");

body.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    console.log("presionaste enter");
  }
});
