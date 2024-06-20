import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalSelectedItemsQuantity } from '../../pages/cart/cart-slice';
import { filterMenuItems } from '../../pages/menu/menu-slice';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const selectedItemsQuantity = useSelector(getTotalSelectedItemsQuantity);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedOrigin, setSelectedOrigin] = useState('');

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
    filterItems(event.target.value, selectedOrigin);
  };

  const handleOriginChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOrigin(event.target.value);
    filterItems(selectedCategory, event.target.value);
  };

  const filterItems = (category: string, origin: string) => {
    dispatch(filterMenuItems({ category: category, origin: origin }));
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="logo">
          <span>Restaurante</span>
          <br />
          <span>do</span>
          <br />
          <span>Pedrinho</span>
          <br />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav" style={{ margin: '0 10px' }}>
            <li className="nav-item dropdown">
              <select className="form-select" onChange={handleCategoryChange}>
                <option value="" selected>
                  Categorias
                </option>
                <option value="Bebida">Bebidas</option>
                <option value="Entrada">Entradas</option>
                <option value="Prato Principal">Pratos Principais</option>
                <option value="Sobremesa">Sobremesa</option>
              </select>
            </li>
          </ul>
          <ul className="navbar-nav" style={{ margin: '0 10px' }}>
            <li className="nav-item dropdown">
              <select className="form-select" onChange={handleOriginChange}>
                <option value="" selected>
                  Origens típicas
                </option>
                <option value="Brasileira">Brasileiras</option>
                <option value="Italiana">Italianas</option>
                <option value="Japonesa">Japonesas</option>
                <option value="Portuguesa">Portuguesas</option>
              </select>
            </li>
          </ul>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/cart" className="btn position-relative">
                <FontAwesomeIcon icon={faShoppingCart} />
                {selectedItemsQuantity > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                    <span className="badge ml-1">{selectedItemsQuantity}</span>
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
