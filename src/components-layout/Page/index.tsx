import React from 'react';
import classNames from 'classnames';

import Footer from '../Footer';
import Navigation from '../Navigation';

import styles from './page.module.scss';

interface PageProps {
  centered?: boolean;
  children: React.ReactNode;
}

const Page = ({ centered, children }: PageProps) => {
  return (
    <>
      <Navigation />
      <main
        className={classNames({
          [styles.pageMain]: true,
          [styles.centered]: centered,
        })}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Page;
