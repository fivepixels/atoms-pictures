import { useEffect, useRef } from 'react';
import { Group, Mesh } from 'three';
import { useFrame } from '@react-three/fiber';
import { electronPositions } from '@components/data/data';

interface IThomsonAtomModel {
  atomicNumber: number;
}

interface IRadius {
  radius: number;
  constant: number;
}

const BohrAtomModel = ({ atomicNumber }: IThomsonAtomModel) => {
  const groupMesh = useRef<Group>(null);
  const electronMesh = useRef<Mesh>(null);
  // const radius = [6.2, 12.5, 18.75];
  const radius: IRadius[] = [
    {
      radius: 6.2,
      constant: 0,
    },
    {
      radius: 12.5,
      constant: 2.5
    },
    {
      radius: 18.4,
      constant: 3.1,
    },
    {
      radius: 20,
      constant: 4,
    }
  ];

  useEffect(() => {
    groupMesh.current.children.map((value, idx) => {
      if (idx === 0) {
        return;
      }

      // n = 1
      if (idx === 1) {
        value.position.set(radius[0].radius, 0, 0);
      } else if (idx === 2) {
        value.position.set(-radius[0].radius, 0, 0);
      }

      // 2 <= n <= 8
      for (let n = 2; n <= 4; n++) {
        const firstOrder = 8 * (n-1) - 5;
        if (firstOrder <= idx && idx <= firstOrder + 7) {
         electronPositions(radius[n-1].radius, radius[n-1].constant).map((result: number[], index: number) => {
            console.log(n);
            console.log(radius[n-1]);
            console.log(idx);
            console.log(index);
            console.log(idx - 3 === index);
            if (idx - 3 === index) {
              value.position.set(result[0], 0, result[2]);
            }
          })
        }
      }
    });
  }, [groupMesh]);

  useFrame((_state, _delta) => {
  });

  return (
    <group ref={groupMesh}>
      <mesh>
        <sphereGeometry args={[2, 200, 200]} />
        <meshPhysicalMaterial roughness={0} color="#de5147" />
      </mesh>
      {[...Array(atomicNumber)].map((_value, idx) => (
        <mesh key={idx} ref={electronMesh}>
          <sphereGeometry args={[0.2, 200, 200]} />
          <meshPhysicalMaterial roughness={0} />
        </mesh>
      ))}
    </group>
  );
};

export default BohrAtomModel;
