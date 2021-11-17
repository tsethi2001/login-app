
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';



 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
   
    <Stack.Navigator>
<Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />

<Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen}/>
<Stack.Screen name="Register" component={RegisterScreen}/>

    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
