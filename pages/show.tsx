import type { NextPage } from 'next';
import CanvasLayout from '@components/dom/CanvasLayout';
import AtomInformationBox from '@components/dom/AtomInformationBox';
import HelperController from '@components/dom/HelperController';
import { useRecoilState, useRecoilValue } from 'recoil';
import { atomState, extraState } from '@components/states';
import Atom from '@components/canvas/Atom';
import AtomTypeBox from '@components/dom/AtomTypeBox';
import useKeyboard from '@components/dom/useKeyboard';
import { findAtomBy, IAtomData } from '@components/data/data';

const Show: NextPage = () => {
  const [currentAtom, setCurrentAtom] = useRecoilState(atomState);
  let atom: IAtomData = currentAtom;
  const helper = useRecoilValue(extraState);

  useKeyboard(
    [
      {
        key: '/',
        fn: () => {
          console.log('This is a command for searching');
        }
      },
      {
        key: ['ArrowRight', 'd', 'l'],
        fn: () => {
          atom = findAtomBy({
            by: 'number',
            content: atom.atomicNumber + 1
          })[0];
          setCurrentAtom(
            findAtomBy({
              by: 'number',
              content: atom.atomicNumber + 1
            })[0]
          );
        }
      },
      {
        key: ['ArrowLeft', 'a', 'j'],
        fn: () => {
          atom = findAtomBy({
            by: 'number',
            content: atom.atomicNumber - 1
          })[0];
          setCurrentAtom(
            findAtomBy({
              by: 'number',
              content: atom.atomicNumber - 1
            })[0]
          );
        }
      }
    ],
    false
  );

  return (
    <div>
      {helper.informationHelper ? <AtomInformationBox /> : null}
      <HelperController />
      <AtomTypeBox />
      <CanvasLayout>
        <Atom />
      </CanvasLayout>
    </div>
  );
};

export default Show;
