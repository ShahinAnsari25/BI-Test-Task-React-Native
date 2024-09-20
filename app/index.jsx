import { View, ActivityIndicator, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default function Index() {
   const router = useRouter();
   const [isReady, setIsReady] = useState(false);

   // Simulate mounting processro
   useEffect(() => {
      const timer = setTimeout(() => {
         setIsReady(true);
      }, 1000);

      return () => clearTimeout(timer);
   }, []);

   useEffect(() => {
      if (isReady) {

         router.replace("/login");
      }
   }, [isReady]);

   return (
      <View style={styles.container}>
         {!isReady && <ActivityIndicator size="large" color="#0000ff" />}
      </View>
   );
}
const styles = StyleSheet.create({
   container: {
      minHeight: height * 0.9,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
   }
})