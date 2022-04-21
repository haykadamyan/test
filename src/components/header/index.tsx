import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import styles from './styles.module.scss';
import MobileMenu from './mobile-menu';

type HeaderProps = {};

const navigation = [
  {
    id: 1,
    label: 'Home',
    href: '/',
  },
  {
    id:2,
    label: 'Property Fraud',
    href: '#property',
  },
  {
    id: 3,
    label: 'Partners',
    href: '#partners',
  },
  {
    id: 4,
    label: 'FAQ',
    href: '#faq',
  },
  {
    id: 5,
    label: 'Contact',
    href: '#contact',
  },
]

const Header: FunctionComponent<HeaderProps> = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const { pathname, basePath } = useRouter();

  const handleScroll = () => {
    if (window.scrollY > 66) {
      setIsSticky(true);
    } else if (window.scrollY <= 66) {
      setIsSticky(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (
    <>
      {isMenuOpen && (
        <MobileMenu
          setIsOpen={setIsMenuOpen}
          navigation={navigation}
          pathname={pathname}
        />
      )}
      <header className={`${styles.wrapper} ${isSticky ? styles.sticky : ''}`}>
        <div className={styles['inner-wrapper']}>
          <img src={isSticky ? '/logo-colored.svg' : '/logo.svg'} alt="logo" />  
          <nav className={styles.nav}>
            {navigation.map(item => (
              <a
                key={item.id}
                className={`
                  ${styles['nav-item']}
                  ${item.href === pathname ? styles.active : ''}
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
            <button className={styles['menu-icon']} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <img src={isSticky ? '/menu-black.svg' : '/menu-icon.svg'} alt="menu-icon" />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;