import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import React from 'react';

interface IScene {
  children: React.ReactNode;
}

const Scene = ({ children, ...props }: IScene & any) => {
  return (
    <Canvas {...props}>
      <directionalLight position={[10, 10, 10]} intensity={0.75} />
      <directionalLight position={[-10, -10, -10]} intensity={0.75} />
      <ambientLight intensity={0.13} />
      {children}
      <gridHelper scale={6} />
      <axesHelper scale={[80, 80, 80]} />
      <polarGridHelper scale={3} />
      <Preload all />
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
