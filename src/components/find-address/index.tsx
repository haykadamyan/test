import { FunctionComponent, useState } from 'react';

import { SearchIcon, XCircleIcon } from '@heroicons/react/solid'

import styles from './styles.module.scss';

type FindAddressProps = {};

const FindAddress: FunctionComponent<FindAddressProps> = () => {
  const [search, setSearch] = useState<string>('')
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
          <input
            type="text"
            name='search'
            id='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <XCircleIcon
              className={styles.clear}
              onClick={() => setSearch('')}
            />
          )}
        </div>
        <div className={styles.partners}>
          <img src="/company-1.svg" alt="com1" />
          <img src="/company-2.svg" alt="com2" />
          <img src="/company-3.svg" alt="com3" />
        </div>
        <div className={styles.text}>
          The level of fraud in the UK is such that it is a <span className={styles.solid}>National Security</span> threat
        </div>
        <span className={styles['small-text']}>* UK Finance half year fraud update 2021​</span>
      </div>
    </section>
  )
}

export default FindAddress;