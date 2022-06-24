import Link from 'next/link';

import styles from './navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.brand}>Luigi Quarta</div>
      <ol className={styles.menu}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/cv">CV</Link>
        </li>
      </ol>
    </nav>
  );
};

export default Navigation;
