import 'react-native-gesture-handler';
import React from 'react';
import {
  View
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as eva from '@eva-design/eva';
import { default as theme } from './theme.json';
import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { withAuthenticator } from 'aws-amplify-react-native';

const Stack = createStackNavigator();

function HelloWorldApp({ navigation }) {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
     <Button
        size="medium"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }>
          Go to Jane's profile
        </Button>
  </Layout>
  )
}

function ProfilePage({ navigation }) {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>Jane's Profile</Text>
     <Button
        size="medium"
        onPress={() =>
          navigation.navigate('Home')
        }>
          Go Back
        </Button>
  </Layout>
  )
}

function App() {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HelloWorldApp}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
    </ApplicationProvider>
  );
}

export default withAuthenticator(App);
