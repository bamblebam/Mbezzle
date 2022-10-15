import "../styles/globals.css";
import "windi.css";
import type { AppProps } from "next/app";
import "../components/style.css";
import Nav from "../components/Nav";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
