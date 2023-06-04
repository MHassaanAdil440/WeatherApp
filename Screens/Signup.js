import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native/types";

const Signup = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topView}></View>
      <View style={styles.bottomView}></View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  topView: {
    flex: 0.3,
    backgroundColor: "blue"
  },
  bottomView: {
    flex: 0.7,
    backgroundColor:"yellow"
  },
});

export default Signup;
