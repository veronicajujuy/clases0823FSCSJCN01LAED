// modo claro y oscuro
let botonCambio = document.querySelector(".cambio-modo");
let body = document.querySelector("body");
let icono = document.querySelector(".icon");
let boton = document.querySelector(".boton");
let contenedor = document.querySelector(".contenedor");

let darkModeHabilitado = false;
botonCambio.addEventListener("click", function () {
  darkModeHabilitado = !darkModeHabilitado;

  if (darkModeHabilitado) {
    this.innerText = "Light Mode";
    this.classList.add("boton-dark");
    darkMode(body, icono, boton, contenedor);
  } else {
    this.innerText = "Dark Mode";
    this.classList.remove("boton-dark");
    lightMode(body, icono, boton, contenedor);
  }
});

function darkMode(body, icono, boton, contenedor) {
  body.style.backgroundColor = "#000";
  icono.classList.add("icon-dark");
  boton.classList.add("boton-dark");
  contenedor.style.backgroundColor = "#ffffff99";
}

function lightMode(body, icono, boton, contenedor) {
  body.style.backgroundColor = "#cecece";
  icono.classList.remove("icon-dark");
  boton.classList.remove("boton-dark");
  contenedor.style.backgroundColor = "#fff";
}

// validacion de formulario

let formulario = document.querySelector("form");
let usuario = document.querySelector("#usuario");
let nya = document.querySelector("#nya");
let email = document.querySelector("#email");
let edad = document.querySelector("#edad");
let pass = document.querySelector("#pass");
let confpass = document.querySelector("#confpass");
let erroresUl = document.querySelector("#errores");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  let errores = [];
  erroresUl.innerHTML = ``;
  if (usuario.value == "") errores.push("El campo usuario no debe estar vacio");
  if (nya.value == "")
    errores.push("el campo nombre y apellido no debe estar vacio");
  if (email.value == "") errores.push("el campo email no debe estar vacio");
  if (edad.value == "") errores.push("el campo edad no debe estar vacio");
  if (pass.value == "") errores.push("el campo password no debe estar vacio");
  if (confpass.value == "")
    errores.push("el campo confirmar password no debe estar vacio");
  if (confpass.value !== pass.value)
    errores.push("la contraseña debe ser igual");
  if (errores.length > 0) {
    for (const item of errores) {
      erroresUl.innerHTML += `<li>${item}</li>`;
    }
  } else {
    alert("formulario enviado");
  }
});

usuario.addEventListener("focus", function () {
  validacion(usuario);
});

usuario.addEventListener("input", function () {
  validacion(usuario);
});

function validacion(usuario) {
  let spanError = document.querySelector("#errorusuario");
  if (usuario.value.length == 0)
    spanError.innerHTML = "El campo usuario no debe estar vacio";
  else {
    spanError.innerHTML = "";
  }
}
