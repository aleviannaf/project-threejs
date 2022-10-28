


//Vamos criar a base, o seletro e os tamanhos da nossa cena

const options = {
  targetSelector: "#scene",
  with: 800,
  height: 600,
  backgroundColor: 0x40464f
};

//vamos criar nosso renderizador, onde vamos usar o webgl para renderizar
const renderer = new THREE.WebGLRenderer();

//criado o renderizador, vamos dar um tamanho para ele
renderer.setSize(options.with, options.height);

//agora vamos pegar nosso seletor e add o nosso renderizador como filho
document.querySelector(options.targetSelector).appendChild(renderer.domElement);

//criar nossa cena
const scene = new THREE.Scene();

//para adicionar uma cor
scene.background = new THREE.Color(
  options.backgroundColor
);

// agora vou criar a camera
//vou usar a perspective camera pois ele simula a visão humana

const camera = new THREE.PerspectiveCamera(
    50,
    options.with/ options.height,
);

//posição da camera
camera.position.z = 5;


