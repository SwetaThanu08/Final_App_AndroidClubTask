import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import MainScreen from './MainScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
     
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen}/>
    </Stack.Navigator>
  );
};

export default AuthStack;

//<Stack.Screen name="Register" component={RegisterScreen} />