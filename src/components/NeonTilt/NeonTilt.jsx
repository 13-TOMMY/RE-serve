import React from "react";
import { Canvas } from "@react-three/fiber";
import Tilt from "../../Objects/Tilt/Tilt";
import "./NeonTilt.css";

function NeonTilt() {
  const objectPosition = [0, 0, -12];
  const objectScale = [0.8, 0.8, 0.8];

  const canvasStyle = {
    width: "100%",
    height: "100%",
    overflow: "visible",
  };

  return (
    <div className="neon-tilt-container">
      <Canvas style={canvasStyle}>
        <ambientLight />
        <pointLight />
        <Tilt
          url="src/assets/models/neon_signs.glb"
          position={objectPosition}
          scale={objectScale}
        />
      </Canvas>
    </div>
  );
}

export default NeonTilt;
