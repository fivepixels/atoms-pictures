import { Canvas, CanvasTextureProps } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import React from 'react';
interface IScene {
  children: React.ReactNode;
}

function Scene({ children, ...props }: IScene & CanvasTextureProps) {
  return (
    <Canvas {...props}>
      <directionalLight intensity={0.2} />
      <ambientLight intensity={0.2} />
      {children}
      <Preload all />
      <OrbitControls />
    </Canvas>
  );
}

export default Scene;
