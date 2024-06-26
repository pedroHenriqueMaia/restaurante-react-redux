import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IResponseMenu } from '../../models/response/menu';
import { getAllItems } from '../../fakeServer/mock-request';
import { MenuState } from '../../models/slices/menu-state';

const initialState: MenuState = {
  items: [],
  itemsBKP: [],
  status: 'idle',
  error: null,
};

export const fetchMenuItems = createAsyncThunk<
  IResponseMenu[],
  void,
  { rejectValue: string }
>('', async (_, thunkAPI) => {
  try {
    const response = (await getAllItems()) as IResponseMenu[];
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed to fetch menu items');
  }
});

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    filterMenuItems: (
      state,
      action: PayloadAction<{ category: string; origin: string }>
    ) => {
      state.items = state.itemsBKP;
      const filteredItems = [...state.items].filter(
        (item) =>
          (action.payload.category
            ? item.category === action.payload.category
            : true) &&
          (action.payload.origin ? item.origin === action.payload.origin : true)
      );

      state.items = [...filteredItems];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenuItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        fetchMenuItems.fulfilled,
        (state, action: PayloadAction<IResponseMenu[]>) => {
          state.status = 'succeeded';
          state.items = action.payload;
          state.itemsBKP = action.payload;
        }
      )
      .addCase(fetchMenuItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch menu items';
      });
  },
});

export const selectMenuItems = (state: RootState) => state.menu.items;
export const selectMenuStatus = (state: RootState) => state.menu.status;
export const selectMenuError = (state: RootState) => state.menu.error;
export const { filterMenuItems } = menuSlice.actions;

export default menuSlice.reducer;
