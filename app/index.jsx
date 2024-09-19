import { Text, View, ActivityIndicator } from "react-native";
import { Link, Redirect, useNavigation } from "expo-router";
import { useEffect, useState } from "react";

export default function Index() {
   const navigation = useNavigation();

   return (
      <View>
         <Redirect href={"/login"} replace={true}></Redirect>
      </View>
   );
}