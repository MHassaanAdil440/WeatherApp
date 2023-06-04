import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const Signup = () => {
  const imagePath = require("../images/cloud.png");

  return (
    <View style={styles.container}>
      <Image source={imagePath} style={styles.image} />
      <Text style={styles.heading}>Signup</Text>
      <TextInput placeholder="Username" style={styles.textInput} />
      <TextInput placeholder="Email" style={styles.textInput} />
      <TextInput placeholder="Password" secureTextEntry={true} style={styles.textInput} />
      <TextInput placeholder="Confirm Password" secureTextEntry={true} style={styles.textInput} />
      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Already had an account? Login</Text>
      </TouchableOpacity>
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
  image: {
    width: screenWidth * 0.4,
    height: screenWidth * 0.4,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#54B435",
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#54B435",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    width: screenWidth * 0.7,
  },
  signupButton: {
    backgroundColor: "#54B435",
    padding: 10,
    borderRadius: 25,
    width: screenWidth * 0.7,
    alignItems: "center",
    marginTop: 20,
  },
  signupButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  loginButton: {
    marginTop: 10,
  },
  loginButtonText: {
    color: "#54B435",
    fontSize: 16,
  },
});

export default Signup;
