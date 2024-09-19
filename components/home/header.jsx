import { View, Text, StyleSheet } from "react-native"
import Colors from "../../constants/Colors"
const Header = () => {
   return <View style={styles.container}>
      <View>
         <Text style={styles.text}>Shahin@gmail.com</Text>
      </View>
      <View style={styles.profile}>
         <Text style={styles.profileText}>S</Text>
      </View>

   </View>
}
export default Header;
const styles = StyleSheet.create({
   text: {
      fontFamily: 'outfit-medium',
      fontSize: 25
   },
   container: {
      paddingTop: 30,
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