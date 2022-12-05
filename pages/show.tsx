import type { NextPage } from 'next';
import CanvasLayout from '@components/dom/CanvasLayout';
import AtomInformationBox from '@components/dom/AtomInformationBox';
import HelperController from '@components/dom/HelperController';
import { useRecoilValue } from 'recoil';
import { extraState } from '@components/states';
import Atom from '@components/canvas/Atom';
import AtomTypeBox from '@components/dom/AtomTypeBox';

const Show: NextPage = () => {
  const helper = useRecoilValue(extraState);

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
