import ProductDetail from '@/screens/ProductDetail';
const page = async ({ params }: { params: { slug: string } }) => {
  return <ProductDetail params={params} />;
};
export default page;
