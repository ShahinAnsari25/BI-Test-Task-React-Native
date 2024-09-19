import { Text, View, StyleSheet, Image, TextInput, Pressable, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRouter } from 'expo-router';
import { Alert } from "react-native";
const Profile = () => {
   const router = useRouter()
   const handleLogout = async () => {
      try {
         // Clear the stored email from AsyncStorage
         await AsyncStorage.removeItem('userEmail');

         // Navigate back to the login screen
         router.replace('/login');  // or navigation.reset() depending on your router setup

         Alert.alert('Logged out', 'You have been logged out successfully.');
      } catch (error) {
         console.log('Error logging out:', error);
         Alert.alert('Logout failed', 'An error occurred during logout.');
      }
   };
   return <Pressable onPress={handleLogout}>
      <Text>Logout</Text>
   </Pressable>
}
export default Profile;