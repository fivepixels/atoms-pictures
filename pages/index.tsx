import type { NextPage } from 'next';
import Logo from '@components/canvas/Logo';
import CanvasLayout from '@components/dom/CanvasLayout';

const Page: NextPage = () => {
  return (
    <>
      <CanvasLayout>
        <Logo scale={0.3} />
      </CanvasLayout>
    </>
  );
};

export default Page;
