import React from 'react';
import style from './productDetail.module.scss';
import productDemo from '@public/images/nails-demo.jpg';
import Image from 'next/image';
import { formatCurrency } from '@/utils/help';
import ProductList from '@/components/ProductList';

const ProductDetail = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="container">
      <div className={style.productDetail}>
        <div className={style.picture}>
          <Image width={1200} height={1200} src={productDemo} alt="" />
        </div>
        <div className={style.info}>
          <h2 className={style.title}>Mẫu 1</h2>
          <span className={style.desc}>Nails</span>
          <span className={style.price}>{formatCurrency(100000)}</span>
          <div className={style.control}>
            <button className={style.cart}>Thêm vào giỏ hàng</button>
            <button className={style.regist}>Đặt lịch ngay</button>
          </div>
        </div>
      </div>
      <ProductList title={'Gợi ý'} />
    </div>
  );
};

export default ProductDetail;
