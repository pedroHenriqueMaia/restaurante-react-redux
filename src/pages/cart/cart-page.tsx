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
    <div>
      <h1>Carrinho de Compras</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => handleAddItem(item)}>Adicionar Item</button>
            <button onClick={() => handleRemoveItem(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <div>Total: ${cartTotal}</div>
      <button onClick={handleClearCart}>Limpar Carrinho</button>
    </div>
  );
};

export default CartPage;
