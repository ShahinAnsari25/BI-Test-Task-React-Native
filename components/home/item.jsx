import { View, Text, StyleSheet, Image, TextInput, Pressable } from "react-native"
import Colors from "../../constants/Colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart, updateItemQuantity, clearCart } from '../../reduxStore/cartSlice.js';
import { useState } from "react";
const Item = ({ item }) => {
   const [quantity, setQuantity] = useState("1");
   const price = parseFloat(item.price);
   const discount = parseFloat(item.discountPercentage);
   const discountAmount = (discount / 100) * price;
   const finalPriceValue = price - discountAmount;

   const dispatch = useDispatch();

   const handleAddItem = () => {
      dispatch(addItemToCart({
         "id": item.id,
         "title": item.title,
         "thumbnail": item?.thumbnail,
         "price": finalPriceValue.toFixed(2),
         "quantity": parseInt(quantity),
      }));
   };

   return <View style={styles.container}>

      <Image style={styles.image} source={{ uri: item?.thumbnail }}></Image>
      <View style={styles.detailsContainer}>
         <Text style={styles.title}>{item.title}</Text>
         <Text style={styles.discription}>{item.description}</Text>
         <View style={styles.quantityContainer}>
            <View style={styles.inputContainer}><TextInput
               style={styles.input}
               keyboardType="numeric"
               value={quantity}
               onChangeText={(text) => {
                  setQuantity(text);
               }}
            ></TextInput></View>
            <View style={styles.priceContainer}>
               <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <Ionicons name="arrow-down" size={20} color={Colors.DISCOUNT} />
                  <Text style={styles.discount}>{discount}%</Text>
               </View>

               <Text style={styles.price}>{item.price}</Text>
               <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <FontAwesome name="rupee" size={17} color={Colors.BLACK} />
                  <Text style={styles.discountedPrice}>{finalPriceValue.toFixed(2)}</Text>
               </View>

            </View>
         </View>
         <TouchableOpacity style={styles.addToCartButton} onPress={handleAddItem}>
            <Text style={styles.addToCartText}>Add To Cart</Text>
         </TouchableOpacity>
      </View>
   </View>
}
export default Item;
const styles = StyleSheet.create({
   container: {
      borderWidth: 1,
      borderColor: Colors.GRAY,
      borderRadius: 5,
      marginBottom: 20
   },
   image: {
      width: "100%",
      height: 200,
      objectFit: 'cover',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5
   },
   input: {
      borderWidth: 1,
      borderColor: Colors.GRAY,
      borderRadius: 5,
      fontSize: 12,
      padding: 1,
      paddingHorizontal: 7

   },
   inputContainer: {
      width: '30%'
   },
   title: {
      fontFamily: 'outfit-medium',
      fontSize: 17,
   },
   discription: {
      fontFamily: 'outfit',
      fontSize: 15,
   },
   quantityContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5
   },
   priceContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '70%',
      paddingLeft: 10
   },
   discount: {
      color: Colors.DISCOUNT,
      fontFamily: 'outfit',
      fontSize: 16
   },
   price: {
      color: Colors.GRAY,
      fontFamily: 'outfit',
      fontSize: 16,
      textDecorationLine: 'line-through'
   },
   discountedPrice: {
      color: Colors.BLACK,
      fontFamily: 'outfit',
      fontSize: 16
   },
   detailsContainer: {
      padding: 10
   },
   addToCartButton: {
      backgroundColor: Colors.SECONDARY,
      padding: 10,
      borderRadius: 5,
      marginTop: 10
   },
   addToCartText: {
      color: Colors.WHITE,
      fontSize: 15,
      fontFamily: 'outfit-medium',
      textAlign: "center"
   }
})