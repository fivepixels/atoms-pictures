import { useRecoilValue } from "recoil";
import { atomState, atomTypeState } from "@components/states";
import DaltonAtomModel from "./Dalton";
import ThomsonAtomModel from "./Thomson";
import RutherfordAtomModel from "./Rutherford";
import BohrAtomModel from "./Bohr";

const Atom = () => {
  const atomInfor = useRecoilValue(atomState);
  const atomType = useRecoilValue(atomTypeState);

  return (
    <>
      {atomType === "Dalton" ? <DaltonAtomModel /> : null}
      {atomType === "Thomson" ? (
        <ThomsonAtomModel atomicNumber={atomInfor.atomicNumber} />
      ) : null}
      {atomType === "Rutherford" ? (
        <RutherfordAtomModel atomicNumber={atomInfor.atomicNumber} />
      ) : null}

      {atomType === "Bohr" ? (
        <BohrAtomModel atomicNumber={atomInfor.atomicNumber} />
      ) : null}
    </>
  );
};

export default Atom;
