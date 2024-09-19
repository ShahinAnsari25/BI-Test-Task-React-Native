// src/store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   cartItems: [], // Array of items in the cart
   totalQuantity: 0, // Total number of items
   totalAmount: 0,   // Total price of all items
};

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      // Add item to the cart
      addItemToCart: (state, action) => {
         const newItem = action.payload;
         const existingItem = state.cartItems.find((item) => item.id === newItem.id);

         if (existingItem) {
            existingItem.quantity += 1;
            existingItem.totalPrice += newItem.price;
         } else {
            state.cartItems.push({
               id: newItem.id,
               title: newItem.title,
               price: newItem.price,
               quantity: newItem.quantity,
               totalPrice: newItem.price * newItem.quantity,
               thumbnail: newItem.thumbnail,
            });
         }
         state.totalQuantity += 1;
         state.totalAmount += newItem.price * newItem.quantity;
      },

      // Remove item from the cart
      removeItemFromCart: (state, action) => {
         const id = action.payload;
         const existingItem = state.cartItems.find((item) => item.id === id);

         if (existingItem) {
            state.totalQuantity -= existingItem.quantity;
            state.totalAmount -= existingItem.totalPrice;
            state.cartItems = state.cartItems.filter((item) => item.id !== id);
         }
      },

      // Update the quantity of an item
      updateItemQuantity: (state, action) => {
         const { id, quantity } = action.payload;
         const existingItem = state.cartItems.find((item) => item.id === id);

         if (existingItem) {
            const quantityDifference = quantity - existingItem.quantity;
            existingItem.quantity = quantity;
            existingItem.totalPrice = existingItem.price * quantity;
            state.totalQuantity += quantityDifference;
            state.totalAmount += existingItem.price * quantityDifference;
         }
      },

      // Clear all items from the cart
      clearCart: (state) => {
         state.cartItems = [];
         state.totalQuantity = 0;
         state.totalAmount = 0;
      },
   },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
