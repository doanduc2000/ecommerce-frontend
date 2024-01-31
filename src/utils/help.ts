import slugify from 'slugify';
export const API_URL: string = 'http://127.0.0.1:5000/api';
export const formatCurrency = (amount: number) => {
  return amount.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
};
export const convertToSlug = (str: string) => {
  if (typeof str !== 'string') return str;
  return slugify(str, { replacement: '-', lower: true, locale: 'vi' });
};
export const getIdFromSlug = (str: string) => {
  if (typeof str !== 'string') return str;
  return str.split('-')[str.split('-').length - 1].split('.')[0];
};
