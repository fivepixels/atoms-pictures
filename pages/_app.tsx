import { useRef } from "react";
import Layout from "@components/dom/Layout";
import "@styles/globals.css";
import { RecoilRoot } from "recoil";
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  const ref = useRef();

  return (
    <RecoilRoot>
      <Layout ref={ref}>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default App;
