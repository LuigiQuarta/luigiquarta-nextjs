import type { NextPage } from 'next';
import {
  BsBook,
  BsBriefcase,
  BsChat,
  BsController,
  BsEasel,
  BsTools,
} from 'react-icons/bs';

import Page from '../src/components-layout/Page';

import CvHeader from '../src/components-ui/CvHeader';
import CvSection from '../src/components-ui/CvSection';
import SkillsSectionContent from '../src/components-ui/CvSection/partials/SkillsSectionContent';
import WorkExperienceSectionContent from '../src/components-ui/CvSection/partials/WorkExperienceSectionContent';
import EducationSectionContent from '../src/components-ui/CvSection/partials/EducationSectionContent';
import CoursesSectionContent from '../src/components-ui/CvSection/partials/CoursesSectionContent';
import LanguageSectionContent from '../src/components-ui/CvSection/partials/LanguageSectionContent';
import HobbiesSectionContent from '../src/components-ui/CvSection/partials/HobbiesSectionContent';

import { cvData } from '../src/data/cvData';

const Cv: NextPage = () => {
  return (
    <Page>
      <CvHeader name="Luigi Quarta" title="Frontend Developer" />

      <CvSection title={'Skills'} icon={<BsTools />}>
        <SkillsSectionContent skills={cvData.skills} />
      </CvSection>

      <CvSection title={'Work experience'} icon={<BsBriefcase />}>
        <WorkExperienceSectionContent
          workExperiences={cvData.workExperiences}
        />
      </CvSection>

      <CvSection title={'Education'} icon={<BsBook />}>
        <EducationSectionContent education={cvData.education} />
      </CvSection>

      <CvSection title={'Courses'} icon={<BsEasel />}>
        <CoursesSectionContent courses={cvData.courses} />
      </CvSection>

      <CvSection title={'Languages'} icon={<BsChat />}>
        <LanguageSectionContent languages={cvData.languages} />
      </CvSection>

      <CvSection title={'Hobbies & interests'} icon={<BsController />}>
        <HobbiesSectionContent hobbies={cvData.hobbies} />
      </CvSection>
    </Page>
  );
};

export default Cv;
