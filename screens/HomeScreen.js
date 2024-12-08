import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

const HomeScreen = () => {
  const route = useRoute();
  const { username } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {username || "User"}!</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: 380,
    paddingRight: 200,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    
   
    
  },
});
