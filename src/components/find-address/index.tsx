import { FunctionComponent } from 'react';

import { SearchIcon } from '@heroicons/react/outline'

import styles from './styles.module.scss';

type FindAddressProps = {};

const FindAddress: FunctionComponent<FindAddressProps> = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles['inner-wrapper']}>
        <h2 className={styles.heading}>
          Enter your address to find out if
          your property is at risk from fraud
        </h2>
        <div className={styles['search-wrapper']}>
          <label htmlFor="search">
            <SearchIcon className={styles.icon} />
          </label>
          <input type="text" name='search' id='search' />
        </div>
      </div>
    </section>
  )
}

export default FindAddress;