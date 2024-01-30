'use client';
import React from 'react';
import style from './header.module.scss';
import Image from 'next/image';

import logo from '@public/logo.png';
import { usePathname } from 'next/navigation';
import Cart from '../Cart';

const pageMenu = [
  { name: 'Nails', url: '/nails' },
  { name: 'Shop', url: '/shop' },
  { name: 'Course', url: '/course' },
];
const Header = () => {
  const pathName = usePathname();

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.box}>
          <a href="/" className={style.logo}>
            <h1>
              <Image width={400} height={291} src={logo} priority={true} alt="" />
            </h1>
          </a>
          <div className={style.right}>
            <ul>
              {pageMenu.map((item) => (
                <li key={item.url} className={item.url === `/${pathName.split('/')[1]}` ? style.active : ''}>
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
            </ul>
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
