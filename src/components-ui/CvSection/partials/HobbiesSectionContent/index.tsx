import { Fragment } from 'react';

import { Hobby } from '../../../../declarations/cv';

interface HobbiesSectionContentProps {
  hobbies: Hobby[];
}

const HobbiesSectionContent = ({ hobbies }: HobbiesSectionContentProps) => {
  return (
    <>
      {hobbies.map(({ name, description }, index) => (
        <Fragment key={`${index}-${name}`}>
          <h4>{name}</h4>
          <div>{description}</div>
        </Fragment>
      ))}
    </>
  );
};

export default HobbiesSectionContent;
