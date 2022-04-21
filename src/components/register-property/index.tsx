import React, { memo } from 'react';

import styles from './styles.module.scss'

function RegisterProperty() {
  return (
    <div className={styles.wrapper}>
      <div className={styles['inner-wrapper']}>
        <div className={styles.content}>
          <div className={styles['icon-wrapper']}>
            <img src="/logo-icon.png" alt="logo-icon" />
          </div>
          <p className={styles.text}>
            Relax and enjoy your time with those you love and take comfort knowing we have you protected
          </p>
          <button className="mt-4 px-8 py-4 rounded-full text-body1 font-medium bg-white/30 text-white">
            Register My Property
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(RegisterProperty);
