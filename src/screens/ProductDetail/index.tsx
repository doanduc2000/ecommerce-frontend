import React from 'react';

const ProductDetail = ({ params }: { params: { slug: string } }) => {
  console.log(params.slug);
  return <div>ProductDetail</div>;
};

export default ProductDetail;
