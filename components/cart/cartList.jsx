import { useState } from "react"
import { View, Text, FlatList, StyleSheet } from "react-native"
import CartItem from "./cartItem"
const dataset = [
   {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437071.jpg?t=st=1726753370~exp=1726756970~hmac=ef6c35da12c1faaa581cd0a4037f7a2fda03e58128d90cee2157353cc6a2fe72&w=740",
      "images": [
         null
      ]
   },
   {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437071.jpg?t=st=1726753370~exp=1726756970~hmac=ef6c35da12c1faaa581cd0a4037f7a2fda03e58128d90cee2157353cc6a2fe72&w=740",
      "images": [
         null
      ]
   }, {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437071.jpg?t=st=1726753370~exp=1726756970~hmac=ef6c35da12c1faaa581cd0a4037f7a2fda03e58128d90cee2157353cc6a2fe72&w=740",
      "images": [
         null
      ]
   },
   {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437071.jpg?t=st=1726753370~exp=1726756970~hmac=ef6c35da12c1faaa581cd0a4037f7a2fda03e58128d90cee2157353cc6a2fe72&w=740",
      "images": [
         null
      ]
   }, {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437071.jpg?t=st=1726753370~exp=1726756970~hmac=ef6c35da12c1faaa581cd0a4037f7a2fda03e58128d90cee2157353cc6a2fe72&w=740",
      "images": [
         null
      ]
   },
   {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437071.jpg?t=st=1726753370~exp=1726756970~hmac=ef6c35da12c1faaa581cd0a4037f7a2fda03e58128d90cee2157353cc6a2fe72&w=740",
      "images": [
         null
      ]
   }, {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437071.jpg?t=st=1726753370~exp=1726756970~hmac=ef6c35da12c1faaa581cd0a4037f7a2fda03e58128d90cee2157353cc6a2fe72&w=740",
      "images": [
         null
      ]
   },
   {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437071.jpg?t=st=1726753370~exp=1726756970~hmac=ef6c35da12c1faaa581cd0a4037f7a2fda03e58128d90cee2157353cc6a2fe72&w=740",
      "images": [
         null
      ]
   }, {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437071.jpg?t=st=1726753370~exp=1726756970~hmac=ef6c35da12c1faaa581cd0a4037f7a2fda03e58128d90cee2157353cc6a2fe72&w=740",
      "images": [
         null
      ]
   },
   {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437071.jpg?t=st=1726753370~exp=1726756970~hmac=ef6c35da12c1faaa581cd0a4037f7a2fda03e58128d90cee2157353cc6a2fe72&w=740",
      "images": [
         null
      ]
   }, {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437071.jpg?t=st=1726753370~exp=1726756970~hmac=ef6c35da12c1faaa581cd0a4037f7a2fda03e58128d90cee2157353cc6a2fe72&w=740",
      "images": [
         null
      ]
   },
   {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437071.jpg?t=st=1726753370~exp=1726756970~hmac=ef6c35da12c1faaa581cd0a4037f7a2fda03e58128d90cee2157353cc6a2fe72&w=740",
      "images": [
         null
      ]
   }, {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437071.jpg?t=st=1726753370~exp=1726756970~hmac=ef6c35da12c1faaa581cd0a4037f7a2fda03e58128d90cee2157353cc6a2fe72&w=740",
      "images": [
         null
      ]
   },
   {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437071.jpg?t=st=1726753370~exp=1726756970~hmac=ef6c35da12c1faaa581cd0a4037f7a2fda03e58128d90cee2157353cc6a2fe72&w=740",
      "images": [
         null
      ]
   }, {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437071.jpg?t=st=1726753370~exp=1726756970~hmac=ef6c35da12c1faaa581cd0a4037f7a2fda03e58128d90cee2157353cc6a2fe72&w=740",
      "images": [
         null
      ]
   },
   {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437071.jpg?t=st=1726753370~exp=1726756970~hmac=ef6c35da12c1faaa581cd0a4037f7a2fda03e58128d90cee2157353cc6a2fe72&w=740",
      "images": [
         null
      ]
   }, {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437071.jpg?t=st=1726753370~exp=1726756970~hmac=ef6c35da12c1faaa581cd0a4037f7a2fda03e58128d90cee2157353cc6a2fe72&w=740",
      "images": [
         null
      ]
   },
   {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437071.jpg?t=st=1726753370~exp=1726756970~hmac=ef6c35da12c1faaa581cd0a4037f7a2fda03e58128d90cee2157353cc6a2fe72&w=740",
      "images": [
         null
      ]
   },
]
const CartList = () => {
   const [cartData, setCartData] = useState(dataset)
   return <View>
      <FlatList
         style={styles.container}
         data={cartData}
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