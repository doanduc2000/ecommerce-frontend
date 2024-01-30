import React from 'react';
import style from './products.module.scss';
import nailDemo from '@public/images/nails-demo.jpg';

import dynamic from 'next/dynamic';
import Filter from '@/components/Filter';
import { Product } from '@/models/product';

const ProductCard = dynamic(() => import('@/components/ProductCard'));

const Products = ({ data }: { data: Product[] }) => {
  return (
    <div className={style.products}>
      <div className="container">
        <div className={style.header}>
          <h2 className={style.title}>Products ({data.length || '--'})</h2>
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
