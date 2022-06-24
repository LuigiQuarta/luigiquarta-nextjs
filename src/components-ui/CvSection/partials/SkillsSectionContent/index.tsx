import { Skill } from '../../../../declarations/cv';

import LevelBar from '../../../LevelBar';

import styles from './skillsSectionContent.module.scss';

interface SkillsSectionContentProps {
  skills: Skill[];
}

const SkillsSectionContent = ({ skills }: SkillsSectionContentProps) => {
  return (
    <div className={styles.skillContainer}>
      {skills.map(({ name, level }, index) => (
        <LevelBar key={`${index}-${name}`} label={name} level={level} />
      ))}
    </div>
  );
};

export default SkillsSectionContent;
