import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'


const Stack= createStackNavigator();

const navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default navigation

const styles = StyleSheet.create({})