import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const MatrixAnimation = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Создаем линии, похожие на Матрицу
    const lines = [];
    const lineCount = 100;
    for (let i = 0; i < lineCount; i++) {
      const geometry = new THREE.BufferGeometry();
      const vertices = new Float32Array([
        Math.random() * 200 - 50, Math.random() * 200 - 50, 0,
        Math.random() * 200 - 50, Math.random() * 400 - 50, 0,
      ]);
      geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
      const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
      const line = new THREE.Line(geometry, material);
      scene.add(line);
      lines.push(line);
    }

    camera.position.z = 100;

    const animate = () => {
      requestAnimationFrame(animate);

      // Анимация линий
      lines.forEach((line) => {
        line.rotation.x += 0.01;
        line.rotation.y += 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />;
};

export default MatrixAnimation;