import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/LoginScreen";
import RegisterScreen from "../../screens/RegisterScreen";
import HomeScreen from "../../screens/HomeScreen";

const Index=()=> {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}} />
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}

export default Index;

const styles = StyleSheet.create({});
