//RESUELVE TUS EJERCICIOS AQUI

// Ejercicio 1
function getAllBreeds() {
  return fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((data) => {
      return Object.keys(data.message);
    });
}

// Ejercicio 2
function getRandomDog() {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      return data.message;
    });
}

// Ejercicio 3
function getAllImagesByBreed() {
  return fetch("https://dog.ceo/api/breed/komondor/images")
    .then((res) => res.json())
    .then((data) => {
      return data.message;
    });
}
// getAllImagesByBreed().then((data) => console.log(data));

// Ejercicio 4
function getAllImagesByBreed2(raza) {
  return fetch(`https://dog.ceo/api/breed/${raza}/images`)
    .then((res) => res.json())
    .then((data) => {
      return data.message;
    });
}
// getAllImagesByBreed2("dalmatian").then((data) => console.log(data));

// Ejercicio 5
function getGitHubUserProfile(usuario) {
  return fetch(`https://api.github.com/users/${usuario}`)
    .then((res) => res.json())
    .then((data) => data);
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
  });
});
