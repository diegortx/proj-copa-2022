import Head from "next/head";
import Script from "next/script";
import { global } from "../styles/global.css";
import Router from 'next/router';
import NProgress from 'nprogress';
import "./Nprogress.css";

//Route Events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Copa do Mundo 2022 🏆⚽</title>
        <link rel="icon" type="image/x-icon" href="https://cdn-icons-png.flaticon.com/512/197/197386.png"/>
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <div className="container">
        <Component {...pageProps} />
      </div>

      <footer className="text-center">
        Devlopment for <a href="https://github.com/diegortx" target="_blank">Diego H Nogueira</a> - using <a target="_blank" href="https://nextjs.org/">NextJS</a> 2022
      </footer>
    </>
  );
}
export default MyApp;
