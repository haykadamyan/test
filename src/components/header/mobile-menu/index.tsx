import { FunctionComponent } from 'react';
import { XIcon } from '@heroicons/react/solid'

import styles from './styles.module.scss';

type MobileMenuProps = {
  setIsOpen: (v: boolean) => void;
  navigation: {
    id: number | string;
    label: string;
    href: string;
  }[];
  pathname: string;
}

const MobileMenu: FunctionComponent<MobileMenuProps> = ({ setIsOpen, navigation, pathname }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.menu}>
        <button onClick={() => setIsOpen(false)}>
          <XIcon className={styles.close} />
        </button>
        <img src="/logo-colored.svg" alt="logo" />
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
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MobileMenu;
