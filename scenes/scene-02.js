//cria nossa primeira sena
//precisamos de 3 coisa: geometria, material e mesh
//geometria é o esqueleto
//material é a pele
//mesh é a misntura dos 2

//const geometry = new THREE.BoxBufferGeometry();

// vou trocar esse material por outro
/* const material = new THREE.MeshBasicMaterial({
    color: 0xFFFFFF
}); */
// vou add o MeshLambertMaterial pois posso add luz nele

const material = new THREE.MeshLambertMaterial({
    color: 0xFFFFFF
});

//nosso mesh
const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
        0.5,
        0.5,
        0.5
    ),
     material
);

//add o cubo na cena que foi criado no outro arquivo
scene.add(cube);

//add um circulo
const circle = new THREE.Mesh(
    //radius  segments
    new THREE.CircleBufferGeometry(
        0.5, 20
    ),
    material
)

circle.position.x = -2;
//CONVERTER PARA RADIANOS
circle.rotation.x = THREE.MathUtils.degToRad(-90);

scene.add(circle);

// add cone
const cone = new THREE.Mesh(
    //radius height radialsegments heightSegments
    new THREE.ConeBufferGeometry(
        0.3, 0.5
    ),
    material
)

cone.position.x = -2;
cone.position.y = 2;

scene.add(cone)

// criar cilindro
const cylinder = new THREE.Mesh(
    //radiustop radiusbotton height
    new THREE.CylinderBufferGeometry(
        0.3, 0.5, 2
    ),
    material
)

cylinder.rotation.x = THREE.MathUtils.degToRad(-60);

cylinder.position.x = 2;
cylinder.position.y = 2;



scene.add(cylinder)
//agora vamos renderizar, para isso vamos passar a cena e a camera
/// ()   renderer.render(scene, camera)

//agora vamos criar a animação com a função setAnimationLoop

/* renderer.setAnimationLoop(()=>{
    cube.rotation.x += 0.01;
    cube.rotation.y +=0.01;
    
    camera.rotation.z +=0.01
    renderer.render(scene, camera);
   
    //usar uma outra função mais performatica

}) */

//dados do cubo
x3.add(cube, {label: 'cube'})

//essa FAZ O MESMO MAS ele para quando troco de tela
function animate() {
    requestAnimationFrame(animate);
    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;

    //configuração basica se não vai quebrar
    x3.tick();

    //mostrar na tela dados de fps
    x3.fps(()=>{
        renderer.render(scene, camera);
    })
  
  }
  animate();