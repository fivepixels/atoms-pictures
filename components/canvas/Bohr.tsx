import { useEffect, useRef } from 'react';
import { Group, Mesh } from 'three';
import { useFrame } from '@react-three/fiber';

interface IThomsonAtomModel {
  atomicNumber: number;
}

const BohrAtomModel = ({ atomicNumber }: IThomsonAtomModel) => {
  const groupMesh = useRef<Group>(null);
  const electronMesh = useRef<Mesh>(null);

  useEffect(() => {
    groupMesh.current.children.map((value, idx) => {
      if (idx === 0) {
        return;
      } else {
        value.position.set(6.2, 0, 0);
      }
    });
  }, [groupMesh]);

  useFrame((state, delta) => {
    groupMesh.current.children.map((value, idx) => {
      if (idx === 0) {
        return;
      } else {
        // state.camera.translateX(delta / 4);
      }
    });
  });

  return (
    <group ref={groupMesh}>
      <mesh>
        <sphereGeometry args={[2, 200, 200]} />
        <meshPhysicalMaterial roughness={0} color="#de5147" />
      </mesh>
      {[...Array(20)].map((_value, idx) => (
        <mesh key={idx} ref={electronMesh}>
          <sphereGeometry args={[0.2, 200, 200]} />
          <meshPhysicalMaterial roughness={0} />
        </mesh>
      ))}
    </group>
  );
};

export default BohrAtomModel;
