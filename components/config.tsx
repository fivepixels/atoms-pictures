import Head from 'next/head';

const titleDefault = 'Atoms Pictures';
const url = 'https://react-three-next.vercel.app/';
const description = 'The best way to picture atoms';
const author = 'Cattynip <cattynip.cattynip@gmail.com>';

export default function Header({ title = titleDefault }) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="language" content="english" />
      <meta httpEquiv="content-type" content="text/html" />
      <meta name="author" content={author} />
      <meta name="designer" content={author} />
      <meta name="publisher" content={author} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Atoms,Pictures,Homework" />
      <meta name="robots" content="index,follow" />
      <meta name="distribution" content="web" />
      <meta name="og:title" content={title} />
      <meta name="og:type" content="site" />
      <meta name="og:url" content={url} />
      <meta name="og:image" content={'/icons/share.png'} />
      <meta name="og:site_name" content={title} />
      <meta name="og:description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1, initial-scale=1.0"
      />
      <link rel="shortcut icon" href="/icons/favicon.ico" />
      <link rel="icon" type="image/x-icon" href="/icons/favicon.ico" />
    </Head>
  );
}
