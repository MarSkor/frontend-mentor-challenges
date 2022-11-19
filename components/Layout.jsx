import React from 'react'
import Navbar from './Navbar'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Layout = ({ children }) => {

  

  return (
    <>
      <Head>
        <title>Frontend Mentor | Space tourism website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/assets/favicon-32x32.png" />
      </Head>
    <Navbar/>
    {children}
    {/* <Footer/> */}
    <style jsx global>{`body {margin: 0; padding: 0;}`}</style>
    </>
  )
}

export default Layout