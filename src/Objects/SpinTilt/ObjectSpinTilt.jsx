import React, { useRef, useState, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';

const ObjectST = ({ url, position, rotation, scale, ...props }) => {
  const gltf = useGLTF(url);
  const groupRef = useRef();
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);

  const getRandomTilt = useCallback(() => {
    const tiltX = (Math.random() - 0.9) * 0.2;
    const tiltY = (Math.random() - 0.9) * 0.2;
    const tiltZ = (Math.random() - 0.9) * 0.2;
    return [tiltX, tiltY, tiltZ];
  }, []);

  const hoverTilt = hovered ? getRandomTilt() : [0, 0, 0];
  const { rotation: springTilt } = useSpring({
    rotation: hovered ? hoverTilt : [0, 0, 0],
  });

  useFrame((state, delta) => {
    if (!hovered) {
      mesh.current.rotation.y += 0.0005;
    }
  });

  const handlePointerEnter = useCallback((e) => {
    e.stopPropagation();
    setHovered(true);
  }, []);

  const handlePointerLeave = useCallback((e) => {
    e.stopPropagation();
    setHovered(false);
  }, []);

  return (
    <group
      ref={groupRef}
      {...props}
      position={position}
      rotation={rotation}
      scale={scale}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <mesh ref={mesh} position={[0, 0, 0]}>
        <a.primitive object={gltf.scene} rotation={springTilt} />
      </mesh>
    </group>
  );
};

export default ObjectST;
