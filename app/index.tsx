import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from "./LoginScreen";
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <LoginScreen></LoginScreen>
  );
};

export default App;
