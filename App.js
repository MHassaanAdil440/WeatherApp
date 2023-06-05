import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import Logsign from "./Screens/Logsign";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import MainApp from "./Screens/Mainscreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Logsign"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Logsign" component={Logsign} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Main" component={MainApp} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground, Dimensions, StyleSheet } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { initializeApp } from 'firebase/app';
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

// import Login from "./Screens/Login";
// import Logsign from "./Screens/Logsign";
// import Signup from "./Screens/Signup";

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Logsign">
//         <Stack.Screen name="Logsign" component={Logsign} options={{ headerShown: false }} />
//         <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
//         <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
//         <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Text> App.js </Text> */}
//       <Logsign />
//       {/* <Login /> */}
//       {/* <Signup /> */}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
