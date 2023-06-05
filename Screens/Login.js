import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Dimensions, StyleSheet, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase'; 

const screenWidth = Dimensions.get("window").width;

const Login = ({ navigation }) => {
  const imagePath = require("../images/cloud.png");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate('Main');
      })
      .catch(error => {
        console.log(error);
        setModalVisible(true);
      });
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image source={imagePath} style={styles.image} />
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.heading}>Login</Text>
        <TextInput
          placeholder="Email"
          style={styles.textinput}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          style={styles.textinput}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.rememberMeContainer} onPress={togglePasswordVisibility}>
          <View style={[styles.checkbox, showPassword && { backgroundColor: '#54B435' }]} />
          <Text style={styles.rememberMeText}>{showPassword ? 'Hide Password' : 'Show Password'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.signupButtonText}>Not a member? Signup now</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Invalid email or password</Text>
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    textAlign: 'center', // Add this line to center the placeholder text
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
  signupButton: {
    marginTop: 10,
  },
  signupButtonText: {
    color: "#54B435",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: "#54B435",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Login;
