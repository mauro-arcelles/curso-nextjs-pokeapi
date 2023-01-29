import '@/styles/globals.css';
import { darkTheme } from '@/themes';
import { NextUIProvider } from '@nextui-org/react';
import { SSRProvider } from '@react-aria/ssr';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <SSRProvider>
      <NextUIProvider theme={darkTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </SSRProvider>
  );
}
