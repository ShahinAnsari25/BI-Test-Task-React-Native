import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import Colors from "../../constants/Colors";
import FontAwesome from '@expo/vector-icons/FontAwesome';
const Total = () => {
   return <View style={styles.container}>
      <View style={styles.sum}>
         <Text style={styles.total}>Total amount</Text>
         <View style={styles.totalAmount}>
            <FontAwesome name="rupee" size={17} color={Colors.BLACK} />
            <Text style={styles.price}>3000 /-</Text>
         </View>
      </View>
      <TouchableOpacity style={styles.confirmOrder}>
         <Text style={styles.confirmOrderText}>PLACE ORDER</Text>
      </TouchableOpacity>
   </View>
}
export default Total;
const styles = StyleSheet.create({
   container: {
      padding: 20,
      paddingTop: 0
   },
   total: {
      fontFamily: 'outfit-medium',
      fontSize: 20
   },
   confirmOrder: {
      backgroundColor: Colors.SECONDARY,
      padding: 10,
      borderRadius: 10,
      marginVertical: 10
   },
   confirmOrderText: {
      color: Colors.WHITE,
      fontFamily: 'outfit-medium',
      fontSize: 17,
      textAlign: 'center'
   },
   totalAmount: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 3
   },
   sum: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   price: {
      fontFamily: 'outfit-medium',
      fontSize: 16,

   }
})