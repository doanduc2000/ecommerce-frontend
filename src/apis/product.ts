import { API_URL } from '@/utils/help';

export const getProducts = async () => {
  const res = await fetch(`${API_URL}/product`);
  const data = await res.json();
  return data;
};
export const getProductById = async (id: string) => {
  const res = await fetch(`${API_URL}/product/${id}`);
  const data = await res.json();
  return data;
};
