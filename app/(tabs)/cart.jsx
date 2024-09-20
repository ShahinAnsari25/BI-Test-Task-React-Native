import { Text, View, StyleSheet } from "react-native"
import CartList from "../../components/cart/cartList";
import Total from "../../components/cart/total";
import { ScrollView } from "react-native";
import { useSelector } from 'react-redux';
import { Dimensions } from 'react-native';
import { useEffect } from "react";
const { width, height } = Dimensions.get('window');
const Cart = () => {
   const cartItems = useSelector((state) => state.cart.cartItems);
   if (cartItems.length === 0) {
      return <Text style={styles.text}>No items in your cart.</Text>
   }
   return <View>
      {/* cart list */}
      <View style={styles.listContainer}><CartList></CartList></View>
      {/* total */}
      <Total></Total>
   </View>
}
export default Cart;
const styles = StyleSheet.create({
   text: {
      fontFmily: 'outfit-medium',
      fontSize: 18,
      padding: 10
   },
   listContainer: {
      height: height * 0.64,
      marginBottom: 20
   }
})