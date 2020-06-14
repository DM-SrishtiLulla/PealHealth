import 'react-native-gesture-handler';
import React from 'react';
import {
  View, AsyncStorage, Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as theme } from './theme.json';
import { ApplicationProvider, Layout, Text, Button, IconRegistry, Icon} from '@ui-kitten/components';
import Onboarding from "react-native-onboarding-swiper";
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
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
      <Button
        size="medium"
        onPress={() =>
          navigation.navigate('Onboarding')
        }>
          Onboarding
        </Button>
  </Layout>
  )
}


function OnboardingPage() {
return (
    <Onboarding
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Icon name="swap" size={100} color="white" />
          ),
          title: "Page One",
          subtitle: "This is the first page of the onboarding sequence.",
        },
        {
          backgroundColor: "#fff",
          title: "Page Two",
          subtitle: (
            <Button
          title={'Get Started'}
          containerViewStyle={{ marginTop: 20 }}
          backgroundColor={'white'}
          borderRadius={5}
          textStyle={{ color: '#003c8f' }}
          onPress={() => {
              navigation.navigate('Home')
            }
          }
        />
          ),
          image: (
            <Icon name="swap" size={100} color="white" />
          ),
        },
      ]}
    />
  );
};

function App() {
  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HelloWorldApp}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="Onboarding" component={OnboardingPage} />
      </Stack.Navigator>
    </NavigationContainer>
    </ApplicationProvider>
    </>
  );
}

export default withAuthenticator(App);
