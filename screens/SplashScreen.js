import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';


const SplashScreen = ({navigation}) => {
    useEffect(() => {
        // Navigate to Login screen after 2 seconds
        const timer = setTimeout(() => {
          navigation.replace("Login"); // Replace to prevent navigating back to Splash
        }, 3000);
    
        return () => clearTimeout(timer); // Clear the timer on component unmount
      }, [navigation]);
    
  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/38/31/a0/3831a0700d61da9448ee688619062b91.jpg' }} // Replace with your image URL
      style={styles.background}
    >
      <View style={styles.overlay}>
        
        <Text style={styles.title}>MovieMania</Text>
        <Text style={styles.tagline}>Your Gateway to Unlimited Entertainment</Text>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for better contrast
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 20,
    color: '#ddd',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
