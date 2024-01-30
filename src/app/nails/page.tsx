import { getProducts } from '@/apis/product';
import Products from '@/screens/Products';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Danh sách sản phẩm',
  description: 'Danh sách sản phẩm',
};

const Page = async () => {
  const products = await getProducts();
  return <Products data={products.data} />;
};

export default Page;
