import * as THREE from 'three';

var renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('mainCanvas')
});
renderer.setClearColor(0x000000); // black

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(50, 400 / 300, 1, 10);
camera.position.set(0, 0, 5);
scene.add(camera);

var material = new THREE.MeshBasicMaterial({
  color: 0xffffff // white
});

var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1),
  new THREE.MeshLambertMaterial({
    color: 0xffff00
  })
);
scene.add(cube);


renderer.render(scene, camera);
