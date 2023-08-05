import React from 'react';
import { Canvas } from '@react-three/fiber';
import './RamenScroll.css';
import ObjectST from '../Objects/ScrollAnimation/ObjectSpinTilt';

const RamenScroll = () => {
  const ramenPosition = [0, 2, -20];
  const ramenRotation = [7, Math.PI / 15, 0];
  const ramenScale = [0.8, 0.8, 0.8]; // Set the scale [x, y, z]

  return (
    <div className='ramen-scroll-container' >
      <Canvas>
        <ambientLight />
        <pointLight />
        <ObjectST url="src/assets/models/ramen.glb" position={ramenPosition} rotation={ramenRotation} scale={ramenScale} />
      </Canvas>
    </div>
  );
};

export default RamenScroll;


