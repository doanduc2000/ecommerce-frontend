import React from 'react';
import Logo from '../Logo';
import style from './header.module.scss';
import Image from 'next/image';
import searchIcon from '@public/icons/search.svg';
const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.box}>
          <Logo style={{ fontSize: 23 }} fontSizeLarge={{ fontSize: 36 }} />
          <ul>
            <li>
              <a href="#">Nails</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Course</a>
            </li>
          </ul>
          <div className={style.search}>
            <input type="text" placeholder="Search" />
            <button>
              <Image src={searchIcon} alt="search" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
