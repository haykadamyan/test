import React from 'react';

import styles from './styles.module.scss';

function PhoneStepper(props) {
    return (
        <div className={styles['phone-stepper']}>
            <div className="text-[31px] font-semibold leading-[64px]">
                <span className="text-primary">Protect</span> Your Property
            </div>
            <div className={styles.line}></div>
            <div className="text-subtitle1 text-gray-100 text-center font-normal xl:max-w-[620px] lg:w-[560px] xs:w-full xs:px-[20px]">
                Title Guardian will protect your property from fraud and identy theft. Our smart technology will identify all activity on your property and alert you immediately
            </div>
            <div className={styles.inner}>
                <div className="flex flex-col">
                    <div className="flex flex-col flex-[8] justify-end">
                        <div className={styles['step-number']}>01</div>
                        <div className={styles['step-title']}>
                            Title Guardian will protect your property and enable friends and family to act as joint guardians . Ideal for elderly owners or people based overseas.
                        </div>
                    </div>
                    <div className="flex-[17]"></div>
                </div>
                <div className="self-end">
                    <div className={styles['step-number']}>02</div>
                    <div className={styles['step-title']}>
                        Title Guardian will protect your property and enable friends and family to act as joint guardians . Ideal for elderly owners or people based overseas.
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="justify-end flex flex-col flex-1">
                        <div className={styles['step-number']}>03</div>
                        <div className={styles['step-title']}>
                            Title Guardian will protect your property and enable friends and family to act as joint guardians . Ideal for elderly owners or people based overseas.
                        </div>
                    </div>
                    <div className="flex-1"></div>
                </div>
            </div>
        </div>
    )
}

export default PhoneStepper;