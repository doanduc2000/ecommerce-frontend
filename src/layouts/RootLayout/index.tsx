import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { CartProvider } from '@/contexts/CartContext';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <html lang="en">
        <body className={roboto.className}>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </CartProvider>
  );
}
