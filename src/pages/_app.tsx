import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from '@/context/cartContext';
import NavigationBar from '@/components/Navbar';
import Footer from '@/components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
        <NavigationBar/>
        <main style={{minHeight:'100vh'}}> <Component {...pageProps} /></main>
        <Footer/>
    </CartProvider>
  );
}

export default MyApp;
