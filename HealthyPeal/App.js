import 'react-native-gesture-handler';
import React from 'react';
import MainStackNavigator from './screens/AppNavigator';
import { withAuthenticator } from 'aws-amplify-react-native';
import authTheme from "./authTheme";

function App() {
  return <MainStackNavigator/>;
}

export default withAuthenticator(App, false, [], null, authTheme)
