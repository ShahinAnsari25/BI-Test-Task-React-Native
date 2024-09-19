import { useState } from "react"
import { View, Text, FlatList, StyleSheet } from "react-native"
import CartItem from "./cartItem"
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart, updateItemQuantity, clearCart } from '../../reduxStore/cartSlice.js';
const CartList = () => {
   const cartItems = useSelector((state) => state.cart.cartItems);
   console.log(cartItems);

   // const [cartData, setCartData] = useState(dataset)
   return <View>
      <FlatList
         style={styles.container}
         data={cartItems}
         renderItem={({ item, index }) =>
         (
            <CartItem item={item}></CartItem>
         )
         }
      >
      </FlatList>
   </View>
}
export default CartList;
const styles = StyleSheet.create({
   container: {
      padding: 20
   }
})
