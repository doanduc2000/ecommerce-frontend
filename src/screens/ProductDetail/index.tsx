'use client';
import React from 'react';
import style from './productDetail.module.scss';
import productDemo from '@public/images/nails-demo.jpg';
import Image from 'next/image';
import { formatCurrency } from '@/utils/help';
import ProductList from '@/components/ProductList';
import { useCart } from '@/contexts/CartContext';

const ProductDetail = ({ params }: { params: { slug: string } }) => {
  const { addToCart } = useCart();
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
            <button
              className={style.cart}
              onClick={() => {
                addToCart({ id: params.slug, name: 'Mẫu: ' + params.slug });
              }}
            >
              Thêm vào giỏ hàng
            </button>
            <button className={style.regist}>Đặt lịch ngay</button>
          </div>
          <p>
            Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in
            ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một
            họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này không
            những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị thay
            đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán những bản giấy Letraset in những đoạn Lorem
            Ipsum, và gần đây hơn, được sử dụng trong các ứng dụng dàn trang, như Aldus PageMaker.
          </p>
        </div>
      </div>
      <ProductList title={'Gợi ý'} />
    </div>
  );
};

export default ProductDetail;
