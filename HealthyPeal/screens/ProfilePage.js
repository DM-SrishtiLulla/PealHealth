import React from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';

export default function ProfilePage({ navigation }) {
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