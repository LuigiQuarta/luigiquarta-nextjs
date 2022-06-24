import { Fragment } from 'react';

import { Language } from '../../../../declarations/cv';

import LevelDotBar from '../../../LevelDotBar';

import styles from './languageSectionContent.module.scss';

interface LanguageSectionContentProps {
  languages: Language[];
}

const LanguageSectionContent = ({ languages }: LanguageSectionContentProps) => {
  return (
    <>
      {languages.map(
        ({ name, readLevel, spokenLevel, writtenLevel }, index) => (
          <Fragment key={name}>
            <h4 className={styles.languageTitle}>{name}</h4>

            <div className={styles.levelsContainer}>
              <LevelDotBar label="Read" rate={readLevel}></LevelDotBar>
              <LevelDotBar label="Spoken" rate={spokenLevel}></LevelDotBar>
              <LevelDotBar label="Written" rate={writtenLevel}></LevelDotBar>
            </div>
          </Fragment>
        ),
      )}
    </>
  );
};

export default LanguageSectionContent;
