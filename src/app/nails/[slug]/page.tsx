import { getProductById } from '@/apis/product';
import ProductDetail from '@/screens/ProductDetail';
import { getIdFromSlug } from '@/utils/help';
import { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params

  const id = getIdFromSlug(params.slug);
  const product = await getProductById(id);
  return {
    title: product?.data.name,
  };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const id = getIdFromSlug(params.slug);
  const product = await getProductById(id);
  return <ProductDetail product={product.data} />;
};
export default Page;
