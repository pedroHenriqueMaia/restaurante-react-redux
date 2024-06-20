// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuPage from './pages/menu/menu-page';
import CartPage from './pages/cart/cart-page';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/navbar/navbar';
import './App.css';
import Footer from './components/footer/footer';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
