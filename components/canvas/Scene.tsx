import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import React, { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { extraState } from '@components/states';
import { Camera } from 'three';

interface IScene {
  children: React.ReactNode;
}

const Scene = ({ children, ...props }: IScene & any) => {
  const canvasRef = useRef(null);
  const helpers = useRecoilValue(extraState);

  return (
    <Canvas ref={canvasRef} camera={{ position: [10, 10, 10] }} {...props}>
      <directionalLight position={[10, 10, 10]} intensity={0.75} />
      <directionalLight position={[-10, -10, -10]} intensity={0.75} />
      <ambientLight intensity={0.13} />
      {children}
      {helpers.gridHelper ? <gridHelper scale={8} /> : null}
      {helpers.axesHelper ? <axesHelper scale={40} /> : null}
      {helpers.polarGridHelper ? <polarGridHelper scale={5} /> : null}
      {helpers.cameraController ? <OrbitControls /> : null}
      <Preload all />
    </Canvas>
  );
};

export default Scene;
