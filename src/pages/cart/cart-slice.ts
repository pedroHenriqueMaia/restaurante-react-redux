import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IResponseMenu } from '../../models/response/menu';
import './styles.css';
import { CartState } from '../../models/slices/cart-state';

const initialState: CartState = {
  items: [],
  selectedTotal: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<IResponseMenu>) => {
      const itemMenu = action.payload;
      const existingItem = state.items.find((item) => item.id === itemMenu.id);
      if (existingItem) {
        existingItem.quantity === undefined
          ? (existingItem.quantity = 2)
          : (existingItem.quantity += 1);
      } else {
        const itemSave = { ...itemMenu, quantity: 1 };
        state.items.push(itemSave);
      }

      const selectedItems = state.items.filter((item) =>
        state.items.includes(item)
      );
      const totalQuantity = selectedItems.reduce((accumulator, currentItem) => {
        return accumulator + (currentItem.quantity || 0);
      }, 0);
      state.selectedTotal = totalQuantity;
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items
        .map((item) => {
          if (item.id !== action.payload) {
            return item;
          } else {
            if (item.quantity && item.quantity > 1) {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            } else {
              return null;
            }
          }
        })
        .filter(Boolean) as IResponseMenu[];
      const selectedItems = state.items.filter((item) =>
        state.items.includes(item)
      );
      const totalQuantity = selectedItems.reduce((accumulator, currentItem) => {
        return accumulator + (currentItem.quantity || 0);
      }, 0);
      state.selectedTotal = totalQuantity;
    },
    clearCart: (state) => {
      state.items = [];
      state.selectedTotal = 0;
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } =
  cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * (item.quantity || 0),
    0
  );
export const getTotalSelectedItemsQuantity = (state: RootState) =>
  state.cart.selectedTotal;

export default cartSlice.reducer;
