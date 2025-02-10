import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const DAGVisualization = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Создаем узлы и связи DAG
    const nodes = [];
    const nodeCount = 10;
    for (let i = 0; i < nodeCount; i++) {
      const geometry = new THREE.SphereGeometry(1, 32, 32);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const node = new THREE.Mesh(geometry, material);
      node.position.set(Math.random() * 50 - 25, Math.random() * 50 - 25, Math.random() * 50 - 25);
      scene.add(node);
      nodes.push(node);
    }

    // Создаем связи между узлами
    const lines = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const geometry = new THREE.BufferGeometry();
        const vertices = new Float32Array([
          nodes[i].position.x, nodes[i].position.y, nodes[i].position.z,
          nodes[j].position.x, nodes[j].position.y, nodes[j].position.z,
        ]);
        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
        const line = new THREE.Line(geometry, material);
        scene.add(line);
        lines.push(line);
      }
    }

    camera.position.z = 100;

    const animate = () => {
      requestAnimationFrame(animate);

      // Анимация узлов
      nodes.forEach((node) => {
        node.rotation.x += 0.01;
        node.rotation.y += 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '500px', position: 'relative', zIndex: 1 }} />;
};

export default DAGVisualization;