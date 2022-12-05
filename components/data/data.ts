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

export interface IExtraState {
  gridHelper: boolean;
  axesHelper: boolean;
  polarGridHelper: boolean;
  movementHelper: boolean;
  informationHelper: boolean;
  cameraController: boolean;
  toScale: boolean;
}

export type TAtomType = 'Dalton' | 'Thomson' | 'Rutherford' | 'Bohr';
export type TParticleType = 'Proton' | 'Neutron' | 'Electron';
export const atomTypeArr: TAtomType[] = [
  'Dalton',
  'Thomson',
  'Rutherford',
  'Bohr'
];
export const particleTypeArr: TParticleType[] = [
  'Proton',
  'Neutron',
  'Electron'
];

export const bohrEnergyLevel = [];
export const bohrRadiuses = [4.4];

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

type TFindBy = 'name' | 'symbol' | 'classification' | 'number';

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
  } else if (by === 'number') {
    if (content <= 0 || content >= 119 || typeof content === 'string') {
      return findAtomBy({
        by: 'number',
        content: 1
      });
    }
    returnedAtomsArr.push({
      name: AtomNameArr[content - 1],
      atomicNumber: content,
      atomicMass: AtomicMassArr[content - 1],
      symbol: AtomSymbolArr[content - 1],
      classification: AtomClassificationArr[content - 1]
    });
  }

  return returnedAtomsArr;
};

export default AllAtomData;
