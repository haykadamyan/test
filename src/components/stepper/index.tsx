import React from 'react';

import Step from './step';

import styles from './styles.module.scss';

function Stepper() {
    return (
      <>
        <h2 className={styles.title}>
          <span>Title Guardian</span> will <span>protect</span> your property from <span>identity theft</span> and <span>property hijacking</span>
        </h2>
        <section className={styles.stepper}>
          <div className={styles['stepper-title']}>
            3 simple steps that can turn your world upside down
          </div>
          <div className={styles['stepper-wrapper']}>
            <Step isLifted number={1} icon="/icons/house.svg" title="Target Property" description="Fraudsters search land registry to find a home they want to target"/>
            <Step number={2} icon="/icons/id-card-v.svg" title="Steal Identity" description="Fraudsters commit identity theft to assume your identity"/>
            <Step number={3} isLifted icon="/icons/people-delete-one.svg" title="Target Property" description="Fraudsters remortgage or sell your home leaving you homeless "/>
          </div>
        </section>
      </>
    )
}

export default Stepper;