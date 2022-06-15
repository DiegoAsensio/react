import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import MyNavBar from './components/NavBar/MyNavBar';
import NavBar from './components/NavBar/NavBar.css';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home';
import Contacto from './components/Pages/Contacto';

function App() {

  const onAdd = (count) =>{
    alert (`sumaste ${count} productos`)
  }

  return (
    <>
    <BrowserRouter>
    <MyNavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:category" element={<Home />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/detail/:id" element={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}
/* */
export default App;
