// Retorne no console todas as imagens do site
const img = document.querySelectorAll("img");
console.log(img);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagemAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagemAnimais);

// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll('[href^="#"]');
console.log(linksInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelector(".animais-descricao h2");
console.log(h2Animais);

// ou podemos fazer da seguinte forma:
const animais = document.querySelector(".animais-descricao");
const h2Animais2 = animais.querySelector("h2");

console.log(animais);
console.log(h2Animais2);

// Selecione o último p do site
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[paragrafos.length - 1]);
