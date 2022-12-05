import * as THREE from 'three';
import { useMemo, useRef, useState } from 'react';
import { GroupProps, useFrame } from '@react-three/fiber';
import { Line, useCursor } from '@react-three/drei';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { extraState } from '@components/states';

function Logo({ ...props }: GroupProps) {
  const helper = useRecoilValue(extraState);
  const mesh = useRef(null);
  const router = useRouter();
  const [hovered, hover] = useState(false);
  const points = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, true, 0).getPoints(
        100
      ),
    []
  );

  useCursor(hovered);
  useFrame((_state, delta) => {
    if (helper.movementHelper) {
      mesh.current.rotation.y += delta / 2;
      mesh.current.rotation.x += delta / 2;
      mesh.current.rotation.z -= delta / 2;
    }
  });

  return (
    <group ref={mesh} {...props}>
      <Line worldUnits points={points} color="#0000ff" lineWidth={0.15} />
      <Line
        points={points}
        color="#ff0000"
        lineWidth={0.85}
        rotation={[3, 2, 10]}
      />
      <Line
        worldUnits
        points={points}
        color="#00ff00"
        lineWidth={0.4}
        rotation={[1, 0, -1]}
      />
      <mesh
        onClick={() => router.push('/show')}
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

export default Logo;
