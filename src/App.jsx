
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Men from './Men';
import Women from './Women';
import Electronics from'./Electronics';
import Cartcontext, { CartContextProvider } from './contexts/CartContext';
import CartPage from './pages/CartPage';
import { useContext } from 'react';

function App() {
const{cart}=useContext(Cartcontext);
  return (
    <div>
      <BrowserRouter>
        <div className="flex gap-2 bg-slate-200 font-semibold">
          <Link className="p-2" to="/men">
            Men
          </Link>
          <Link className="p-2" to="/Women">
            Women
          </Link>
          <Link className="p-2" to="/electronics">
            Electronics
          </Link>
          <Link className="p-2" to="/cart">
            Cart({cart?.length})
          </Link>
        </div>
        <Routes>
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
