import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BasicAnimation = () => {
  const canvasRef = useRef(null);
  const requestRef = useRef();
  const scene = useRef();
  const camera = useRef();
  const renderer = useRef();
  const cube = useRef();

  const animate = (time) => {
    cube.current.rotation.x += 0.01;
    cube.current.rotation.y += 0.01;

    renderer.current.render(scene.current, camera.current);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Set up the scene
    scene.current = new THREE.Scene();

    // Set up the camera
    camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.current.position.z = 5;

    // Set up the renderer
    renderer.current = new THREE.WebGLRenderer({ antialias: true });
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.current.domElement);

    // Create a cube geometry and material
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    // Create the cube mesh
    cube.current = new THREE.Mesh(geometry, material);
    scene.current.add(cube.current);

    // Start the animation
    requestRef.current = requestAnimationFrame(animate);

    // Clean up on unmount
    return () => {
      cancelAnimationFrame(requestRef.current);
      renderer.current.dispose();
    };
  }, []);

  // Resize the canvas when the window size changes
  useEffect(() => {
    const handleResize = () => {
      camera.current.aspect = window.innerWidth / window.innerHeight;
      camera.current.updateProjectionMatrix();
      renderer.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div ref={canvasRef}></div>;
};

export default BasicAnimation;
