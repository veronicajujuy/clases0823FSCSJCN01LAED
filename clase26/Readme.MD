# Eventos en una web

## ¿Que son los eventos?

Un evento es una acción que se desencadena cuando el usuario ejecuta una acción determinada. No solamente el usuario puede desencadenar una acción, también lo puede hacer de igual manera la ventana (window) que carga el documento HTML.

## Cuando se ejecuta el evento

Cuando linkeamos un script de JS a una pagina web, generalmente lo hacemos al final del documento. Si lo hacemos en la cabecera corremos el riesgo que el script se corra antes que se termine de cargar la página. Para evitar esto podemos utilizar el siguiente código en el archivo JS:

```js
window.addEventListener("load", function () {});
window.onload = function () {};
// ambas opciones se pueden utilizar, con la diferencia que la segunda forma solo puede ejecutarse una vez.
```

> Se suele escribir el código JS dentro de esta funcion para prevenir errores que pueden ocurrir si el documento no está totalmente cargado al momento de la ejecución del script.

## Capturar un evento

### onClick

Este evento nos permite ejecutar una acción cuando se haga clic sobre el elemento al cual le estamos aplicando la pripiedad

```js
boton.addEventListener("click", function () {
  alert("presionaste el boton!!");
});
```

### preventDefault()

Nos permite evitar que se ejecute el evento predeterminado del elemento al que se lo estemos aplicando.

```js
let hipervinculo = document.querySelector("a");

hipervinculo.addEventListener("click", function (e) {
  e.preventDefault();
  alert("presionaste el boton!!");
});
```

### Eventos mas usados

| Evento      | Descripcion                                |
| ----------- | ------------------------------------------ |
| onclick     | Cuando el usuario hace click               |
| ondblclick  | Cuando el usuario hace doble click         |
| onmouseover | Cuando el mouse me mueve sobre el elemento |
| onmousemove | Cuando se mueve el mouse                   |
| onscroll    | Cuando se hace scroll                      |
| onkeydown   | Cuando se aprieta una tecla                |
| onload      | Cuando se carga la pagina                  |
| onsubmit    | Cuando se envia un formulario              |

## Eventos del mouse

### mouseOver

```js
let titulo = document.querySelector(".titulo2");
titulo.addEventListener("mouseover", function () {
  titulo.style.color = "red";
});
```

### mouseOut

```js
let titulo = document.querySelector(".titulo2");
titulo.addEventListener("mouseout", function () {
  titulo.style.color = "red";
});
```

## Eventos del teclado

### keydown, keyup, keypress

Estos eventos se ejecutan cuando:

- keydown: presiono una tecla
- keyup: dejo de presionar la tecla
- keypress: cuando hago ambos movimientos

```js
let direccion = document.querySelector("#address");

direccion.addEventListener("keypress", function (event) {
  alert("Se presionó la tecla: " + event.key);
});
```
