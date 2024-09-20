import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native"
import Colors from "../../constants/Colors";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart, updateItemQuantity, clearCart } from '../../reduxStore/cartSlice.js';
import { useState } from "react";

const CartItem = ({ item }) => {
   const dispatch = useDispatch()
   const handleRemoveItem = () => {
      dispatch(removeItemFromCart(item.id));
   };
   const [quantity, setQuantity] = useState(item.quantity.toString());

   const handleQuantityChange = (text) => {
      const numericValue = parseInt(text, 10);
      if (!isNaN(numericValue)) {
         setQuantity(numericValue);
         dispatch(updateItemQuantity({ "id": item.id, "quantity": numericValue }));
      } else {

      }

   };
   const handleUpdateQuantity = () => {

   };

   return <View style={styles.container}>
      <View style={styles.imageContainer}>
         <Image style={styles.image} source={{ uri: item?.thumbnail }}></Image>
         <Text style={styles.title}>{item.title}</Text>
      </View>
      <TextInput
         style={styles.input}
         keyboardType="numeric"
         defaultValue={quantity.toString()}
         onChangeText={handleQuantityChange}
      ></TextInput>
      <View style={styles.priceContainer}>
         <FontAwesome name="rupee" size={17} color={Colors.BLACK} />
         <Text style={styles.price}>{item.price}</Text>
      </View>
      <TouchableOpacity onPress={handleRemoveItem}>
         <MaterialIcons name="delete" size={24} color={Colors.ERROR} />
      </TouchableOpacity>

   </View>
}
export default CartItem;
const styles = StyleSheet.create({
   container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: Colors.WHITE,
      padding: 8,
      marginVertical: 5,
      borderRadius: 5,
      alignItems: 'center'
   },
   imageContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      width: "50%"
   },
   image: {
      height: 35,
      width: 35,
      borderRadius: 99
   },
   input: {
      borderWidth: 1,
      borderColor: Colors.GRAY,
      paddingHorizontal: 7,
      height: 20,
      fontSize: 16
   },
   priceContainer: {
      display: 'flex',
      flexDirection: 'row',
      gap: 5,
      alignItems: 'center',
   },
   title: {
      fontFamily: 'outfit-medium',
      fontSize: 15,
      width: "70%"
   },
   price: {
      fontFamily: 'outfit',
      fontSize: 16
   }
})