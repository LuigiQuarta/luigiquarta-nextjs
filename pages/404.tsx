import type { NextPage } from 'next';
import Image from 'next/Image';
import Link from 'next/link';

import Page from '../src/components-layout/Page';

import styles from '../styles/404.module.scss';

const NotFound: NextPage = () => {
  return (
    <Page centered>
      <Image src={'/images/404.png'} width={'300'} height={'386'} />
      <h1 className={styles.errorTitle}>
        &quot;These are not the droids you are looking for.&quot;
        <br />
        (Error 404)
      </h1>
      <div className={styles.errorDescription}>
        The page you are looking for does not exists or have been removed,
        please return to the <Link href="/">Home</Link> to continue your
        journey.
      </div>
    </Page>
  );
};

export default NotFound;
