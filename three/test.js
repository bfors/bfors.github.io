import * as THREE from 'three';

import Stats from 'three/addons/libs/stats.module.js';

let SCREEN_WIDTH = window.innerWidth;
let SCREEN_HEIGHT = window.innerHeight;
let aspect = SCREEN_WIDTH / SCREEN_HEIGHT;

let container, stats;
let camera, scene, renderer, mesh;
let cameraRig, activeCamera, activeHelper;
let cameraPerspective, cameraOrtho;
let cameraPerspectiveHelper, cameraOrthoHelper;
const frustumSize = 600;

init();
//animate();

function init() {
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
    light2.position.set(100, -2000, -100);
    scene.add(light2);

    var geometry = new THREE.SphereGeometry(10, 16, 8)
    var material = new THREE.MeshLambertMaterial({ color: 0x109900, wireframe: true });

    var cube = new THREE.Mesh(geometry, material);

    mesh = new THREE.Mesh(
        new THREE.SphereGeometry(100, 16, 8),
        new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
    );

    scene.add(cube);

    camera.position.z = 30;

    var render = function () {
        requestAnimationFrame(render);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    };

    render();
}

function onWindowResize() {

    SCREEN_WIDTH = window.innerWidth;
    SCREEN_HEIGHT = window.innerHeight;
    aspect = SCREEN_WIDTH / SCREEN_HEIGHT;

    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

    camera.aspect = 0.5 * aspect;
    camera.updateProjectionMatrix();

    cameraPerspective.aspect = 0.5 * aspect;
    cameraPerspective.updateProjectionMatrix();

    cameraOrtho.left = - 0.5 * frustumSize * aspect / 2;
    cameraOrtho.right = 0.5 * frustumSize * aspect / 2;
    cameraOrtho.top = frustumSize / 2;
    cameraOrtho.bottom = - frustumSize / 2;
    cameraOrtho.updateProjectionMatrix();

}

function animate() {

    requestAnimationFrame(animate);
    render();
    stats.update();
}