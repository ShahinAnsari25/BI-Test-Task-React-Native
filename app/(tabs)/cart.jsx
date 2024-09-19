import { Text, View, StyleSheet } from "react-native"
import CartList from "../../components/cart/cartList";
import Total from "../../components/cart/total";
import { ScrollView } from "react-native";
import { useSelector } from 'react-redux';
const Cart = () => {
   const cartItems = useSelector((state) => state.cart.cartItems);
   if (cartItems.length === 0) {
      return <Text style={styles.text}>No items in your cart.</Text>
   }
   return <ScrollView>
      {/* cart list */}
      <CartList></CartList>
      {/* total */}
      <Total></Total>
   </ScrollView>
}
export default Cart;
const styles = StyleSheet.create({
   text: {
      fontFmily: 'outfit-medium',
      fontSize: 18,
      padding: 10
   }
})