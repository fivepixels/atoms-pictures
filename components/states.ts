import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { findAtomBy, IAtomData, IExtraState, TAtomType } from './data/data';

const sessionStorage =
  typeof window !== 'undefined' ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: 'atoms-pictures',
  storage: sessionStorage
});

const atomState = atom<IAtomData>({
  key: 'atoms-data',
  default: findAtomBy({
    by: 'symbol',
    content: 'H'
  })[0],
  effects_UNSTABLE: [persistAtom]
});

const atomTypeState = atom<TAtomType>({
  key: 'atoms-type-data',
  default: 'Bohr',
  effects_UNSTABLE: [persistAtom]
});

const extraState = atom<IExtraState>({
  key: 'helper-data',
  default: {
    gridHelper: true,
    axesHelper: true,
    polarGridHelper: true,
    movementHelper: true,
    informationHelper: true,
    cameraController: true,
    toScale: true
  },
  effects_UNSTABLE: [persistAtom]
});

export { atomState, atomTypeState, extraState };
