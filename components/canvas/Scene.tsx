import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import React, { useRef } from "react";
import { useRecoilValue } from "recoil";
import { extraState } from "@components/states";

interface IScene {
  children: React.ReactNode;
}

const Scene = ({ children, ...props }: IScene & any) => {
  const canvasRef = useRef(null);
  const helpers = useRecoilValue(extraState);

  return (
    <Canvas
      ref={canvasRef}
      camera={{
        position: [20, 20, 20],
        type: "PerspectiveCamera",
        far: 9000000
      }}
      {...props}
    >
      <directionalLight position={[20, 20, 20]} intensity={0.75} />
      <directionalLight position={[-20, -20, -20]} intensity={0.75} />
      <ambientLight intensity={0.13} />
      {children}
      {helpers.gridHelper ? (
        <gridHelper scale={helpers.toScale ? 300 : 8} />
      ) : null}
      {helpers.axesHelper ? <axesHelper scale={100} /> : null}
      {helpers.polarGridHelper ? (
        <polarGridHelper scale={helpers.toScale ? 150 : 4} />
      ) : null}
      {helpers.cameraController ? <OrbitControls /> : null}
      <Preload all />
    </Canvas>
  );
};

export default Scene;
