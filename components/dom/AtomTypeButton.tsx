import { TAtomType } from "@components/data/data";
import { atomTypeState } from "@components/states";
import { ButtonHTMLAttributes, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

interface IAtomTypeButton {
  atomTypeString: TAtomType;
}

const AtomTypeButton = ({
  atomTypeString,
  ...props
}: IAtomTypeButton & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const [currentAtomType, setCurrentAtomType] = useRecoilState(atomTypeState);
  const [atomType, setAtomType] = useState<TAtomType>("Dalton");

  const onButtonClick = () => {
    setCurrentAtomType(atomTypeString);
  };

  useEffect(() => {
    setAtomType(currentAtomType);
  }, [currentAtomType]);

  return (
    <button
      className={`px-2 ${
        atomType === atomTypeString
          ? "bg-white text-black hover:border-slate-400 hover:bg-transparent hover:text-white"
          : "bg-transparent text-white"
      } rounded-md border-2 border-slate-400 py-1.5 transition-colors hover:scale-95 hover:border-black hover:bg-white hover:text-black`}
      onClick={onButtonClick}
      {...props}
    >
      Atom Model : {atomTypeString}
    </button>
  );
};

export default AtomTypeButton;
