import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../pages/cart/cart-slice';
import { IResponseMenu } from '../../models/response/menu';
import { IPropsCardMenu } from '../../models/utils/props-card-menu';
import { RootState } from '../../store';

const CardMenu: React.FC<IPropsCardMenu> = ({ selectedItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItem = cartItems.find(
    (item: IResponseMenu) => item.id === selectedItem.id
  );
  const initialQuantity = cartItem ? cartItem.quantity : 0;
  const [quantity, setQuantity] = useState(initialQuantity || 0);

  const handleAddToCart = () => {
    dispatch(addItemToCart(selectedItem));
    setQuantity(quantity + 1);
  };

  const handleRemoveFromCart = () => {
    dispatch(removeItemFromCart(selectedItem.id));
    setQuantity(quantity - 1);
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 mb-3 mt-3">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">
            {selectedItem.name} ({selectedItem.category})
          </h5>
          <p className="card-text">{selectedItem.description}</p>
          <div className="row mt-5">
            <p className="col-6">{selectedItem.origin}</p>
            <h5 className="col-6">
              $
              {selectedItem.price.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
              })}
            </h5>
          </div>
        </div>
        <div className="card-footer">
          {quantity === 0 ? (
            <button className="btn" onClick={handleAddToCart}>
              Adicionar ao Carrinho
            </button>
          ) : (
            <div className="d-flex justify-content-center align-items-center">
              <button
                className="btn btn-outline me-2"
                onClick={handleRemoveFromCart}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="btn btn-outline ms-2"
                onClick={handleAddToCart}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardMenu;
