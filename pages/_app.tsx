import React, {useEffect} from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';
import {printAppInfo} from "../src/utils/appinfoUtil";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    printAppInfo();
  }, []);

  return (
    <>
      <Head>
        <title>Luigi Quarta</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
