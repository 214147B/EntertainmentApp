import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigation = useNavigation();

  // Handle form submission
  const handleLogin = () => {
    let valid = true;

    if (!username) {
      setUsernameError("Please enter your username.");
      valid = false;
    } else {
      setUsernameError("");
    }

    if (!password || password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      console.log("Username:", username);
      console.log("Password:", password);
      Alert.alert("Login Successful", `Welcome back, ${username}!`);
      navigation.navigate("Home"); // Navigate to the Home screen
    }
  };

  const navigateToRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>

      <TextInput
        style={styles.input}
        placeholder="User Name"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={(text) => setUsername(text)}
        onBlur={() => {
          if (username === "") {
            setUsernameError("Please enter your username.");
          } else {
            setUsernameError("");
          }
        }}
      />
      {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        onBlur={() => {
          if (password && password.length < 6) {
            setPasswordError("Password must be at least 6 characters.");
          } else {
            setPasswordError("");
          }
        }}
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Don't have an account?{" "}
        <Text style={styles.link} onPress={navigateToRegister}>
          Sign up
        </Text>
      </Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 5,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#28a745",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  footerText: {
    marginTop: 15,
    fontSize: 14,
    color: "#555",
  },
  link: {
    color: "#007BFF",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
    textAlign: "left",
    width: "100%",
  },
});
