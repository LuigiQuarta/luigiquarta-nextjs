import { ReactNode, useState } from 'react';
import classNames from 'classnames';

import styles from './accordion.module.scss';
import { BsDashCircle, BsPlusCircle } from 'react-icons/bs';

interface DataItem {
  label: ReactNode;
  item: ReactNode;
}

interface AccordionProps {
  data: DataItem[];
}

const Accordion = ({ data }: AccordionProps) => {
  const [currentItem, setCurrentItem] = useState(0);
  const isSelected = (itemIndex: number) => currentItem === itemIndex;

  return (
    <>
      {data.map(({ label, item }, index) => (
        <div
          key={index}
          className={classNames({
            [styles.accordionItem]: true,
            [styles.selected]: isSelected(index),
          })}
        >
          <div className={styles.itemHeader}>
            <div
              onClick={() =>
                isSelected(index) ? setCurrentItem(-1) : setCurrentItem(index)
              }
            >
              {isSelected(index) ? <BsDashCircle /> : <BsPlusCircle />}
            </div>
            <div>{label}</div>
          </div>
          <div>{item}</div>
        </div>
      ))}
    </>
  );
};

export default Accordion;
