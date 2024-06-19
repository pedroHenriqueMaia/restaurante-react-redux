// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './pages/menu/menu-slice';
import cartReducer from './pages/cart/cart-slice';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
