import { createSlice } from "@reduxjs/toolkit";
import { rootInitialState } from "./initialState";

export const rootSlice = createSlice({
  name: "root",
  initialState: rootInitialState,
  reducers: {
    handleIncrementProduct(state, action) {
      state.favorites.map((product) => {
        if (product.id == action.payload.idProduct) {
          product.quantity = action.payload.quantity + 1;
        }
      });
    },
    handleDecrementProduct(state, action) {
      state.favorites.map((product) => {
        if (product.id == action.payload.idProduct) {
          product.quantity = action.payload.quantity - 1;
        }
      });
    },
    handleAddProduct(state, action) {
      state.favorites.push(action.payload);
    },
    handleResetFavorites(state, action) {
      state.favorites = [];
    },
    handleSetProducts(state, action) {
      state.inventory = action.payload;
    },
    handleRemoveProduct(state, action) {
      let data = state.favorites.filter(
        (value, index) => action.payload != index && value
      );
      state.favorites = data;
    },
  },
});
