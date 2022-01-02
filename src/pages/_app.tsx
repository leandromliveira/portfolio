import type { AppProps } from 'next/app';
import { SessionProvider as NextAuthProvider } from 'next-auth/react';

import '../styles/global.scss';

import { PortfolioProvider } from '../context/usePortfolio';

import Header from '../components/Header/index';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PortfolioProvider>
      <NextAuthProvider session={pageProps.session}>
        <Header />
        <main>
          <Sidebar />
          <Component {...pageProps} />
        </main>
        <Footer />
      </NextAuthProvider>
    </PortfolioProvider>
  );
}
