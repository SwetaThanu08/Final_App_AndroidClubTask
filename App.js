import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

//import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStack from './AuthStack';


function App() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

export default App;