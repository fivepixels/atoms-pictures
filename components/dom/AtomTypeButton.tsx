import { TAtomType } from '@components/data/data';
import { atomTypeState } from '@components/states';
import { ButtonHTMLAttributes, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

interface IAtomTypeButton {
  atomTypeString: TAtomType;
}

const AtomTypeButton = ({
  atomTypeString,
  ...props
}: IAtomTypeButton & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const [currentAtomType, setCurrentAtomType] = useRecoilState(atomTypeState);
  const [atomType, setAtomType] = useState<TAtomType>('Dalton');

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
          ? 'text-black bg-white hover:text-white hover:bg-transparent hover:border-slate-400'
          : 'text-white bg-transparent'
      } border-2 border-slate-400 hover:bg-white hover:text-black hover:border-black hover:scale-95 transition-colors py-1.5 rounded-md`}
      onClick={onButtonClick}
      {...props}
    >
      Atom Model : {atomTypeString}
    </button>
  );
};

export default AtomTypeButton;
