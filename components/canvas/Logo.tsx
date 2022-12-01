import * as THREE from 'three';
import { useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useFrame } from '@react-three/fiber';
import { Line, useCursor } from '@react-three/drei';

export default function Logo({ route, ...props }) {
  const router = useRouter();
  const mesh = useRef(null);
  const [hovered, hover] = useState(false);
  const points = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(
        100
      ),
    []
  );

  useCursor(hovered);
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.y = 0;
    mesh.current.rotation.x = 0;
    mesh.current.rotation.z -= delta / 2;
  });

  return (
    <group ref={mesh} {...props}>
      {/* @ts-ignore */}
      <Line worldUnits points={points} color="#0000ff" lineWidth={0.15} />
      {/* @ts-ignore */}
      <Line
        worldUnits
        points={points}
        color="#ff0000"
        lineWidth={0.15}
        rotation={[0, 0, 1]}
      />
      {/* @ts-ignore */}
      <Line
        worldUnits
        points={points}
        color="#00ff00"
        lineWidth={0.15}
        rotation={[0, 0, -1]}
      />
      <mesh
        onClick={() => router.push(route)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <sphereGeometry args={[0.55, 64, 64]} />
        <meshPhysicalMaterial
          roughness={0}
          color={hovered ? 'hotpink' : '#ffffff'}
        />
      </mesh>
    </group>
  );
}
