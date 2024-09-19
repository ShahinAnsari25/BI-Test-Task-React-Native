import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from "../../constants/Colors";
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { useRef } from "react";
const CheckOut = () => {
   const scaleAnim = useRef(new Animated.Value(0)).current; // Initial scale value
   const navigation = useNavigation()
   useEffect(() => {
      navigation.setOptions({
         headerTransparent: true,
         headerTitle: ""
      })
      Animated.timing(scaleAnim, {
         toValue: 1, // Target scale
         duration: 800, // Duration of the animation
         useNativeDriver: true, // Use native driver for performance
         easing: Easing.inOut(Easing.ease), // Ease in and out
      }).start(); // Start the animation
   })
   return <View style={styles.container}>
      <Animated.View style={[styles.container2, { transform: [{ scale: scaleAnim }] }]}>
         <Ionicons name="checkmark-done-circle" size={100} color={Colors.DISCOUNT} />
         <Text style={styles.text}>Order placed successfully.</Text>
      </Animated.View>
   </View>
}
export default CheckOut;
const styles = StyleSheet.create({
   container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: height * 0.9
   },
   text: {
      fontFamily: 'outfit-bold',
      color: Colors.DISCOUNT,
      textAlign: 'center',
      fontSize: 20
   },
   container2: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
   }
})