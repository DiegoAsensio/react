import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomCartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/footer/Footer.jsx';
import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy loading de componentes
const Home = lazy(() => import('./components/Pages/Home'));
const ItemDetailContainer = lazy(() => import('./components/ItemDetailContainer.jsx'));
const Cart = lazy(() => import('./components/Cart/Cart'));
const Checkout = lazy(() => import('./components/Checkout/Checkout'));
const About = lazy(() => import('./components/About/About'));

function App() {
  return (
    <div className="App">
      <CustomCartProvider>
        <BrowserRouter>
          <Header />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:id" element={<Home />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </Suspense>
          <Footer />
        </BrowserRouter>
      </CustomCartProvider>
    </div>
  );
}

export default App;