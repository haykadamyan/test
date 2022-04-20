import { FunctionComponent, useEffect, useState } from 'react';

import { SearchIcon, XCircleIcon } from '@heroicons/react/solid'

import styles from './styles.module.scss';

type FindAddressProps = {
  onSearch: (val: string) => string[];
};

const FindAddress: FunctionComponent<FindAddressProps> = ({ onSearch }) => {
  const [search, setSearch] = useState<string>('')
  const [addresses, setAddresses] = useState<string[]>([]);

  const onClear = () => {
    setSearch('');
  }

  useEffect(() => {
    if (search === '') {
      setAddresses([])
    } else {
      const newAddresses = onSearch(search);
      setAddresses(newAddresses)
    }
  }, [search])


  return (
    <section className={styles.wrapper} id="home">
      <div className={styles['inner-wrapper']}>
        <h2 className={styles.heading}>
          Enter your address to find out if
          your property is at risk from fraud
        </h2>
        <div className={`${styles['search-wrapper']} ${addresses[0] ?  styles.filled : ''}`}>
          <div className={styles.input}>
            <label htmlFor="search">
              <SearchIcon className={styles.icon} />
            </label>
            <input
              type="text"
              name='search'
              id='search'
              placeholder='Start typing your address....'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <XCircleIcon
                className={styles.clear}
                onClick={() => onClear()}
              />
            )}
          </div>
          {addresses[0] && (
            <div className={styles.addresses}>
              {addresses.map((i, index) => (
                <div key={index} dangerouslySetInnerHTML={{
                  __html: i.replaceAll(search, `<span>${search}</span>`)
                }} />
              ))}
            </div>
          )}
        </div>
        <div className={styles.partners}>
          <img src="/company-1.svg" alt="com1" />
          <img src="/company-2.svg" alt="com2" />
          <img src="/company-3.svg" alt="com3" />
        </div>
        <button className={styles.download}>
          <img src="/apple.svg" alt="apple-logo" />
          Download Our App
        </button>
        <div className={styles.bottom}>
          <p className={styles.text}>
            The level of fraud in the UK is such that it is a <span className={styles.solid}>National Security</span> threat
          </p>
          <p className={styles['small-text']}>* UK Finance half year fraud update 2021​</p>
        </div>
      </div>
    </section>
  )
}

export default FindAddress;