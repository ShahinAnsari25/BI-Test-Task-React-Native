import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Provider } from 'react-redux';
import store from "../reduxStore/index.js"
export default function RootLayout() {
  useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf')
  })
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="login/index" />
        <Stack.Screen name="(tabs)" options={{
          headerShown: false
        }} />
      </Stack>
    </Provider>

  );
}
