'use client';
import React from 'react';
import style from './header.module.scss';
import Image from 'next/image';

import logo from '@public/logo.png';
import { usePathname } from 'next/navigation';
import Cart from '../Cart';
import Link from 'next/link';

const pageMenu = [{ name: 'Sản phẩm', url: '/nails' }];
const Header = () => {
  const pathName = usePathname();

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.box}>
          <Link href="/" className={style.logo}>
            <h1>
              <Image width={400} height={291} src={logo} priority={true} alt="" />
            </h1>
          </Link>
          <div className={style.right}>
            <ul>
              {pageMenu.map((item) => (
                <li key={item.url} className={item.url === `/${pathName.split('/')[1]}` ? style.active : ''}>
                  <Link href={item.url}>{item.name}</Link>
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
