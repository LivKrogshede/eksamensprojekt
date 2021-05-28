//Variables for setup

let container;
let camera;
let renderer;
let scene;
let house;

function init(){
    contaioner = document.querySelector('.scene');

    //Create scene
    scene = new THREE.Scene();

    const fov = 35;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 500;
        //Camera setup
    camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
    camera.position.set(-8, 3, 25);

    const ambient = new THREE.AmbientLight(0x404040,3);
    scene.add(ambient);

        //Renderer
        renderer = new THREE.WebGlRenderer({antialias:true, alpha: true});
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        container.appendChild(renderer.domElement);

    //Load Model
    let loader = new THREE.GLTFLoader();
    Loader.load('./3d/scene.gltf', function(gltf){
        scene.add(gltf.scene);
        model = gltf.scene.children[0];
        animate();
    });
}

function animate(){
    requestAnimationFrame(animate);
    model.rotation.z +=0.005;
    renderer.render(scene, camera);
}

init();

