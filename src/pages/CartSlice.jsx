import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) item.quantity++;
      else state.items.push({ ...action.payload, quantity: 1 });
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },

    updateQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) item.quantity = action.payload.quantity;
    }
  }
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;