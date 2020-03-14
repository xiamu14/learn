import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function App() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (ref && ref.current) {
      const renderer = new THREE.WebGLRenderer({
        canvas: ref.current
      })
      renderer.setClearColor(0x000000);

      // init scene
      const scene = new THREE.Scene();

      // add camera
      const camera = new THREE.PerspectiveCamera(30, 4 / 3, 1, 10);
      camera.position.set(1, 0, 5);
      scene.add(camera);

      // instantiate a rectangle
      const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshLambertMaterial({
          color: 0xffff00,
        })
      );
      scene.add(cube);

      renderer.render(scene, camera);

    }
  }, []);
  return (
    <div className="App">
      <canvas ref={ref} width="400px" height="300px"></canvas>
    </div>
  );
}

export default App;
