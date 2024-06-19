import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { getTotalSelectedItemsQuantity, selectCartItems } from '../../pages/cart/cart-slice';


const Navbar = () => {
  const menuItems = useSelector(getTotalSelectedItemsQuantity);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav" style={{ margin: '0 10px' }}>
          <li className="nav-item dropdown">
          <select className="form-select" aria-label="Default select example">
            <option selected>Categorias</option>
            <option value="Bebida">Bebidas</option>
            <option value="Entrada">Entradas</option>
            <option value="Prato Principal">Pratos Principais</option>
            <option value="Sobremesa">Sobremesa</option>
          </select>
          </li>
        </ul>
        <ul className="navbar-nav" style={{ margin: '0 10px' }}>
          <li className="nav-item dropdown">
          <select className="form-select" aria-label="Default select example">
            <option selected>Origens típicas</option>
            <option value="Brasileira">Brasileiras</option>
            <option value="Italiana">Italianas</option>
            <option value="Japonesa">Japonesas</option>
            <option value="Portuguesa">Portuguesas</option>
          </select>
          </li>
        </ul>
      </div>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button type="button" className="btn btn-primary position-relative">
              <FontAwesomeIcon icon={faShoppingCart} />
              {menuItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  <span className="badge badge-primary ml-1">{menuItems}</span>
                </span>
              )}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;