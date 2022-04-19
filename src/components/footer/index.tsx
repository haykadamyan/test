import React, { memo } from 'react';
import styles from './styles.module.scss';

type FooterProps = {};

const navigation = [
  {
    label: 'Company',
    items: [
      {
        id: 1,
        label: 'About',
        href: '/',
      },
      {
        id:2,
        label: 'Careers',
        href: '/careers',
      },
      {
        id: 3,
        label: 'Press',
        href: '/press',
      },
      {
        id: 4,
        label: 'Blog',
        href: '/blog',
      },
      {
        id: 5,
        label: 'Partnerships',
        href: '/partnerships',
      },
    ]
  },
  {
    label: 'Useful Links',
    items: [
      {
        id: 1,
        label: "FAQ's",
        href: '/faq',
      },
      {
        id: 2,
        label: 'Contact Us',
        href: '/contact-us',
      },
      {
        id: 3,
        label: 'How it Works',
        href: '/how-it-works',
      }
    ]
  },
  {
    label: 'Legacy',
    items: [
      {
        id: 1,
        label: 'Privacy',
        href: '/privacy',
      },
      {
        id: 2,
        label: 'Terms',
        href: '/terms',
      },
      {
        id: 3,
        label: 'Cookies',
        href: '/cookies',
      }
    ]
  },
  {
    label: 'Mobile',
    items: [
      {
        id: 1,
        label: 'Android',
      },
      {
        id: 2,
        label: 'IOS',
      },
    ]
  }
]

function Footer(props: FooterProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles['inner-wrapper']}>
        <img src="/logo.svg" alt="logo" />
        <hr />
        <div className={styles.nav}>
          {navigation.map(section => (
            <div className={styles['section']}>
              <h6 className={styles['section-title']}>
                {section.label}
              </h6>
              <nav>
                {section.items.map(item => (
                  <a
                    key={item.id}
                    className={styles['nav-item']}
                    href={item.href}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(Footer);
