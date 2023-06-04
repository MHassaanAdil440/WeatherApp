import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, Image, Dimensions, TextInput, TouchableOpacity } from "react-native";

const screenWidth = Dimensions.get("window").width;

const Login = () => {
  const imagePath = require("../images/cloud.png");

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image source={imagePath} style={styles.image} />
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.heading}>Login</Text>
        <TextInput placeholder="Email" style={styles.textinput} />
        <TextInput placeholder="Password" style={styles.textinput} />
        <View style={styles.rememberMeContainer}>
          <TouchableOpacity style={styles.checkbox} />
          <Text style={styles.rememberMeText}>Remember Me</Text>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
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
    width: screenWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 50,
    alignSelf: "center",
  },
  textinput: {
    borderWidth: 1,
    padding: 8,
    margin: 10,
    borderRadius: 25,
    borderColor: "#54B435",
    width: screenWidth * 0.7,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#54B435",
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#54B435",
    marginRight: 10,
  },
  rememberMeText: {
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#54B435",
    padding: 10,
    borderRadius: 25,
    width: screenWidth * 0.7,
    alignItems: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Login;
