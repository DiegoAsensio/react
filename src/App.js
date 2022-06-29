import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import MyNavBar from './components/NavBar/MyNavBar';
import NavBar from './components/NavBar/NavBar.css';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home';
import Contacto from './components/Pages/Contacto';
import Cart from './components/Cart';
import { CustomCartProvider } from './context/CartContext';
import { initializeApp } from "firebase/app";


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
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/detail/:id" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    </BrowserRouter>
    </CustomCartProvider>
    </>
  );
};
export default App;
