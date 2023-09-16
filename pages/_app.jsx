import Head from 'next/head';
import Script from 'next/script';
import { Fragment, useEffect, useState } from 'react';
import Preloader from '../src/layout/Preloader';
import '../styles/globals.css';
const App = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Socreative Photography - Landscape photographer in Dorset</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="author" content="socreative" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-P2QKEQSBBR" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-P2QKEQSBBR');
          `}
        </Script>
        
        
        {/*[if lt IE 9]>
	
	
	<![endif]*/}
        {/* Favicon */}
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      {loader && <Preloader />}
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
