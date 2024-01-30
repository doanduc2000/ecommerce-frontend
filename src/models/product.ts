import { StaticImageData } from 'next/image';

export interface Product {
  _id: string;
  categories: { name: string };
  name: string;
  price: number;
  numberic: number;
  buyNumber: number | 0;
  description: string;
  images: string | StaticImageData;
}
