var scene = new THREE.Scene();
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);

scene.add(cube);

function animate() {
    clearCanvas();
    renderer = initRender();
    camera = initCamera();
    renderer.render(scene, camera);
}
animate();

function initCamera() {
    render = document.getElementById('render');
    position = render.getBoundingClientRect();

    camera = new THREE.PerspectiveCamera(75, position.width / position.height, 0.1, 1000);
    camera.position.z = 5;
    return camera;
}

function initRender() {
    renderer = new THREE.WebGLRenderer();

    document.getElementById('render').appendChild(renderer.domElement);

    return renderer;
}

function clearCanvas() {
    document.getElementById('render').innerHTML = "";
}
