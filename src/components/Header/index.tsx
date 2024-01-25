'use client';
import React from 'react';
import style from './header.module.scss';
import Image from 'next/image';
import cartIcon from '@public/icons/cart.svg';
import logo from '@public/logo.png';
import { usePathname, useSearchParams } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';

const pageMenu = [
  { name: 'Nails', url: '/nails' },
  { name: 'Shop', url: '/shop' },
  { name: 'Course', url: '/course' },
];
const Header = () => {
  const pathName = usePathname();
  const { cartState } = useCart();
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

            <button>
              <Image src={cartIcon} alt="search" />
              {cartState.items.length > 0 && <span>{cartState.items.length}</span>}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
