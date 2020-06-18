import React from 'react';
import { StyleSheet } from "react-native";
import { Layout, Text, Button } from '@ui-kitten/components';
import COLORS from "../Colors";

export default function ProfilePage({ navigation }) {
    return (
      <Layout style={styles.container}>
      <Text style={styles.title} category='h1'>Jane's Profile</Text>
       <Button
          size="medium"
          style={styles.button1}
          onPress={() =>
            navigation.navigate('Home')
          }>
            Go Back
        </Button>
        <Button
          size="medium"
          style={styles.button1}
          onPress={() =>
            navigation.navigate('Onboarding')
          }>
            Onboarding
        </Button>
        <Button
          size="medium"
          style={styles.button1}
          onPress={() =>
            navigation.navigate('More')
          }>
            DatabaseTest
        </Button>
    </Layout>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    },
  title: {
    color: COLORS.darkaccent,
    marginHorizontal: 20,
  },
  button1: {
    marginTop: 30
  },
});