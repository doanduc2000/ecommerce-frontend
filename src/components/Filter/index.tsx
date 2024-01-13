'use client';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import style from './filter.module.scss';
import filterIcon from '@public/icons/filter.svg';
const Filter = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  return (
    <div className={style.filter} ref={ref}>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        Tất cả <Image width={30} height={30} src={filterIcon} alt="" />
      </button>
      {open && (
        <ul>
          <li>Tất cả</li>
          <li>Nails</li>
          <li>Nails Box</li>
        </ul>
      )}
    </div>
  );
};

export default Filter;
