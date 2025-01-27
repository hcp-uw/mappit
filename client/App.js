import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SomeComponent from './src/SomeComponent';
import React, { useState } from 'react';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      console.log('Login successful!');
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text>This is me testing how to use Expo Go!</Text>
      <StatusBar style="auto" />
      <SomeComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;