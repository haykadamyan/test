import { FunctionComponent } from 'react';

import styles from './styles.module.scss';

type HeaderProps = {};

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles['logo-wrapper']}>
        <img src="/logo.svg" alt="logo" />  
      </div> 
    </header>
  )
}

export default Header;