import { Text, View } from "react-native"
import CartList from "../../components/cart/cartList";
import Total from "../../components/cart/total";
import { ScrollView } from "react-native";
const Cart = () => {
   return <ScrollView>
      {/* cart list */}
      <CartList></CartList>
      {/* total */}
      <Total></Total>
   </ScrollView>
}
export default Cart;