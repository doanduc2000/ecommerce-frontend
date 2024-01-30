import { getProducts } from '@/apis/product';
import Home from '@/screens/Home';
const Page = async () => {
  const products: any = await getProducts();
  return <Home products={products.data} />;
};
export default Page;
