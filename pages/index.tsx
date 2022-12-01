import dynamic from 'next/dynamic';

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Logo = dynamic(() => import('@components/canvas/Logo'), { ssr: false });

// Dom components go here
function Page() {
  return (
    <div>
      <h1 className="">Hello World</h1>
    </div>
  );
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = () => <Logo scale={0.5} route="/blob" position-y={-1} />;

export async function getStaticProps() {
  return { props: { title: 'Index' } };
}

export default Page;
