import React from 'react';

import styles from './styles.module.scss';


function HowItWorks() {
    return (
        <div className={styles['how-it-works']}>
            <div className={styles.inner}>
                <div className={styles.background}></div>
                <div className={styles.wrapper}>
                    <div className={styles.video}>
                        <img src="/how.png" className="lg:w-[447px] xs:w-[326px]" alt=""/>
                        <a href="#">
                            <img src="/play.png" alt="" className={styles.play}/>
                        </a>
                    </div>
                    <div className={styles.content}>
                        <div className="text-[38px] font-medium text-white">How it Works</div>
                        <div className={styles.line}></div>
                        <div className="text-white font-normal text-body2 leading-[150%] md:text-center xs:text-[14px]">
                            Your home and family is your most valuable asset. Protecting them is now  simple and secure with Title Guardian. Our technology will detect any attempt to hijack or tamper with your homes title deeds, giving you peace of mind.
                        </div>
                        <div className="text-white font-normal text-body2 leading-[150%] mt-[40px] md:text-center xs:text-[14px]">
                            Please take the time to watch our short video to learn more about the risks in todays environment.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks