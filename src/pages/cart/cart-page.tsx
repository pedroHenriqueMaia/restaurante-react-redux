import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
  addItemToCart,
  removeItemFromCart,
  clearCart,
} from './cart-slice';
import { IResponseMenu } from '../../models/response/menu';
import { Link } from 'react-router-dom'; // Certifique-se de que react-router-dom está instalado

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const handleAddItem = (item: IResponseMenu) => {
    dispatch(addItemToCart(item));
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeItemFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container cart-page mt-5">
      {cartItems.length === 0 ? (
        <div>
          <div className="alert alert-info text-center">
            Seu carrinho está vazio.
          </div>
          <div className="text-center mt-3">
            <Link to="/" className="btn btn-link">
              &larr; Voltar ao Cardápio
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table table-borderless table-custom">
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Subtotal</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>{item.quantity}</td>
                    <td>${(item.price * (item.quantity || 0)).toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-primary me-2"
                        onClick={() => handleAddItem(item)}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        -
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <h3 className="h3">Total: ${cartTotal.toFixed(2)}</h3>
            <div>
              <button className="btn clear me-2" onClick={handleClearCart}>
                Limpar Carrinho
              </button>
              <button className="btn buy ">Finalizar Compra</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
