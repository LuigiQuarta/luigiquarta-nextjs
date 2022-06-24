import { repositoryConfig } from '../../configs/repositoryConfig';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Handcrafted with ❤️ + ☕ using Next.js.
      <div>
        View{' '}
        <a href={repositoryConfig} target="_blank" rel="noreferrer">
          source
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
