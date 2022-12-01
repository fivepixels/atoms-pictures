import { useRef } from 'react';
import dynamic from 'next/dynamic';
import Header from '@components/config';
import Layout from '@components/dom/Layout';
import '@styles/globals.css';

const Scene = dynamic(() => import('@components/canvas/Scene'), { ssr: true });

function App({ Component, pageProps = { title: 'index' } }) {
  const ref = useRef();
  return (
    <>
      <Header title={pageProps.title} />
      <Layout ref={ref}>
        <Component {...pageProps} />
        {Component?.canvas && (
          <Scene
            className="pointer-events-none"
            eventSource={ref}
            eventPrefix="client"
          >
            {Component.canvas(pageProps)}
          </Scene>
        )}
      </Layout>
    </>
  );
}

export default App;
