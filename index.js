//RESUELVE TUS EJERCICIOS AQUI

// Ejercicio 1
function getAllBreeds() {
  return fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((data) => Object.keys(data.message))
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
// getAllBreeds().then((data)=>console.log(data))

// Ejercicio 2
function getRandomDog() {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => data.message)
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
// getRandomDog().then((data) => console.log(data));

// Ejercicio 3
function getAllImagesByBreed() {
  return fetch("https://dog.ceo/api/breed/komondor/images")
    .then((res) => res.json())
    .then((data) => {
      return data.message;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
// getAllImagesByBreed().then((data) => console.log(data));

// Ejercicio 4
function getAllImagesByBreed2(raza) {
  return fetch(`https://dog.ceo/api/breed/${raza}/images`)
    .then((res) => res.json())
    .then((data) => {
      return data.message;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
// getAllImagesByBreed2("dalmatian").then((data) => console.log(data));

//Ejercicio 5
function getGitHubUserProfile(usuario) {
  return fetch(`https://api.github.com/users/${usuario}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
// getGitHubUserProfile("asolermaria").then((data) => console.log(data));

// Ejercicio 6
function printGithubUserProfile(usuario) {
  return fetch(`https://api.github.com/users/${usuario}`)
    .then((res) => res.json())
    .then((data) => {
      const perfil = {
        img: data.avatar_url,
        name: data.name,
      };
      const container = document.getElementById("perfil-github");
      container.innerHTML = `<img src="${data.avatar_url}">
                            <p>${data.name}</p>`;
      return perfil;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
// getGitHubUserProfile("asolermaria").then((data) => console.log(data));

// Ejercicio 7
function getAndPrintGitHubUserProfile(usuario) {
  return fetch(`https://api.github.com/users/${usuario}`)
    .then((res) => res.json())
    .then((data) => {
      const tarjetaHTML = `<section>
                            <img src="${data.avatar_url}" alt="${data.name}">
                            <h1>${data.name}</h1>
                            <p>Public repos: ${data.public_repos}</p>
                            </section>`;
      return tarjetaHTML;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
// getAndPrintGitHubUserProfile("asolermaria").then((html) => console.log(html));

// Ejercicio 8
const botonBuscar = document.getElementById("search8");
const inputUsuario = document.getElementById("input8");

botonBuscar.addEventListener("click", () => {
  const usuario = inputUsuario.value;

  getAndPrintGitHubUserProfile(usuario).then((html) => {
    document.getElementById("perfil-github").innerHTML = html;
  })
  .catch((error) => {
      console.error("Error fetching data:", error);
  });
});

// Ejercicio 9
function fetchGithubUsers(usuarios) {
  const promesas = usuarios.map((usuario) =>
    fetch(`https://api.github.com/users/${usuario}`)
  );
  return Promise.all(promesas)
    .then((responses) => Promise.all(responses.map((res) => res.json())))
    .then((usuarios) => {
      return usuarios.map((usuario) => ({
        name: usuario.name || usuario.login,
        url: usuario.url,
      }));
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      return [];
    });
}
// fetchGithubUsers(["asolermaria", "octocat"]).then((usuarios)=> console.log(usuarios));