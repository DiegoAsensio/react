import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import MyNavBar from './components/NavBar/MyNavBar';
import NavBar from './components/NavBar/NavBar.css';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home';
import Cart from './components/Cart';
import { CustomCartProvider } from './context/CartContext';
import { initializeApp } from "firebase/app";
import Checkout from './components/Checkout';
import Footer from './components/footer/Footer.jsx';
import About from './components/About/About';


function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCwu06GZ84FPeA0Yu1P2dA2l-mrFoTc7tI",
    authDomain: "e-commerce-asensio.firebaseapp.com",
    projectId: "e-commerce-asensio",
    storageBucket: "e-commerce-asensio.appspot.com",
    messagingSenderId: "417569453099",
    appId: "1:417569453099:web:98df752d3c6092a540e66e"
  };
  
initializeApp(firebaseConfig);


  return (
    <>
    <CustomCartProvider>
    <BrowserRouter>
    <MyNavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:id" element={<Home />} />
      <Route path="/detail/:id" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<Cart/>} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </CustomCartProvider>
    </>
  );
};
export default App;
