const DaltonAtomModel = () => {
  return (
    <group>
      <mesh>
        <sphereGeometry args={[2, 200, 200]} />
        <meshPhysicalMaterial roughness={0} />
      </mesh>
    </group>
  );
};

export default DaltonAtomModel;
