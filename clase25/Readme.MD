# Manipulando elementos con JS

## Vinculación

### Vinculación interna

Nos permite escribir código Javascript directamente en nuestro archivo HTML. Aunque no es la forma mas prolija de trabajar:

```html
<body>
  ....
  <script>
    console.log("Hola mundo!");
  </script>
</body>
```

### Vinculación externa

Nos permite linkear nuestro archivo HTML con un archivo javascript externo

```html
<body>
  ....
  <script src="/js/index.js"></script>
</body>
```

### Objeto Windows y documento

> El Objeto windows representa la ventana que contiene el documento y el objeto document representa al DOM (documento HTML) cargado en esa ventana
> Hay que recordar que el DOM (Document Object Model) representa al documento que se carga en el navegador como un árbol de nodos, donde cada nodo representa una parte del documento.

### El objeto Windows

El objeto Window recoge las propiedades y métodos pertenecientes a la ventana del navegador, tales como su posición y **área visible** del documento cargado. Este se utiliza principalmente para manipular la ventana.

```js
// nos da el alto de la ventana
window.innerHeight;
// nos da el ancho de la ventana
window.innerWidth;
// nos va a dar información sobre la ventana abierta, el href, el origen, el puerto, el protocolo etc.
window.location;
// algunos otros métodos
window.open(); // abre una nueva ventana
window.close(); // cerrar la ventana actual
window.moveTo(); // mover la ventana actual
window.resizeTo(); // cambiar el tamaño de la ventana actual.
```

### El objeto Document

Nos permite trabajar con el contenido de la ventana. A diferencia del Window, el objeto Document se utiliza para leer y modificar, si así lo deseamos, el contenido de la ventana. Por ejemplo, lo podríamos usar para modificar nuestro HTML a través de sus clases y estilos.

```js
// cambia el color del fondo a magenta
document.bgColor = "magenta";
// nos da el nombre de la hoja cargada
document.title;
```

### DOM selectores

> Para acceder a los elementos de una página usamos **selectores**. Cada selector puede retornar **un solo elemento o una lista de elementos**. Para poder hacer uso de los selectores debemos hacer uso del objeto document ya que los selectores son métodos del mismo.

#### querySelector()

Este selector recibe un string que incia el selector CSS del elemento del DOM que estamos buscando:

```js
let titulo = document.querySelector(".title");
```

Nos va a retornar el primer elemento HTML que contenga la clase title.

#### querySelectorAll()

Este selector recibe un string que indica el selector CSS del elemento DOM que estamos buscando

```js
let nombres = document.querySelectorAll(".name");
let div = document.querySelectorAll("div");
```

nos va a retornar un listado de elementos que coincidan con la búsqueda espedificada

#### getElementById()

Este selector recibe un string con únicamente el nombre del **id** del elemento del DOM que estamos buscando

```js
let marca = document.getElementById("marca");
```

si queremos obtener el mismo resultado pero con querySelector debemos especificar que es un id:

```js
let marca = document.querySelector("#marca");
```

#### getElementByClassName()

Este selector recibe un string con únicamente el nombre de la **clase** del o los elementos del DOM que estamos buscando

```js
let marca = document.getElementByClassName("clase-nueva");
```

## Modificando el DOM

Una vez que capturamos el contenido del DOM, podemos modificarlo:

### innerHTML e innerText

Para ello podemos utilizar la propiedad innerText o innerHTML:

```js
let tituloH1 = document.querySelector("h1");
console.log(tituloH1);
tituloH1.innerText += ", modificado desde JS";

let parrafoEspecial = document.querySelector(".parrafo-especial");
parrafoEspecial.innerHTML =
  "este es otro parrafo modificado <strong>con negrita</strong>";
console.log(parrafoEspecial);
```

innerText agrega solo texto, mientras que innerHTML permite agregar tambien etiquetas.

### propiedad Style

Nos permite leer y sobreescribir las reglas CSS que se aplican sobre un elemento que hayamos seleccionado:

```js
tituloH1.style.color = "cyan";
tituloH1.style.textAlign = "center";
tituloH1.style.fontSize = "24px";
tituloH1.style.backgroundColor = "#ddd";
```

> Hay que tener en cuenta que la propiedad de CSS en vez de tener un guion al medio, se van a transformar en camelCase, por ejemplo font-size a fontSize.

## Modificar clases

Para agregar o modificar una clase en Javascript, puedo utilizar el método classList para obtener el listado de clases que tiene un objeto HTML.

para ello debo tener antes definida una clase en el archivo css:

```css
.titulo-destacado {
  background-color: crimson;
  color: #fff;
  border: 2px solid #000;
  padding: 15px;
  border-radius: 5px;
}
```

entonces en nuestro js, solo hace falta agregar la clase al elemento que necesitemos:

```js
let tituloH2 = document.querySelector("h2");

tituloH2.classList.add("titulo-destacado");
```

tambien se puede remover o alternar la adición de la clase con:

```js
tituloH2.classList.remove("titulo-destacado");
tituloH2.classList.toggle("titulo-destacado");
```

#### classList.contains()

pregunta si un elemento tiene una clase determinada:

```js
tituloH2.classList.contains("titulo-destacado"); // devolvera true o false
```
