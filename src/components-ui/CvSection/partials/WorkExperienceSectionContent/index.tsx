import { WorkExperience } from '../../../../declarations/cv';

import styles from './workExperienceSectionContent.module.scss';

interface WorkExperienceSectionContent {
  workExperiences: WorkExperience[];
}

const WorkExperienceSectionContent = ({
  workExperiences,
}: WorkExperienceSectionContent) => {
  return (
    <>
      {
        <>
          {workExperiences.map(
            ({ companyName, startDate, endDate, projects }) => (
              <>
                <div>
                  <h3 className={styles.company}>{companyName}</h3>
                  <div className={styles.meta}>{`From ${startDate} to ${
                    !!endDate ? endDate : 'Present'
                  }`}</div>
                </div>

                {projects.map(({ name, sector, role, technologies }) => (
                  <div key={name} className={styles.project}>
                    <div>{`Project: ${name}`}</div>
                    <div>{`Sector: ${sector}`}</div>
                    <div>{`Role: ${role}`}</div>
                    <div>{`Project technologies: ${technologies.join(
                      ', ',
                    )}`}</div>
                  </div>
                ))}
              </>
            ),
          )}
        </>
      }
    </>
  );
};

export default WorkExperienceSectionContent;
