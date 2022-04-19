import React from 'react';

import Image from 'next/image';

import styles from './styles.module.scss';

interface IStepProps {
    icon: string;
    title: string;
    description: string;
}

function Step(props: IStepProps) {
    const {icon, title, description} = props;
    return (
        <div>
            <div className={styles['step-icon']}><Image src={icon} height={30} width={30} /></div>
            <div>{title}</div>
            <div>{description}</div>
        </div>
    )
}

export default Step;