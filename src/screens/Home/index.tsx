import React from 'react';
import style from './home.module.scss';
import Slider from '@/components/Slider';
import ProductList from '@/components/ProductList';

const Home = () => {
  return (
    <>
      <Slider />
      <div className="container">
        <ProductList title={'Nails'} />
        <ProductList title={'Nails Box'} />
        <ProductList title={'Shop'} />
      </div>
    </>
  );
};

export default Home;
