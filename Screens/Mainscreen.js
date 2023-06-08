import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Notepad from "./Notepad";
import Search from "./Search";
import Settings from "./Settings";

const MainScreen = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {/* <Drawer.Screen name="Main" component={MainScreen} /> */}
        <Drawer.Screen name="Search" component={Search} />
        <Drawer.Screen name="Notepad" component={Notepad} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

export default MainScreen;
