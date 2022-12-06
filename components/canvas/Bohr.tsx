import { MutableRefObject, useEffect, useRef, useState } from 'react';
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
  const groupMesh = useRef<Group>(null);
  const energyLevelGroupsMesh: MutableRefObject<Group>[] = [];

  const electronNumberForEnergyLevel = getNumberOfElectrons({ atomicNumber });
  const radius = helpers.toScale ? [187, 375, 560] : [4.9, 10, 15];

  useFrame((_state, delta) => {
    if (helpers.movementHelper) {
      groupMesh.current.rotation.y += delta / 4;
    }
  });

  useEffect(() => {
    energyLevelGroupsMesh.map((energyLevelMesh, index) => {
      const energyLevel = index + 1;
      const currentEnergyLevelGroup = energyLevelGroupsMesh[index];

      currentEnergyLevelGroup.current.children.map(
        (electronMesh, electronIndex) => {
          const currentRadius = radius[index];

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
        }
      );
    });
  }, [atomicNumber]);

  return (
    <group ref={groupMesh}>
      <mesh>
        <sphereGeometry args={[helpers.toScale ? 30 : 1, 200, 200]} />
        <meshPhysicalMaterial roughness={0} color="#de5147" />
      </mesh>
      {electronNumberForEnergyLevel.map((value, index) => {
        const energyGroupMesh = useRef<Group>(null);
        energyLevelGroupsMesh.push(energyGroupMesh);

        return (
          <group key={index} ref={energyGroupMesh}>
            {[...Array(value)].map((_value, idx) => (
              <mesh key={idx}>
                <sphereGeometry
                  args={[helpers.toScale ? 30 / 1840 : 0.2, 200, 200]}
                />
                <meshPhysicalMaterial roughness={0} />
              </mesh>
            ))}
          </group>
        );
      })}
      ;
    </group>
  );
};

export default BohrAtomModel;
