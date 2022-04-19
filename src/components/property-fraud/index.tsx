import { FunctionComponent } from 'react';

import styles from './styles.module.scss';

const PropertyFraud: FunctionComponent = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles['inner-wrapper']}>
        <h2><span>Victims</span>Victims of Property Fraud​</h2>
      </div>
    </section>
  )
}

export default PropertyFraud;
