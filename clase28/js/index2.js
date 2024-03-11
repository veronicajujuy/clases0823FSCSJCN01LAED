let form = document.querySelector("form");
let busqueda = document.querySelector("#busqueda");
let mostrarUsuarios = document.querySelector("#usuarios");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(busqueda.value);
  mostrarUsuarios.innerHTML = "";
  fetch(
    `https://www.superheroapi.com/api.php/10231673425437800/search/${busqueda.value}`
  )
    .then((resultado) => resultado.json())
    .then((data) => {
      console.log(data.results);
      let resultado = data.results;

      resultado.map((item) => {
        mostrarUsuarios.innerHTML += `<div class="card">
                                              <div class="card-img">
                                              <img src="${item.image.url}" />
                                              </div>
                                              <h3>${item.name}</h3>

                                          </div>`;
      });
    })

    .catch((e) => console.log(e));
});
