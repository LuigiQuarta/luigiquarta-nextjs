import styles from './cvHeader.module.scss';

interface CvHeaderProps {
  name: string;
  title: string;
}

const CvHeader = ({name, title}: CvHeaderProps) => {
  return (
    <>
      <h1 className={styles.name}>{name}</h1>
      <div>{title}</div>
    </>
  );
};

export default CvHeader;
