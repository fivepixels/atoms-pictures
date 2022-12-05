import { useRef } from 'react';
import { Group, Mesh } from 'three';

interface IThomsonAtomModel {
  atomicNumber: number;
}

const RutherfordAtomModel = ({ atomicNumber }: IThomsonAtomModel) => {
  const groupMesh = useRef<Group>(null);
  const electronMesh = useRef<Mesh>(null);

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

export default RutherfordAtomModel;
