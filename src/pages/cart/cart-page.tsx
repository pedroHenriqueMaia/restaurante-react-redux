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
import Alert from '../../components/alert/alert';

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
          <Alert message="Seu carrinho está vazio." />
          <div className="text-center mt-3">
            <Link to="/" className="btn btn-link">
              &larr; Voltar ao Cardápio
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Produto</th>
                  <th scope="col">Preço</th>
                  <th scope="col">Quantidade</th>
                  <th scope="col">Subtotal</th>
                  <th scope="col">Ações</th>
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
                      <div className="d-flex align-items-center">
                        <button
                          className="btn me-2"
                          onClick={() => handleAddItem(item)}
                        >
                          +
                        </button>
                        <button
                          className="btn"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          -
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <h3>Total: ${cartTotal.toFixed(2)}</h3>
            <div className="d-flex">
              <button className="btn me-2" onClick={handleClearCart}>
                Limpar Carrinho
              </button>
              <button className="btn">Finalizar Compra</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
