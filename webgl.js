

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera
    (40, (window.innerWidth) / (window.innerHeight), 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
document.body.appendChild(renderer.domElement);

var light = new THREE.PointLight(0xffffff);
light.position.set(-100, 200, 100);
scene.add(light);

var light2 = new THREE.PointLight(0xffffdd);
light2.position.set(100, -2000, -100);
scene.add(light2);

var geometry = new THREE.SphereGeometry(10, 10, 10);
var material = new THREE.MeshLambertMaterial({ color: 0x009900, wireframe: true });
var cube = new THREE.Mesh(geometry, material);

mesh = new THREE.Mesh(
    new THREE.SphereGeometry(100, 16, 8),
    new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
);

scene.add(cube);
const texture = new THREE.TextureLoader().load("img/tile.jpg");
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(6, 3);
scene.background = texture

camera.position.z = 30;

var render = function () {
    requestAnimationFrame(render);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

render();

