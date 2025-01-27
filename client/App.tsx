import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SomeComponent from './src/SomeComponent';
import React, { Component } from 'react';
import { parseEmail, parsePassword } from './src/auth';

type AppProps = {};  // no props

type AppState = {
  email?: string,
  password?: string
};

class App2 extends Component<AppProps, AppState> {
  componentDidMount = (): void => {
    fetch ('/api/auth')
      .then(this.doAuthResp)
      .catch((ex) => this.doAuthError('failed to connect', ex));
  }

  render = (): JSX.Element => {
    return <div>
      <p>PLEASE LOGIN</p>
    </div>
  };

  renderHome = (): JSX.Element => {
    return <div>
      <p>Logged In</p>
    </div>
  }

  doAuthResp = (res: Response): void => {
    if (res.status === 200) {
      res.json()
        .then(this.renderHome)
        .catch((ex) => this.doAuthError('200 response is not JSON', ex));
    } else if (res.status === 400) {
      res.text()
        .then(this.doAuthError)
        .catch((ex) => this.doAuthError('400 response is not text', ex));
    } else {
      this.doAuthError(`bad status code: ${res.status}`);
    }
  };

  doAuthError = (msg: string, ex?: unknown): void => {
    console.error(`fetch of /api/auth failed: ${msg}`)
    if (ex instanceof Error)
      throw ex;
  };


};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is me testing how to use Expo Go!</Text>
      <StatusBar style="auto" />
      <SomeComponent />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});