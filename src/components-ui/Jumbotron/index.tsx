import { ReactNode } from 'react';

import styles from './jumbotron.module.scss';

interface JumbotronProps {
  children: ReactNode;
}

const Jumbotron = ({ children }: JumbotronProps) => {
  return <h1 className={styles.jumbotron}>{children}</h1>;
};

export default Jumbotron;
