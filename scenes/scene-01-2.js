//cria nossa primeira sena
//precisamos de 3 coisa: geometria, material e mesh
//geometria é o esqueleto
//material é a pele
//mesh é a misntura dos 2

const geometry = new THREE.BoxBufferGeometry();

// vou trocar esse material por outro
/* const material = new THREE.MeshBasicMaterial({
    color: 0xFFFFFF
}); */
// vou add o MeshLambertMaterial pois posso add luz nele

const material = new THREE.MeshLambertMaterial({
    color: 0xFFFFFF
});

//nosso mesh
const cube = new THREE.Mesh(geometry, material);

//add o cubo na cena que foi criado no outro arquivo
scene.add(cube);

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

//essa FAZ O MESMO MAS ele para quando troco de tela
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();