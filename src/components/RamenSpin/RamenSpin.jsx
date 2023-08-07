import React from "react";
import { Canvas } from "@react-three/fiber";
import ObjectST from "../../Objects/SpinTilt/ObjectSpinTilt";
import "./RamenSpin.css";

const RamenScroll = () => {
  const ramenPosition = [0, 0, -20];
  const ramenRotation = [7, Math.PI / 15, 0];
  const ramenScale = [0.8, 0.8, 0.8];

  const canvasStyle = {
    width: "100%",
    height: "100%",
    overflow: "visible",
  };

  return (
    <div className="ramen-scroll-container">
      <Canvas style={canvasStyle}>
        <ambientLight />
        <pointLight />
        <ObjectST
          url="src/assets/models/ramen.glb"
          position={ramenPosition}
          rotation={ramenRotation}
          scale={ramenScale}
        />
      </Canvas>
    </div>
  );
};

export default RamenScroll;
