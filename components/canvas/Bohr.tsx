import { useRef } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';
import { electronPositions, getNumberOfElectrons } from '@components/data/data';
import { useRecoilValue } from 'recoil';
import { extraState } from '@components/states';

interface IThomsonAtomModel {
  atomicNumber: number;
}

const BohrAtomModel = ({ atomicNumber }: IThomsonAtomModel) => {
  const helpers = useRecoilValue(extraState);
  const groupMesh = useRef<Group>();

  const electronNumberForEnergyLevel = getNumberOfElectrons({ atomicNumber });
  const radius = helpers.toScale ? [187, 375, 560] : [4.9, 10, 15];

  useFrame((_state, delta) => {
    if (helpers.movementHelper) {
      groupMesh.current.rotation.y += delta / 4;
    }
  });

  setTimeout(() => {
    groupMesh.current.children.map((energyLevelMesh, index) => {
      if (index === 0) return;
      const energyLevel = index;

      energyLevelMesh.children.map((electronMesh, electronIndex) => {
        const currentRadius = radius[energyLevel - 1];

        if (energyLevel === 1) {
          if (electronIndex === 0) {
            electronMesh.position.set(currentRadius, 0, 0);
          } else if (electronIndex === 1) {
            electronMesh.position.set(-currentRadius, 0, 0);
          }
        } else if (2 <= energyLevel && energyLevel <= 3) {
          electronPositions(currentRadius).map(
            (result: number[], electronIdx) => {
              if (electronIndex === electronIdx) {
                electronMesh.position.set(result[0], 0, result[2]);
              }
            }
          );
        } else if (4 <= energyLevel && energyLevel <= 5) {
        }
      });
    });
  }, 2000);

  return (
    <group ref={groupMesh}>
      <mesh>
        <sphereGeometry args={[helpers.toScale ? 30 : 1, 200, 200]} />
        <meshPhysicalMaterial roughness={0} color="#de5147" />
      </mesh>
      {electronNumberForEnergyLevel.map((value, index) => (
        <group key={index}>
          {[...Array(value)].map((_value, idx) => (
            <mesh key={idx}>
              <sphereGeometry
                args={[helpers.toScale ? 30 / 1840 : 0.2, 200, 200]}
              />
              <meshPhysicalMaterial roughness={0} />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
};

export default BohrAtomModel;
