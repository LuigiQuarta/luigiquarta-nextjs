import { ReactNode } from 'react';

import styles from './socialIcon.module.scss';

interface SocialIconProps {
  href: string;
  title: string;
  icon: ReactNode;
}

const SocialIcon = ({ href, title, icon }: SocialIconProps) => {
  return (
    <a
      className={styles.socialIcon}
      href={href}
      target="_blank"
      rel="noreferrer"
      title={title}
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
