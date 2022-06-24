import { EducationItem } from '../../../../declarations/cv';

import styles from './educationSectionContent.module.scss';

interface EducationSectionContentProps {
  education: EducationItem[];
}

const EducationSectionContent = ({
  education,
}: EducationSectionContentProps) => {
  return (
    <>
      {education.map(({ title, institute, startYear, endYear }, index) => (
        <div key={index} className={styles.educationItem}>
          <h4>{title}</h4>
          <div>{`(${startYear} - ${endYear || 'Present'}) ${institute}`}</div>
        </div>
      ))}
    </>
  );
};

export default EducationSectionContent;
