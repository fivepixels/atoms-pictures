import dynamic from 'next/dynamic';

const Blob = dynamic(() => import('@components/canvas/Blob'), { ssr: false });

function Page() {
  return (
    <div>
      This is the <span className="text-green-200">/blob</span> route. Click on
      the blob to navigate back. The canvas was not unmounted between route
      changes, only its contents. If you want scene contents to persist, put
      them into{' '}
      <span className="text-green-200">@/components/canvas/Scene</span>.
    </div>
  );
}

Page.canvas = () => <Blob route="/" position-y={-0.75} />;

export async function getStaticProps() {
  return { props: { title: 'Blob' } };
}

export default Page;
