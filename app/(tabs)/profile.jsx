import { Text, View, StyleSheet, Image, TextInput, Pressable, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRouter } from 'expo-router';
import { Alert } from "react-native";
import { TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
const Profile = () => {
   const router = useRouter()
   const navigation = useNavigation()
   const handleLogout = async () => {
      try {
         // Clear the stored email from AsyncStorage
         await AsyncStorage.removeItem('userEmail');

         // // Navigate back to the login screen
         router.replace('/login');
         Alert.alert('Logged out', 'You have been logged out successfully.');
      } catch (error) {
         Alert.alert('Logout failed', 'An error occurred during logout.');
      }
   };
   return <TouchableOpacity onPress={handleLogout} style={styles.button}>
      <Text style={styles.text}>Logout</Text>
   </TouchableOpacity>
}
export default Profile;
const styles = StyleSheet.create({
   button: {
      backgroundColor: Colors.SECONDARY,
      padding: 10,
      borderRadius: 10,
      margin: 20
   },
   text: {
      color: Colors.WHITE,
      fontFamily: 'outfit-medium',
      fontSize: 18,
      textAlign: 'center'
   }
})