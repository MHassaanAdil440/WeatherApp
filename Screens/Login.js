import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, Image, Dimensions, TextInput } from "react-native";

const screenWidth = Dimensions.get("window").width;

const Login = () => {
  const imagePath = require("../images/cloud.png");

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image source={imagePath} style={styles.image} />
      </View>
      <View style={styles.bottomView}>
        <Text>Login</Text>
        <TextInput placeholder="Email" style={styles.textinput}/>
        <TextInput placeholder="Password" style={styles.textinput}/>
      </View>
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
    backgroundColor: "#F8F1F1",
    width: screenWidth,
  },
  bottomView: {
    flex: 0.7,
    // backgroundColor: "yellow",
  },
  //Main image style
  image: {
    width: 200,
    height: 200,
    marginTop: 50,
    alignSelf: "center",
  },
  textinput:{
    borderWidth: 1,
    padding: 8,
    margin: 10,
    borderRadius:25,
    borderColor: "#54B435",
    width: screenWidth * 0.7,
  }
});

export default Login;
