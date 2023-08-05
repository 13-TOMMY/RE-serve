import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import './RamenScroll.css';
import ObjectST from '../../Objects/SpinTilt/ObjectSpinTilt';

const RamenScroll = () => {
  const ramenPosition = [0, 0, -20];
  const ramenRotation = [7, Math.PI / 15, 0];
  const [ramenScale, setRamenScale] = useState([0.8, 0.8, 0.8]);

  useEffect(() => {
    const updateRamenScale = () => {
      const width = window.innerWidth;
      let scaleFactor = Math.min(width / 1300);

      scaleFactor = Math.min(scaleFactor, 0.8);

      // Set the new scale based on the scaleFactor
      setRamenScale([0.8 * scaleFactor, 0.8 * scaleFactor, 0.8 * scaleFactor]);
    };

    updateRamenScale();
    window.addEventListener('resize', updateRamenScale);

    return () => {
      window.removeEventListener('resize', updateRamenScale);
    };
  }, []);

  const canvasStyle = {
    width: '100%',
    height: '100%',
    overflow: 'visible',
  };

  return (
    <div className='ramen-scroll-container'>
       <Canvas style={canvasStyle}>
        <ambientLight />
        <pointLight />
        <ObjectST url="src/assets/models/ramen.glb" position={ramenPosition} rotation={ramenRotation} scale={ramenScale} />
      </Canvas>
    </div>
  );
};

export default RamenScroll;
