import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Object = ({ url, position, rotation, scale, ...props }) => {
  const gltf = useGLTF(url);
  const mesh = useRef();

  
  const elapsedTime = useRef(0);

  useFrame((state, delta) => {
    
    elapsedTime.current += delta;

    const rotationSpeed = 0.2; 
    const rotationAngle = elapsedTime.current * rotationSpeed;

    mesh.current.rotation.y = rotationAngle;
  });

  return (
    <group ref={mesh} {...props} position={position} rotation={rotation} scale={scale}>
      <primitive object={gltf.scene} />
    </group>
  );
};

export default Object;

