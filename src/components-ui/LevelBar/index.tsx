import styles from './levelBar.module.scss';

interface LevelBarProps {
  label: string;
  level: number;
}

const LevelBar = ({ label, level }: LevelBarProps) => {
  const MAX_LEVEL = 10;
  const levelPercentage = `${level * 10}%`;
  const levelNotInRange = level < 0 && level > MAX_LEVEL;

  if (levelNotInRange) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.textInfo}>
        <div className={styles.label}>{label}</div>
        <div>
          {level}/{MAX_LEVEL}
        </div>
      </div>

      <div className={styles.levelBarContainer}>
        <div
          className={styles.levelPercentage}
          style={{ width: levelPercentage }}
        ></div>
      </div>
    </div>
  );
};

export default LevelBar;
