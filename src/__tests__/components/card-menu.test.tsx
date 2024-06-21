import React, { act } from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CardMenu from '../../components/card-menu/card-menu';
import { addItemToCart } from '../../pages/cart/cart-slice';
import '@testing-library/jest-dom/extend-expect';

const initialState = {
  cart: {
    items: [],
  },
};

const mockStore = configureStore([]);
const store = mockStore(initialState);

describe('CardMenu Component', () => {
  const selectedItem = {
    id: '1',
    name: 'Test Item',
    category: 'Test Category',
    description: 'Test Description',
    origin: 'Test Origin',
    price: 10.0,
  };

  it('adds item to cart when add button is clicked', () => {
    act(() => (
      <Provider store={store}>
        <CardMenu selectedItem={selectedItem} />
      </Provider>
    ));

    store.dispatch(addItemToCart(selectedItem));

    const expectedAction = { type: addItemToCart.type, payload: selectedItem };
    expect(store.getActions()).toEqual([expectedAction]);
  });
});
