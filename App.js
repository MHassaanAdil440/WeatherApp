import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Screens/Login";
import Logsign from "./Screens/Logsign";
import Signup from "./Screens/Signup";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text> App.js </Text> */}
      {/* <Login /> */}
      {/* <Logsign /> */}
      <Signup />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
