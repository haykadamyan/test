import React from 'react';

import Image from 'next/image';

import classNames from 'classnames';

import styles from './styles.module.scss';

interface IStepProps {
    icon: string;
    title: string;
    description: string;
    number: number;
    isLifted?: boolean;
}

function Step(props: IStepProps) {
    const {icon, title, description, number, isLifted} = props;
    return (
        <div className={classNames(styles.step, styles[`step-numer-${number}`] , {[styles.lifted]: isLifted})}>
            <div className={styles['step-icon']}><Image src={icon} height={30} width={30} /></div>
            <div className={styles['step-title']}>{title}</div>
            <div className={styles['step-description']}>{description}</div>
            <div className={`${styles['step-number']}`}>0{number}</div>
        </div>
    )
}

export default Step;