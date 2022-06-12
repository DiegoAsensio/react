import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import MyNavBar from './components/NavBar/MyNavBar';
import NavBar from './components/NavBar/NavBar.css';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';

function App() {

  const onAdd = (count) =>{
    alert (`sumaste ${count} productos`)
  }

  return (
    <>
    <MyNavBar /> 
    <ItemDetailContainer />
    <ItemCount inicial={1} max={5} onAdd={onAdd} /> 
    </>
  );
}
/* */
export default App;
