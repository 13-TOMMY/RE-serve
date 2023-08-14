import React, { useRef, useState, useCallback } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, a, config } from "@react-spring/three";

function Tilt({ url, position, scale, ...props }) {
  const gltf = useGLTF(url);
  const groupRef = useRef();
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const mouseX = (clientX - left) / width - 0.6; 
    const mouseY = (clientY - top) / height - 0.6; 
    setMousePosition({ x: mouseX, y: mouseY });
  };

  const handlePointerEnter = useCallback(() => {
    setHovered(true);
    window.addEventListener("mousemove", handleMouseMove);
  }, []);

  const handlePointerLeave = useCallback(() => {
    setHovered(false);
    window.removeEventListener("mousemove", handleMouseMove);

    setMousePosition({ x: 0, y: 0 });
  }, []);

  const tiltIntensity = 0.1;
  const tiltX = -mousePosition.y * tiltIntensity;
  const tiltY = mousePosition.x * tiltIntensity;
  const hoverTilt = hovered ? [tiltX, tiltY, 0] : [0, 0, 0];
  
  const { rotation: springTilt } = useSpring({
    rotation: hoverTilt,
    config: config.default, 
  });

  return (
    <group
      ref={groupRef}
      {...props}
      position={position}
      scale={scale}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <mesh ref={mesh} position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <a.primitive object={gltf.scene} rotation={springTilt} />
      </mesh>
    </group>
  );
}

export default Tilt;
