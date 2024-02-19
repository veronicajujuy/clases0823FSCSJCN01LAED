## Position

El posicionamiento nos permite trasladar un elemento desde su posición original a una nueva posición. También nos permite superponer elementos.

<div style="background-color: #fff;">

![posicionamiento](https://lh7-us.googleusercontent.com/6stHtApxx2Vr4qrMdl2zEP7N727nrM1mCCT_-RxMS4_aiJRyCStAsVAKm1Prxp5bKRaMVA80Rxwd0-Ks-PoKitINbpk6o_EtODFDJgO99Dw_rd194Kw8ixeEQnV9BaKAnvKOQP6MUfPZZVlq_tjVHUxrdQ=s2048)

</div>

### Puntos de referencia

Cuando desplazamos un elemento tomando un costado como referencia, empujaremos el elemento si el número es **positivo** o **tiraremos** de el si el numero es **negativo**.

<div style="background-color: #fff;">

![referencia](https://lh7-us.googleusercontent.com/pmj5aLcgSmyAZkWGJLgZJzVkyn9GCFYdS8pfAj_lRDa2UbZTff4Ty9LkV9JFRvqa3inUT1zEHhTwIL7ZsZ4JPdgaaMeLINzUJCeP3Iv31O2nUjapEySoxL4yyFZch_jIVO2wVG60SJBX8dIqCAQOFXxbnA=s2048)

</div>

### Posicionamiento relativo

> El posicionamiento relativo nos permite trasladar un elemento desde su posición original a una nueva posición.

Cuando movemos una caja el punto de referencia serán sus propios costados.
Esto quiere decir que el espacio que ocupaba originalmente segurá ocupado.

#### ¿Cuando se suele utilizar?

Solemos utilizar el posicionamiento relativo cuando queremos desplazar un elemento **sin modificar el flujo original de los demás que están a su lado**
![posicionamiento_relativo](https://lh7-us.googleusercontent.com/iKMYBJOuWFDsyhHjpnc4vVFSRI9xQT9v93yRv6cQPfjz3ol-V4bNMn6iTnQLUrbAoZbdtY4bQm1pJqUTT1L12cEfIvzPgtBhtLSbVRz5rymaVDq9WPL_bJjo6MEo5fqYGS1lOBYn4mcvAZWr05kDYUTwjw=s2048)

### Posicionamiento absoluto

> El posicionamiento absoluto nos permite trasladar un elemento tomando como referencia los costados del body

En el posicionamiento absoluto, los puntos de referencia serán los costados del body. Cuando movemos una caja de manera absoluta, el espacio que ocupaba el elemento quedará vacío y otros elementos podrán ocuparlo.

### Posicion relative + position absolute:

Si las cajas "hijas" están dentro de otra caja contenedora "padre", el punto de referencia seguirá siendo el body, a menos que hagos relativa la posicion de su "padre"

```css
.contenedor {
  position: relative;
}

.caja {
  background-color: royalblue;
  border: 2px solid black;
  position: absolute;
  top: 50px;
  left: 20px;
}
```

#### ¿Cuando se suele utilizar?

Cuando queremos sacar un elemento del flujo normal y posicionarlo en un punto fijo con respecto a su contendor o el body

![absoluto](https://lh7-us.googleusercontent.com/DiYOZp53pC6P0VnH5iJsh-BReeZL6JbpnsfLUF5QrL5bgbbm-JrHiYe1H4SlkamYbmx3ozfVlPBWAFc_BLS54w4gDft00cuDujh1CwkaMzgRhItkDbXg6CD3wKbj8DNlaGnx1ZqfCe_cWqeFOGyPVUmyiA=s2048)

### Posicionamiento fijo

> El posicionamiento fijo nos permite trasladar un elemento tomando como referencia la ventana del navegador

## Z-index

El z-index nos permite cambiar el orden de las "capas" dentro de un documento HTML

Solo podemos modifcar el z-index de los elementos que tengan position **relative**, **absolute** y **fixed**.

> [!NOTE]
> Cualquier elemento al cual le asignemos la posición relative, absolute o fixed, se mostrará por encima del resto y tendrá un valor de **z-index** de **0**.

## Transiciones

Al crear transiciones podremos modificar el valor de una propiedad de manera gradual. Para ello necesitamos:

- Una propiedad con un valor inicial
- Una interacciòn por la cual este valor se verá modificado
- y el nuevo valor que cobrará esta propiedad

Ejemplo:

```css
/*Estas son nuestras propiedades iniciales*/
.boton {
  padding: 15px 20px;
  margin: 15px;
  border: none;
  border-radius: 5px;
  background-color: crimson;
  color: #fff;
}
/*Estas son nuestras propiedades finales*/
.boton:hover {
  background-color: rgb(140, 12, 38);
  border-radius: 25px;
}
```

### Valores de transición

- transition-property: Para definir los nombres de las propiedades CSS en las que el efecto de la trancisión debe aplicarse. Podemos poner varias separadas por coma.
- transition-duration: Para establecer el tiempo que debe durar la transición. Por defecto es 0s o 0ms.
  Entonces, volviendo al elemento al que se va a aplicar la transición:

```css
/*Estas son nuestras propiedades iniciales*/
.boton {
  padding: 15px 20px;
  margin: 15px;
  border: none;
  border-radius: 5px;
  background-color: crimson;
  color: #fff;
  /*aca van las propiedades de trancision*/
  transition-property: background-color, border-radius;
  transition-duration: 0.5s.;
}
```

O podemos aplicar las propiedades abreviadas:

```css
/*Estas son nuestras propiedades iniciales*/
.boton {
  padding: 15px 20px;
  margin: 15px;
  border: none;
  border-radius: 5px;
  background-color: crimson;
  color: #fff;
  /*aca van las propiedades de trancision*/
  transition: background-color, 0.5s, border-radius, 0.5s;
}
```

Si queremos que todas se modifiquen, ponemos la palabra reservada **all**:

```css
/*Estas son nuestras propiedades iniciales*/
.boton {
  padding: 15px 20px;
  margin: 15px;
  border: none;
  border-radius: 5px;
  background-color: crimson;
  color: #fff;
  /*aca van las propiedades de trancision*/
  transition: all 0.5s;
}
```

## Animaciones

Para crear una animación podremos modificar los valores que iremos cambiando a lo largo de la animación **(que irá de 0 a 100%)**

```css
@keyframes fantasma {
  0% {
    opacity: 0%;
  }
  25% {
    transform: translateY(-20px);
    opacity: 100%;
  }
  100% {
    opacity: 0%;
  }
}
```

una vez creadas las propiedades de la animación, en el elemento debemos configurar las siguientes propiedades:

- animation-name: para definir cual animación es la que queremos utilizar
- animation-duration: para establecer el tiempo que debe durar la animación. (en segundos o milisegundos)
- animation-iteration-count: Para definir la cantidad de veces que se repetirá la animación. Puede ser un número o la palabra **infinite** para que se reproduza infinitamente

```css
.fantasma {
  animation: fantasma 3s infinite;
}
```
