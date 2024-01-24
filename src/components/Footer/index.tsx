'use client';
import React from 'react';
import style from './footer.module.scss';
import logo from '@public/logo-white.png';
import fb from '@public/icons/facebook.svg';
import instagram from '@public/icons/instagram.svg';
import tiktok from '@public/icons/tiktok.svg';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.box}>
          <div className={style.img}>
            <Image width={685} height={498} src={logo} alt="logo" />
          </div>
          <div className={style.social}>
            <div className={style.contact}>Contact</div>
            <ul>
              <li>
                <span>
                  <Image src={fb} alt="" />
                </span>
                <a href="" target="_blank">
                  Thu Trang
                </a>
              </li>
              <li>
                <span>
                  <Image src={tiktok} alt="" />
                </span>
                <a href="" target="_blank">
                  Thu Trang
                </a>
              </li>
              <li>
                <span>
                  <Image src={instagram} alt="" />
                </span>
                <a href="" target="_blank">
                  Thu Trang
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.copyright}>
          <p>© 2024 Gạo Nail & Style, Inc. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
