import { View, Text, StyleSheet } from "react-native"
import Colors from "../../constants/Colors"
const Header = () => {
   return <View style={styles.container}>
      <View>
         <Text style={styles.text}>Shahin@gmail.com</Text>
      </View>
      {/* <Text style={styles.profile}>S</Text> */}
   </View>
}
export default Header;
const styles = StyleSheet.create({
   text: {
      color: Colors.GRAY,
      fontFamily: 'outfit-medium',
      fontSize: 25
   },
   container: {
      paddingTop: 30
   }
   // profile: {
   //    backgroundColor: Colors.SECONDARY,
   //    borderRadius: 99,
   //    padding: 20,
   //    width: 'fit-content'
   // }
})