import { ReactNode } from 'react';

import styles from './cvSection.module.scss';

interface CvSectionProps {
  title: string;
  icon?: ReactNode;
  children?: ReactNode;
}

const CvSection = ({ title, icon, children }: CvSectionProps) => {
  return (
    <section className={styles.section}>
      <header>
        <div>{icon}</div>
        <h3>{title}</h3>
      </header>
      <div>{children}</div>
    </section>
  );
};

export default CvSection;
