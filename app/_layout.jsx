import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Provider } from 'react-redux';
import { ActivityIndicator, View } from 'react-native'; // For the loading spinner
import store from "../reduxStore/index.js";
import { Slot } from "expo-router";

export default function RootLayout() {
  // Load custom fonts
  const [fontsLoaded] = useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf')
  });

  // Show a loader if fonts haven't loaded yet
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Only render Stack navigation after fonts have loaded
  return (
    <Provider store={store}>
      <Slot></Slot>
    </Provider>
  );
}
