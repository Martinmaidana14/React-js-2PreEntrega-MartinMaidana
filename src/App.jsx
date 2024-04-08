
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemCount } from './components/ItemCount.jsx'

import { NavBar } from "./components/NavBar";



function App() {

  return (
    <>
    <BrowserRouter>

      <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>

        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)} />

    </BrowserRouter>
    </>
  );
}

export default App;





//import { Input } from './components/NavBar'
/*
//Definicion de componente
const Input = () => {
  return <input type="number" />
};
*/