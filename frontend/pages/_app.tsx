import "../styles/globals.css";
import "windi.css";
import type { AppProps } from "next/app";
import "../components/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
