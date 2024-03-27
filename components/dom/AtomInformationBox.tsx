import { findAtomBy, IAtomData } from "@components/data/data";
import { atomState } from "@components/states";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import BasicInformationBox from "./BasicInformationBox";

const AtomInformationBox = () => {
  const [currentAtom] = useRecoilState(atomState);
  const [atom, setAtom] = useState<IAtomData>(
    findAtomBy({
      by: "symbol",
      content: "H"
    })[0]
  );

  useEffect(() => {
    setAtom(currentAtom);
  }, [atom, currentAtom]);

  return (
    <BasicInformationBox
      direction={{
        topBottom: "bottom",
        leftRight: "left"
      }}
    >
      <h1 className="text-7xl">{atom.symbol}</h1>
      <ul className="text-xs">
        <li>Symbol : {atom.symbol}</li>
        <li>Name : {atom.name}</li>
        <li>Atomic Number : {atom.atomicNumber}</li>
        <li>Mass : {atom.atomicMass}</li>
        <li>Classification : {atom.classification}</li>
      </ul>
    </BasicInformationBox>
  );
};

export default AtomInformationBox;
