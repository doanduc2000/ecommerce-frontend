'use client';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import style from './filter.module.scss';
import filterIcon from '@public/icons/filter.svg';
const filterData = [
  { name: 'Tất cả', value: '' },
  { name: 'Nails', value: 'nails' },
  { name: 'Nails Box', value: 'nails-box' },
];
const Filter = () => {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const handleFilter = (value: string) => {
    setFilter(value);
    setOpen(false);
  };
  const ref = useRef(null);
  return (
    <div className={style.filter} ref={ref}>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        {filterData.find((item) => item.value === filter)?.name}
        <Image width={30} height={30} src={filterIcon} alt="" />
      </button>
      {open && (
        <ul>
          {filterData.map((item) => (
            <li
              onClick={() => {
                handleFilter(item.value);
              }}
              key={item.value}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
