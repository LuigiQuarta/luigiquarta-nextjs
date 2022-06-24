import classNames from 'classnames';

import styles from './levelDotBar.module.scss';

type LevelDotBarProps = {
  label: string;
  rate: number;
};

const LevelDotBar = ({ label, rate }: LevelDotBarProps) => {
  const MAX_LEVEL = 5;
  const levelArray = new Array(MAX_LEVEL).fill(true);

  return (
    <div>
      <div className={styles.label}>{label}</div>
      <div className={styles.dotsContainer}>
        {levelArray.map((el, index) => (
          <div
            key={index}
            className={classNames({
              [styles.dot]: true,
              [styles.activeDot]: index < rate,
            })}
          />
        ))}
      </div>
    </div>
  );
};

export default LevelDotBar;
