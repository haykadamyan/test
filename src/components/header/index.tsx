import { FunctionComponent } from 'react';

import styles from './styles.module.scss';

type HeaderProps = {};

const navigation = [
  {
    id: 1,
    label: 'Home',
    href: '#home',
  },
  {
    id:2,
    label: 'Property Fraud',
    href: '#',
  },
  {
    id: 3,
    label: 'Partners',
    href: '#',
  },
  {
    id: 4,
    label: 'FAQ',
    href: '#',
  },
  {
    id: 5,
    label: 'Contact',
    href: '#',
  },
]

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles['inner-wrapper']}>
        <img src="/logo.svg" alt="logo" />  
        <nav className={styles.nav}>
          {navigation.map(item => (
            <a
              key={item.id}
              className={`
                ${styles['nav-item']}
                ${item.href === '#home' ? styles.active : ''}
              `}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className={styles['header-end']}>
          <button className={`${styles.button} ${styles['sign-in']}`}>Sign in</button>
          <button className={`${styles.button} ${styles.register}`}>Register</button>
          <button className={styles['menu-icon']}>
            <img src="/menu-icon.svg" alt="menu-icon" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;