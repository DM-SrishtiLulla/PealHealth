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
import MorePage from "./MorePage";
import { Icon } from 'react-native-eva-icons';
import CommunityPage from './CommunityPage';
import COLORS from "../Colors";
import ArticlesPage from './ArticlesPage';
import CardsTesting from './CardsTesting';
import IdentitiesPage from './IdentitiesPage';
import GoalsPage from './GoalsPage';
import InterestsPage from './InterestsPage';
import HelloWorldPage from './HelloWorldPage';
import InsightsPage from './InsightsPage';
import GuidesPage from "./GuidesPage";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator color={COLORS.lightaccent} activeColor={COLORS.secondary} shifting={false} initialRouteName="Dashboard">
      <Tab.Screen name="Dashboard"
        component={HelloWorldPage}
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
        component={ProfilePage}
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
            <Stack.Screen name="Profile" component={ProfilePage}  />
            <Stack.Screen name="Onboarding" component={OnboardingPage} options={{ headerTitle: "", headerTransparent: true }}/>
            <Stack.Screen name="About" component={PealExplanation} options={{ headerTitle: "", headerTransparent: true }} />
            <Stack.Screen name="Identities" component={OnboardingIdentities} options={{ headerTitle: "", headerTransparent: true }}/>
            <Stack.Screen name="Goals" component={OnboardingGoals} options={{ headerTitle: "", headerTransparent: true }}/>
            <Stack.Screen name="Interests" component={OnboardingInterests} options={{ headerTitle: "", headerTransparent: true }}/>
            <Stack.Screen name="Resources" component={ResourcesPage} options={{ headerTitle: "", headerTransparent: true }}/>
            <Stack.Screen name="Post!" component={ArticlesPage} options={{ headerTitle: "", headerTransparent: true }}/>
            <Stack.Screen name="CardsTesting" component={CardsTesting} options={{ headerTitle: "", headerTransparent: true }}/>
            <Stack.Screen name="IdentitiesPage" component={IdentitiesPage} options={{ headerTitle: "", headerTransparent: true }}/>
            <Stack.Screen name="GoalsPage" component={GoalsPage} options={{ headerTitle: "", headerTransparent: true }}/>
            <Stack.Screen name="InterestsPage" component={InterestsPage} options={{ headerTitle: "", headerTransparent: true }}/>
            <Stack.Screen name="InsightsPage" component={InsightsPage} options={{ headerTitle: "", headerTransparent: true }}/>
            <Stack.Screen name="Guides" component={GuidesPage} options={{ headerTitle: "", headerTransparent: true }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}