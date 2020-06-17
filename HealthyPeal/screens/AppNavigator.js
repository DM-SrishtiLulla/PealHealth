import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as theme } from './../theme.json';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import HelloWorldApp from './HelloWorldPage';
import ProfilePage from './ProfilePage';
import OnboardingPage from './OnboardingPage';
import Onboarding2Page from "./Onboarding2Page";
import DatabaseTest from "./DatabaseTest";


const Stack = createStackNavigator();

export default function MainStackNavigator() {
    return (
      <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen
            name="Home"
            component={HelloWorldApp}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="Profile" component={ProfilePage} />
          <Stack.Screen name="Onboarding" component={OnboardingPage} />
          <Stack.Screen name="Onboarding2" component={Onboarding2Page} />
          <Stack.Screen name="DatabaseTest" component={DatabaseTest} />
        </Stack.Navigator>
      </NavigationContainer>
      </ApplicationProvider>
      </>
    );
}