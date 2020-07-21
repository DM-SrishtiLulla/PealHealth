import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as theme } from './../theme.json';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import HelloWorldApp from './HelloWorldPage';
import ProfilePage from './ProfilePage';
import OnboardingPage from './OnboardingPage';
import PealExplanation from "./PealExplanation";
import OnboardingIdentities from "./OnboardingIdentities";
import OnboardingGoals from "./OnboardingGoals";
import OnboardingInterests from "./OnboardingInterests";
import ResourcesPage from "./ResourcesPage";
import InformationPage from "./InformationPage";
import MorePage from "./MorePage";
import { Icon } from 'react-native-eva-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CommunityPage from './CommunityPage';
import COLORS from "../Colors";
import ArticlesPage from './ArticlesPage';
import CardsTesting from './CardsTesting';
import IdentitiesPage from './IdentitiesPage';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator color={COLORS.lightaccent} activeColor={COLORS.secondary} shifting={false} initialRouteName="Dashboard">
      <Tab.Screen name="Dashboard"
        component={ProfilePage}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <Icon name='home-outline' width={24} height={24} fill={COLORS.secondary} />
            // <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Community"
        component={CommunityPage}
        options={{
          tabBarLabel: 'Community',
          tabBarIcon: ({ color }) => (
            <Icon name='globe-outline' width={24} height={24} fill={COLORS.secondary} />
          ),
        }} />
      <Tab.Screen name="Profile"
        component={HelloWorldApp}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name='person-outline' width={24} height={24} fill={COLORS.secondary} />
          ),
        }} />
      <Tab.Screen name="More"
        component={MorePage}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color }) => (
            <Icon name='more-horizontal-outline' width={24} height={24} fill={COLORS.secondary} />
          ),
        }} />
    </Tab.Navigator>
  );
}

export default function MainStackNavigator() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Onboarding" options={{ headerTitle: "", headerTransparent: true }}>
            <Stack.Screen
              name="Tabs"
              component={MainTabNavigator}
              options={{ headerTitle: "", headerTransparent: true }}
            />
            {/* <Stack.Screen
            name="Home"
            component={HelloWorldApp}
            options={{ title: 'Welcome' }}
          /> */}
            {/* <Stack.Screen name="Profile" component={ProfilePage} /> */}
            <Stack.Screen name="Onboarding" component={OnboardingPage} />
            <Stack.Screen name="About" component={PealExplanation} />
            <Stack.Screen name="Identities" component={OnboardingIdentities} />
            <Stack.Screen name="Goals" component={OnboardingGoals} />
            <Stack.Screen name="Interests" component={OnboardingInterests} />
            <Stack.Screen name="Resources" component={ResourcesPage} />
            <Stack.Screen name="Information" component={InformationPage} />
            <Stack.Screen name="ArticlesPage" component={ArticlesPage} />
            <Stack.Screen name="CardsTesting" component={CardsTesting} />
            <Stack.Screen name="IdentitiesPage" component={IdentitiesPage} />

          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}