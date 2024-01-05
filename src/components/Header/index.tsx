import React from 'react';

import style from './header.module.scss';
import Image from 'next/image';
import searchIcon from '@public/icons/search.svg';
import logo from '@public/logo.png';

const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.box}>
          <div className={style.logo}>
            <Image width={400} height={291} src={logo} priority={true} alt="" />
          </div>
          <div className={style.right}>
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
      </div>
    </header>
  );
};

export default Header;
