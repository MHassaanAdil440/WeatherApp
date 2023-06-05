import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const screenWidth = Dimensions.get("window").width;

const Logsign = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/bgimg.png")}
        style={styles.image}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Weather App</Text>
          <Text style={styles.description}>
            Stay connected to the latest weather updates with our intuitive
            login and signup options.
          </Text>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
            <Text style={styles.signupButtonText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};


// const Logsign = () => {
//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={require("../images/bgimg.png")}
//         style={styles.image}
//       >
//         <View style={styles.contentContainer}>
//           <Text style={styles.title}>Weather App</Text>
//           <Text style={styles.description}>
//             Stay connected to the latest weather updates with our intuitive
//             login and signup options.
//           </Text>
//           <TouchableOpacity style={styles.loginButton}>
//             <Text style={styles.loginButtonText}>Login</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.signupButton}>
//             <Text style={styles.signupButtonText}>Signup</Text>
//           </TouchableOpacity>
//         </View>
//       </ImageBackground>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: {
    width: screenWidth,
    height: "100%",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#379237",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#54B435",
    textAlign: "center",
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: "#54B435",
    width: screenWidth * 0.7,
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  signupButton: {
    borderWidth: 1,
    borderColor: "#54B435",
    width: screenWidth * 0.7,
    paddingVertical: 10,
    borderRadius: 25,
  },
  signupButtonText: {
    color: "#54B435",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Logsign;
