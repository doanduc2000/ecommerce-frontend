import React from 'react';
import style from './home.module.scss';
import Slider from '@/components/Slider';
import ProductList from '@/components/ProductList';
import { Product } from '@/models/product';

const Home = ({ products }: { products: Product[] }) => {
  return (
    <>
      <Slider />
      <div className="container">
        <ProductList title={'Nails'} products={products} />
        <ProductList title={'Nails Box'} products={products} />
      </div>
    </>
  );
};

export default Home;
