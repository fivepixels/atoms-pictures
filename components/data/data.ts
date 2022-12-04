import AtomNameArr from './atomNames';
import AtomicMassArr from './atomicMasses';
import AtomSymbolArr from './atomSymbols';
import AtomClassificationArr from './atomClassification';

export type TAtomClassified =
  | 'Alkali Metals'
  | 'Alkaline-earth Metals'
  | 'Transition Metals'
  | 'Metal'
  | 'Lanthanide'
  | 'Metalloid'
  | 'Non-metal'
  | 'Halogen'
  | 'Noble Gas'
  | 'Actinide';

export interface IAtomData {
  name: string;
  atomicNumber: number;
  atomicMass: number;
  symbol: string;
  classification: TAtomClassified;
}

const AllAtomData: IAtomData[] = [];

AtomNameArr.map((value, idx) => {
  AllAtomData.push({
    name: value,
    atomicNumber: idx + 1,
    atomicMass: AtomicMassArr[idx],
    symbol: AtomSymbolArr[idx],
    classification: AtomClassificationArr[idx]
  });
});

type TFindBy = 'name' | 'symbol' | 'classification';

interface IFindAtomBy {
  by: TFindBy;
  content: string | number;
}

export const findAtomFilter = (
  value: string,
  idx: number,
  content: string | number,
  returnedArr: IAtomData[]
): void => {
  if (value === content) {
    returnedArr.push({
      name: value,
      atomicNumber: idx + 1,
      atomicMass: AtomicMassArr[idx],
      symbol: AtomSymbolArr[idx],
      classification: AtomClassificationArr[idx]
    });
  }
};

export const findAtomBy = ({ by, content }: IFindAtomBy): IAtomData[] => {
  const returnedAtomsArr: IAtomData[] = [];

  if (by === 'name') {
    AtomNameArr.map((value, idx) =>
      findAtomFilter(value, idx, content, returnedAtomsArr)
    );
  } else if (by === 'symbol') {
    AtomSymbolArr.map((value, idx) =>
      findAtomFilter(value, idx, content, returnedAtomsArr)
    );
  } else if (by === 'classification') {
    AtomClassificationArr.map((value, idx) =>
      findAtomFilter(value, idx, content, returnedAtomsArr)
    );
  }

  return returnedAtomsArr;
};

export default AllAtomData;
