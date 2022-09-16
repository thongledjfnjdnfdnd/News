import Head from 'next/head';
import React from 'react';
import { Header } from './Header';

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Meetup</title>
      </Head>
      <main>
        <Header />
      </main>
    </>
  );
};
