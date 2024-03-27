import { useEffect, useRef } from "react";
import { Group } from "three";

interface IThomsonAtomModel {
  atomicNumber: number;
}

const ThomsonAtomModel = ({ atomicNumber }: IThomsonAtomModel) => {
  const groupMesh = useRef<Group>(null);

  useEffect(() => {}, [atomicNumber]);

  useEffect(() => {
    groupMesh.current.children.map((value, idx) => {
      if (idx === 0) {
        return;
      } else {
        return;
      }
    });
  }, [groupMesh]);

  return (
    <group ref={groupMesh}>
      <mesh>
        <sphereGeometry args={[2, 200, 200]} />
        <meshPhysicalMaterial roughness={0} color="#de5147" />
      </mesh>
      {[...Array(20)].map((_value, idx) => (
        <mesh key={idx}>
          <sphereGeometry args={[0.2, 200, 200]} />
          <meshPhysicalMaterial roughness={0} />
        </mesh>
      ))}
    </group>
  );
};

export default ThomsonAtomModel;
