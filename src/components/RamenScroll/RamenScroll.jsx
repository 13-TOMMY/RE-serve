import React from 'react';
import { Canvas } from '@react-three/fiber';
import './RamenScroll.css';
import Object from '../Objects/ScrollAnimation/ObjectED';

const RamenScroll = () => {
  const ramenPosition = [0, 2, -20];
  const ramenRotation = [7, Math.PI / 10, 0];
  const ramenScale = [0.5, 0.5, 0.5]; // Set the scale [x, y, z]

  return (
    <div className='ramen-scroll-container' >
      <Canvas>
        <ambientLight />
        <pointLight />
        <Object url="src/assets/models/ramen.glb" position={ramenPosition} rotation={ramenRotation} scale={ramenScale} />
      </Canvas>
    </div>
  );
};

export default RamenScroll;


