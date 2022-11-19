import { Html, Head, Main, NextScript } from "next/document";
// import { useRouter } from 'next/router';
// import { useEffect } from 'react';

export default function Document() {
    // const path = useRouter().asPath;

    // useEffect(() => {
    //   let location = path.split("/")[1];
    //   console.log(location)
    
    //   if(location === "/"){
    //     document.body.classList.add("home")
    //   }
    // })
  

  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}