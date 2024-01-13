import React from 'react';
import style from './products.module.scss';
import nailDemo from '@public/images/nails-demo.jpg';

import dynamic from 'next/dynamic';
import Filter from '@/components/Filter';

const data = [
  { name: 'Mẫu 1', img: nailDemo, price: 100000, category: 'Nails' },
  { name: 'Mẫu 2', img: nailDemo, price: 100000, category: 'Nails' },
  { name: 'Mẫu 3', img: nailDemo, price: 100000, category: 'Nails' },
  { name: 'Mẫu 4', img: nailDemo, price: 100000, category: 'Nails' },
  { name: 'Mẫu 5', img: nailDemo, price: 100000, category: 'Nails' },
  { name: 'Mẫu 1', img: nailDemo, price: 100000, category: 'Nails' },
  { name: 'Mẫu 2', img: nailDemo, price: 100000, category: 'Nails' },
  { name: 'Mẫu 3', img: nailDemo, price: 100000, category: 'Nails' },
  { name: 'Mẫu 4', img: nailDemo, price: 100000, category: 'Nails' },
  { name: 'Mẫu 5', img: nailDemo, price: 100000, category: 'Nails' },
  { name: 'Mẫu 1', img: nailDemo, price: 100000, category: 'Nails' },
  { name: 'Mẫu 2', img: nailDemo, price: 100000, category: 'Nails' },
  { name: 'Mẫu 3', img: nailDemo, price: 100000, category: 'Nails' },
  { name: 'Mẫu 4', img: nailDemo, price: 100000, category: 'Nails' },
  { name: 'Mẫu 5', img: nailDemo, price: 100000, category: 'Nails' },
  { name: 'Mẫu 1', img: nailDemo, price: 100000, category: 'Nails' },
  { name: 'Mẫu 2', img: nailDemo, price: 100000, category: 'Nails' },
  { name: 'Mẫu 3', img: nailDemo, price: 100000, category: 'Nails' },
  { name: 'Mẫu 4', img: nailDemo, price: 100000, category: 'Nails' },
  { name: 'Mẫu 5', img: nailDemo, price: 100000, category: 'Nails' },
  { name: 'Mẫu 1', img: nailDemo, price: 100000, category: 'Nails' },
  { name: 'Mẫu 2', img: nailDemo, price: 100000, category: 'Nails' },
  { name: 'Mẫu 3', img: nailDemo, price: 100000, category: 'Nails' },
  { name: 'Mẫu 4', img: nailDemo, price: 100000, category: 'Nails' },
  { name: 'Mẫu 5', img: nailDemo, price: 100000, category: 'Nails' },
];
const ProductCard = dynamic(() => import('@/components/ProductCard'));
const Products = () => {
  return (
    <div className={style.products}>
      <div className="container">
        <div className={style.header}>
          <h2 className={style.title}>Nails ({data.length})</h2>
          <Filter />
        </div>
        <div className={style.box}>
          {data.map((item, idx) => (
            <div className={style.item} key={`id${idx}`}>
              <ProductCard id={`id${idx}`} {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
