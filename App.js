import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StyleSheet, Text, View } from 'react-native';

import { useFonts } from "expo-font";
import Homes from "./screens/Homes";
import Details from "./screens/Detail";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background: "transparent"
  }
}
 
export default function App() {

  const  [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    IntersemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });  

  if(!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}} 
       initialRouterName="Home">
        <Stack.Screen name="Home" component={Homes} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

