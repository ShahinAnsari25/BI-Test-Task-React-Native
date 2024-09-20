import { View, Text, StyleSheet } from "react-native"
import Colors from "../../constants/Colors"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react"
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const Header = () => {
   const [email, setEmail] = useState("")
   useEffect(() => {
      const checkLoggedIn = async () => {
         const currentuser = await AsyncStorage.getItem('userEmail');
         setEmail(currentuser)
      };
      checkLoggedIn()
   }, [])
   return <View style={styles.container}>
      <View style={{ width: width * 0.7, }}>
         <Text style={styles.text}>{email}</Text>
      </View>
      <View style={styles.profile}>
         <Text style={styles.profileText}>{email ? email.charAt(0).toUpperCase() : ''}</Text>
      </View>

   </View>
}
export default Header;
const styles = StyleSheet.create({
   text: {
      fontFamily: 'outfit-medium',
      fontSize: 25,
      flexWrap: 'wrap',
   },
   container: {
      padding: 20,
      paddingTop: 40,
      paddingBottom: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
   },
   profile: {
      backgroundColor: Colors.PRIMARY,
      borderRadius: 99,
      height: 40,
      width: 40,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
   },
   profileText: {
      color: Colors.WHITE,
      fontFamily: 'outfit-medium',
      fontSize: 20
   }
})