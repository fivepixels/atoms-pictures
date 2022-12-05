import { atomTypeArr, findAtomBy, IAtomData } from '@components/data/data';
import { atomState } from '@components/states';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import AtomTypeButton from './AtomTypeButton';
import BasicInformationBox from './BasicInformationBox';

const AtomTypeBox = () => {
  const [currentAtom, _setCurrentAtom] = useRecoilState(atomState);
  const [atom, setAtom] = useState<IAtomData>(
    findAtomBy({
      by: 'symbol',
      content: 'H'
    })[0]
  );

  useEffect(() => {
    setAtom(currentAtom);
  }, [atom, currentAtom]);

  return (
    <BasicInformationBox
      direction={{
        topBottom: 'top',
        leftRight: 'right'
      }}
    >
      <ul className="flex flex-col items-end justify-center text-right space-y-2">
        <AtomTypeButton atomTypeString={"Bohr"} />
      </ul>
    </BasicInformationBox>
  );
};

export default AtomTypeBox;
