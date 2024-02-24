import "../scss/styles.scss";
import "../styles/globals.css";

import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';

const App = ({ Component, pageProps }) => {

  return (
    <Fragment>
      <Head>
        <title>Socreative Photography - Landscape photographer in Dorset</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="author" content="socreative" />
        {/* Favicon */}
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
