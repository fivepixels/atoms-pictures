import dynamic from "next/dynamic";

const Logo = dynamic(() => import("@components/canvas/Logo"), { ssr: false });

function Page() {
  return (
    <div>
      <h1>Page Not Found.</h1>
    </div>
  );
}

Page.canvas = () => <Logo scale={1.2} />;

export async function getStaticProps() {
  return { props: { title: "Atoms Pictures - 404" } };
}

export default Page;
