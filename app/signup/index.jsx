import { Text, View, StyleSheet, Image, TextInput, Pressable, ScrollView } from "react-native";
import { Dimensions } from 'react-native';
import { useEffect } from "react";
const { width, height } = Dimensions.get('window');
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useForm, Controller } from 'react-hook-form';
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import { auth } from "../../config/firebaseConfig"
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import auth method
import { Alert } from "react-native";
const SignupScreen = () => {
   const navigation = useNavigation()
   useEffect(() => {
      navigation.setOptions({
         headerTransparent: true,
         headerTitle: ""
      })
   })
   // Use the useForm hook to manage the form
   const { control, handleSubmit, formState: { errors }, reset } = useForm();

   // Function to handle form submission
   const onSubmit = async (data) => {
      console.log(data.email, data.password)
      try {
         await createUserWithEmailAndPassword(auth, data.email, data.password);
         Alert.alert('Success', 'Account created successfully!');
         reset()
      } catch (error) {
         Alert.alert('Signup failed', error.message);
         console.log(error)
      }
      console.log(data); // This will log the form data
   };
   return (
      <ScrollView>
         <Image style={styles.image} source={{ uri: "https://img.freepik.com/free-vector/hand-drawn-shopping-cartoon-illustration_23-2151168766.jpg?t=st=1726685111~exp=1726688711~hmac=9d53482873396f5553909d06568351d3adf4d2b429a56b8584d52a6a62901efd&w=740" }} />
         <Text style={styles.signupHeading}>Signup</Text>
         <View style={styles.container}>
            {/* <Text style={styles.label}>Name:</Text>
            <Controller
               control={control}
               name="name"
               rules={{
                  required: true,
                  pattern: /^[A-Za-z]+$/
               }}  // Email validation rule
               render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                     style={styles.input}
                     placeholder="Enter your name"
                     onBlur={onBlur}
                     onChangeText={onChange}
                     value={value}
                     keyboardType="name"
                  />
               )}
            />
            {errors.name && <Text style={styles.errorText}>Enter a valid name.</Text>}

 */}

            <Text style={styles.label}>Email:</Text>
            <Controller
               control={control}
               name="email"
               rules={{
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
               }}  // Email validation rule
               render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                     style={styles.input}
                     placeholder="Enter your email"
                     onBlur={onBlur}
                     onChangeText={onChange}
                     value={value}
                     keyboardType="email-address"
                  />
               )}
            />
            {errors.email && <Text style={styles.errorText}>Enter a valid email.</Text>}

            {/* Password Input */}
            <Text style={styles.label}>Password:</Text>
            <Controller
               control={control}
               name="password"
               rules={{
                  required: "Password is required",
                  pattern: {
                     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                     message: "Password must contain at least one uppercase, one lowercase, one number, one special character, and be at least 6 characters long."
                  }
               }}  // Password validation rule
               render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                     style={styles.input}
                     placeholder="Enter your password"
                     onBlur={onBlur}
                     onChangeText={onChange}
                     value={value}
                     secureTextEntry={true}
                  />
               )}
            />
            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

            {/* Submit Button */}
            <Pressable style={styles.submit} title="Submit" onPress={handleSubmit(onSubmit)} >
               <Text style={styles.submitText}>Signup</Text>
            </Pressable>
            <View style={styles.newAccount}>
               <Text style={styles.newAcctext}>Already a user?</Text>
               <Link href={'/login'} replace>
                  <Text style={styles.link}>Login</Text>
               </Link>
            </View>
         </View>
      </ScrollView>
   );
}
export default SignupScreen;

const styles = StyleSheet.create({
   image: {
      height: height * 0.6,
      width: width * 1,
      objectFit: "cover"
   },
   errorText: {
      color: Colors.ERROR
   },
   container: {
      padding: 20,
      paddingTop: 0
   },
   input: {
      borderWidth: 1,
      borderColor: Colors.GRAY,
      padding: 7,
      borderRadius: 5,
      fontFamily: 'outfit',
      fontSize: 16
   },
   label: {
      fontFamily: 'outfit-medium',
      marginTop: 10,
      fontSize: 16
   },
   submit: {
      backgroundColor: Colors.PRIMARY,
      padding: 13,
      borderRadius: 8,
      marginTop: 10
   },
   submitText: {
      color: Colors.WHITE,
      textAlign: 'center',
      fontFamily: 'outfit-medium',
      fontSize: 16
   },
   newAccount: {
      display: "flex",
      flexDirection: 'row',
      gap: 5,
      padding: 3
   },
   link: {
      color: Colors.SECONDARY,
      fontFamily: "outfit",
      fontSize: 15
   },
   newAcctext: {
      fontFamily: "outfit",
      fontSize: 15
   },
   signupHeading: {
      fontFamily: 'outfit-bold',
      color: Colors.PRIMARY,
      fontSize: 25,
      marginTop: 10,
      textAlign: "center"
   }
})