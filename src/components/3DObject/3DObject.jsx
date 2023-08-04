import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const BasicScene = () => {
  const canvasRef = useRef(null);
  const scene = useRef();
  const camera = useRef();
  const renderer = useRef();
  const cheeseBoard = useRef();

  useEffect(() => {
    // Set up the scene
    scene.current = new THREE.Scene();

    // Set up the camera
    camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.current.position.set(0, 0, 5);

    // Set up the renderer
    renderer.current = new THREE.WebGLRenderer({ antialias: true });
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.current.domElement);

    // Add ambient light to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.current.add(ambientLight);

    // Add directional light (floodlight) to the scene
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.current.add(directionalLight);

    // Create an OBJLoader instance
    const objLoader = new OBJLoader();

    // Load the cheese board OBJ model
    objLoader.load('src/assets/models/Realistic_Cheese_3DModel.obj', (object) => {
      // Center the cheese board model
      const boundingBox = new THREE.Box3().setFromObject(object);
      const center = boundingBox.getCenter(new THREE.Vector3());
      object.position.sub(center);

      // Store a reference to the cheese board model
      cheeseBoard.current = object;

      // Add the cheese board model to the scene
      scene.current.add(object);
    });

    // Clean up on unmount
    return () => {
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

export default BasicScene;
