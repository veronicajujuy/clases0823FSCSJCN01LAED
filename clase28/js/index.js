let mostrarUsuarios = document.querySelector("#usuarios");

fetch("https://randomuser.me/api/?results=100")
  .then((resultado) => resultado.json())
  .then((data) => {
    let resultado = data.results;
    console.log(resultado);
    // resultado.map((item) => {
    //   mostrarUsuarios.innerHTML += `<li>${item.name.title} ${item.name.first} ${item.name.last}
    //                                  <img src="${item.picture.medium}"/>
    //                                  ${item.email}</li>`;
    // });
    resultado
      .map((item) => {
        mostrarUsuarios.innerHTML += `<div class="card">
                                            <div class="card-img">
                                            <img src="${item.picture.medium}" />
                                            </div>
                                            <h3>${item.name.title} ${item.name.first} ${item.name.last}</h3>
                                            <p>${item.email}</p>
                                        </div>`;
      })
      .catch((e) => console.log(e));
  });
