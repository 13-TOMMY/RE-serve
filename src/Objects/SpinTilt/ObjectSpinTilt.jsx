import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';

const ObjectST = ({ url, position, rotation, scale, ...props }) => {
  const gltf = useGLTF(url);
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);

  const getRandomTilt = () => {
    const tiltX = (Math.random() - 0.9) * 0.2; // Random tilt along the X-axis (-0.1 to 0.1 radians)
    const tiltY = (Math.random() - 0.9) * 0.2; // Random tilt along the Y-axis (-0.1 to 0.1 radians)
    const tiltZ = (Math.random() - 0.9) * 0.2; // Random tilt along the Z-axis (-0.1 to 0.1 radians)
    return [tiltX, tiltY, tiltZ];
  };

  const hoverTilt = hovered ? getRandomTilt() : [0, 0, 0]; // Tilt angle on hover
  const { rotation: springTilt } = useSpring({
    rotation: hovered ? hoverTilt : [0, 0, 0], // Reset tilt to [0, 0, 0] when not hovered
  });

  useFrame((state, delta) => {
    if (!hovered) {
      mesh.current.rotation.y += 0.001;
    }
  });

  return (
    <group
      ref={mesh}
      {...props}
      position={position}
      rotation={rotation}
      scale={scale}
      onPointerEnter={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerLeave={(e) => {
        e.stopPropagation();
        setHovered(false);
      }}
    >
      <a.primitive object={gltf.scene} rotation={springTilt} />
    </group>
  );
};

export default ObjectST;
