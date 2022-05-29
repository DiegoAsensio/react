import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import MyNavBar from './components/MyNavBar';

function App() {
  return (
    <>
    <MyNavBar /> 
    <ItemListContainer nombre={'Rodrigo'} amenaza={'mas vale que me apruebes jajaja'} />
    </>
  );
}

export default App;
