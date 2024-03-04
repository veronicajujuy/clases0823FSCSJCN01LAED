let darkmode = document.querySelector(".cambio-modo");
let body = document.querySelector("body");
let contenedor = document.querySelector(".contenedor");
let icono = document.querySelector(".icon");
let botonLogin = document.querySelector(".boton");

let darkModeHabilitado = false;

darkmode.addEventListener("click", function () {
  darkModeHabilitado = !darkModeHabilitado;
  if (darkModeHabilitado) {
    this.innerText = "Light mode";
    this.classList.add("boton-dark");
    lightMode(body, contenedor, icono, botonLogin);
  } else {
    this.innerText = "Dark mode";
    this.classList.remove("boton-dark");
    darkMode(body, contenedor, icono, botonLogin);
  }
});

function lightMode(body, contenedor, icono, botonLogin) {
  body.style.backgroundColor = "#000";
  contenedor.style.backgroundColor = "#ffffff70";
  icono.classList.add("icon-dark");
  botonLogin.classList.add("boton-dark");
}

function darkMode(body, contenedor, icono, botonLogin) {
  body.style.backgroundColor = "#cecece";
  contenedor.style.backgroundColor = "#fff";
  icono.classList.remove("icon-dark");
  botonLogin.classList.remove("boton-dark");
}
