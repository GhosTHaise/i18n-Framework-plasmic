import '@/styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { usePlasmicTranslator } from '@/i18n';

function App({ Component, pageProps }: AppProps) {
  const translator = usePlasmicTranslator();
  return (
    <PlasmicRootProvider Head={Head}  translator={translator}>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}

export default appWithTranslation(App);
