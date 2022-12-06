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

export const bohrEnergyLevel = [2, 8, 8, 18, 18, 32, 32];
export const bohrRadiuses = [4.4];

export const getAllCase = (theNumber: number) => {
  return [
    [theNumber, 0, theNumber],
    [-theNumber, 0, -theNumber],
    [-theNumber, 0, theNumber],
    [theNumber, 0, -theNumber]
  ];
};

type TDevidedBy = 8 | 18 | 32;
export const electronPositions = (
  radius: number,
  devidedBy?: TDevidedBy
): number[][] => {
  // Helped by Mr. Happy in Bodwell and also Happy Tutor.
  if (!devidedBy) devidedBy = 8;

  const constant = Math.sqrt(2) / 2;
  const diagonalPosition = radius * constant;

  const positionArrs = [
    [radius, 0, 0],
    [-radius, 0, 0],
    [0, 0, radius],
    [0, 0, -radius]
  ];

  positionArrs.push(...getAllCase(diagonalPosition));

  if (devidedBy === 8) {
    return positionArrs;
  } else if (devidedBy === 18) {
    const constant = Math.sqrt(4) / 2;
    const diagonalPosition = radius * constant;

    positionArrs.push([]);
  }
};

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

interface IGetNumberOfElectrons {
  atomicNumber: number;
}

export const getNumberOfElectrons = ({
  atomicNumber
}: IGetNumberOfElectrons): number[] => {
  let atomicNumberNotConstant = atomicNumber;
  const returnedElectronsArr: number[] = [];

  bohrEnergyLevel.map((_value, _idx) => {});

  for (let i = 0; i < bohrEnergyLevel.length; i++) {
    const value = bohrEnergyLevel[i];

    if (atomicNumberNotConstant <= 0) {
      break;
    } else if (atomicNumberNotConstant > value) {
      returnedElectronsArr.push(value);
      atomicNumberNotConstant = atomicNumberNotConstant - value;
    } else if (atomicNumberNotConstant <= value) {
      returnedElectronsArr.push(atomicNumberNotConstant);
      break;
    }
  }

  return returnedElectronsArr;
};

export default AllAtomData;
