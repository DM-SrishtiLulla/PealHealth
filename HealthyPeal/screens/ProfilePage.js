import React from 'react';
import { StyleSheet } from "react-native";
import { Layout, Text, Button } from '@ui-kitten/components';
import COLORS from "../Colors";
import LottieView from "lottie-react-native";

export default function ProfilePage({ navigation }) {
    return (
      <Layout style={styles.container}>
      <Text style={styles.title} category='h1'>Saved Strategies</Text>
      <LottieView 
          source={require("../assets/23694-morning-tea.json")} 
          autoPlay
          speed={0.5}
          loop={true}
          style={styles.animation}/>
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: "column"
    },
  title: {
      flex:1,
      alignSelf: "center",
      color:"#FFFFFF",
      fontWeight:'bold',
      color: COLORS.darkaccent,
      marginHorizontal: 20,
      marginTop: 100
  },
  button1: {
    marginHorizontal: 10,
    marginBottom: 100
  },
  animation: {
    alignSelf: "center",
    justifyContent: "center",
  },
});