import React from 'react';
import style from './products.module.scss';
import nailDemo from '@public/images/nails-demo.jpg';

import dynamic from 'next/dynamic';
import Filter from '@/components/Filter';

const data = [
  { id: '1', name: 'Mẫu 1', img: nailDemo, price: 100000, category: 'Nails' },
  { id: '2', name: 'Mẫu 2', img: nailDemo, price: 200000, category: 'Nails Box' },
  { id: '3', name: 'Mẫu 3', img: nailDemo, price: 100000, category: 'Nails' },
  { id: '4', name: 'Mẫu 4', img: nailDemo, price: 140000, category: 'Nails Box' },
  { id: '5', name: 'Mẫu 5', img: nailDemo, price: 120000, category: 'Nails' },
  { id: '6', name: 'Mẫu 6', img: nailDemo, price: 130000, category: 'Nails' },
  { id: '7', name: 'Mẫu 7', img: nailDemo, price: 100000, category: 'Nails Box' },
  { id: '8', name: 'Mẫu 8', img: nailDemo, price: 150000, category: 'Nails' },
  { id: '9', name: 'Mẫu 9', img: nailDemo, price: 100000, category: 'Nails Box' },
  { id: '10', name: 'Mẫu 10', img: nailDemo, price: 100000, category: 'Nails' },
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
              <ProductCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
