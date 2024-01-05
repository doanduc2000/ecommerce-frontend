import React from 'react';
import style from './home.module.scss';
import Slider from '@/components/Slider';

const Home = () => {
  return (
    <div className={style.main}>
      <div className={style.slide}>
        <Slider />
      </div>
    </div>
  );
};

export default Home;
