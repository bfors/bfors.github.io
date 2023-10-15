import * as THREE from 'three';
import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera
    (40, (window.innerWidth) / (window.innerHeight), 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var light = new THREE.PointLight(0xffffff);
light.position.set(-100, 200, 100);
scene.add(light);

var light2 = new THREE.PointLight(0xffffdd);
light2.position.set(100, -200, -100);
scene.add(light2);

//var geometry = new THREE.SphereGeometry(5, 10, 20);
var geometry = new THREE.SphereGeometry(5, 10, 20);
var material = new THREE.MeshLambertMaterial({ color: 0x009900, wireframe: true });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const texture = new THREE.TextureLoader().load("img/tile.jpg");
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(5, 5);
scene.background = texture

camera.position.z = 30;

const loader = new GLTFLoader();
var model;
loader.load('Astronaut.glb', function (gltf) {

    model = gltf.scene;
    scene.add(gltf.scene);

}, undefined, function (error) {

    console.error(error);

});

var render = function () {
    requestAnimationFrame(render);

    cube.rotation.x += 0.005;
    cube.rotation.y += 0.01;
    cube.position.x = 0;

    model.rotation.x += 0.005;
    model.rotation.y += 0.01;
    model.position.x = 0;
    model.position.y = 0;
    renderer.render(scene, camera);
};

render();