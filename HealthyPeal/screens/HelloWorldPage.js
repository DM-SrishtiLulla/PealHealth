import React from 'react';
import { StyleSheet } from "react-native";
import { Layout, Text, Button } from '@ui-kitten/components';
import COLORS from "../Colors";

export default function HelloWorldApp({ navigation }) {
    return (
      <Layout style={styles.container}>
      <Text style={styles.title} category='h1'>Home</Text>
       <Button
          size="medium"
          style={styles.button1}
          onPress={() =>
            navigation.navigate('Insights', { name: 'Jane' })
          }>
            Go to Jane's profile
          </Button>
    </Layout>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: COLORS.primary,
    },
  title: {
    marginTop: 100,
    color: COLORS.darkaccent,
    marginHorizontal: 20,
  },
  button1: {
    marginTop: 30,
    marginHorizontal: 50
  },
});