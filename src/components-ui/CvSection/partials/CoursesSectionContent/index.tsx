import { Course } from '../../../../declarations/cv';

import styles from './coursesSectionContent.module.scss';

interface CoursesSectionContent {
  courses: Course[];
}

const CoursesSectionContent = ({ courses }: CoursesSectionContent) => {
  return (
    <ul className={styles.courses}>
      {courses.map(({ year, title, institute }, index) => (
        <li key={`${title}-${year}`}>
          <strong>{title}</strong>{' '}
          <span className={styles.meta}>{`(${year} - ${institute})`}</span>
        </li>
      ))}
    </ul>
  );
};

export default CoursesSectionContent;
