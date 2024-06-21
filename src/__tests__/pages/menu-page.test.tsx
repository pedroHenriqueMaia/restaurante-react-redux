import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStore } from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import CardMenu from '../../components/card-menu/card-menu';
import { IResponseMenu } from '../../models/response/menu';
import { RootState } from '../../store';

const mockStore = configureStore<RootState>();

describe('CardMenu Component', () => {
  let store: MockStore<RootState>;

  beforeEach(() => {
    store = mockStore({
      cart: {
        items: [
          {
            id: '3',
            name: 'Item 3',
            price: 20,
            category: 'Bebida',
            description: 'lorem',
            origin: 'Italiana',
          },
          {
            id: '3',
            name: 'Item 3',
            price: 20,
            category: 'Bebida',
            description: 'lorem',
            origin: 'Italiana',
          },
        ],
        selectedTotal: 2,
      },
      menu: {
        items: [
          {
            id: '3',
            name: 'Item 3',
            price: 20,
            category: 'Bebida',
            description: 'lorem',
            origin: 'Italiana',
          },
          {
            id: '3',
            name: 'Item 3',
            price: 20,
            category: 'Bebida',
            description: 'lorem',
            origin: 'Italiana',
          },
        ],
        error: '',
        itemsBKP: [],
        status: 'idle',
      },
    });
  });

  test('renders correctly without selected item in cart', () => {
    const selectedItem: IResponseMenu = {
      id: '3',
      name: 'Item 3',
      price: 20,
      category: 'Bebida',
      description: 'lorem',
      origin: 'Italiana',
    };

    render(
      <Provider store={store}>
        <CardMenu selectedItem={selectedItem} />
      </Provider>
    );

    expect(screen.getByText(/item 3/i)).toBeInTheDocument();
    expect(screen.getByText(/item 3/i)).not.toHaveClass('selected');
  });
});
