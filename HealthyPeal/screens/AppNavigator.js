import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as theme } from './../theme.json';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import HelloWorldApp from './HelloWorldPage';
import ProfilePage from './ProfilePage';
import OnboardingPage from './OnboardingPage';
import Onboarding2Page from "./Onboarding2Page";
import Onboarding3Page from "./Onboarding3Page";
import Onboarding4Page from "./Onboarding4Page";
import DatabaseTest from "./DatabaseTest";
import { Icon } from 'react-native-eva-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CommunityPage from './CommunityPage';
import COLORS from "../Colors";
//import ArticlesPage from './ArticlesPage';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator color={COLORS.lightaccent} activeColor={COLORS.darkaccent} shifting={false} initialRouteName="Dashboard">
      <Tab.Screen name="Dashboard" 
                      component={HelloWorldApp} 
                      options={{
                        tabBarLabel: 'Dashboard',
                        tabBarIcon: ({ color }) => (
                          <Icon name='home-outline' width={24} height={24} fill={COLORS.primary} />
                          // <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),}}/>
      <Tab.Screen name="Insights" 
                      component={ProfilePage} 
                      options={{
                        tabBarLabel: 'Insights',
                        tabBarIcon: ({ color }) => (
                          <Icon name='bulb-outline' width={24} height={24} fill={COLORS.primary} />
                        ),}}/>
      <Tab.Screen name="Community" 
                      component={CommunityPage} 
                      options={{
                        tabBarLabel: 'Community',
                        tabBarIcon: ({ color }) => (
                          <Icon name='globe-outline' width={24} height={24} fill={COLORS.primary} />
                          ),}}/>
      <Tab.Screen name="More" 
                      component={DatabaseTest} 
                      options={{
                        tabBarLabel: 'More',
                        tabBarIcon: ({ color }) => (
                          <Icon name='more-horizontal-outline' width={24} height={24} fill={COLORS.primary} />
                          ),}}/>
    </Tab.Navigator>
  );
}

export default function MainStackNavigator() {
    return (
      <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboarding" options={{headerTitle: "", headerTransparent: true}}>
          <Stack.Screen
            name="Tabs"
            component={MainTabNavigator}
            options={{headerTitle: "", headerTransparent: true}}
          />
          {/* <Stack.Screen
            name="Home"
            component={HelloWorldApp}
            options={{ title: 'Welcome' }}
          /> */}
          {/* <Stack.Screen name="Profile" component={ProfilePage} /> */}
          <Stack.Screen name="Onboarding" component={OnboardingPage} />
          <Stack.Screen name="About" component={Onboarding2Page} />
          <Stack.Screen name="Communities" component={Onboarding3Page} />
          <Stack.Screen name="Skills" component={Onboarding4Page} />
          <Stack.Screen name="ArticlesPage" component={ArticlesPage} />
          {/* <Stack.Screen name="DatabaseTest" component={DatabaseTest} /> */}
        </Stack.Navigator>
      </NavigationContainer>
      </ApplicationProvider>
      </>
    );
}