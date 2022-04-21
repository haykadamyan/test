import React from 'react';

import styles from './styles.module.scss';

function TitleFraud() {
    return (
        <div className={styles['title-fraud']}>
            <div className={styles.inner}>
                <div className="text-[38px] font-medium text-center">Don't want to be the next victim of <span className="text-primary">Title Fraud?</span></div>
                <div className={styles.line}></div>
                <div className="mt-[24px] text-gray-100 text-body2 text-center leading-[150%] font-normal">
                    Time to register and protect your most valuable asset- your Home and family. Registration is simple and secure and our technology will identify and register your property in minutes.
                </div>
                <a href="#" className={styles.button}>
                    <img src='/logo-icon.png' className="w-[25px] h-[26px] mr-[10px]" alt="logo" />I want to be protected
                </a>
            </div>
        </div>
    )
}

export default TitleFraud;