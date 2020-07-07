import React from 'react';
import { StyleSheet, ScrollView } from "react-native";
import { Layout, Text, Button } from '@ui-kitten/components';
import COLORS from "../Colors";
import LottieView from "lottie-react-native";

export default function ProfilePage({ navigation }) {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollcontainer}>
      <Layout style={styles.container}>
      <Text style={styles.title} category='h1'>Saved Strategies</Text>
      <LottieView source={require("../assets/18409-breathe.json")}
          autoPlay 
          loop
          speed={1}
          style={{
            height: 300,
            marginVertical: 40,
            backgroundColor: COLORS.primary,
            color: COLORS.lightaccent
          }}/>
        {/* <Button
          size="giant"
          style={styles.button1}
          onPress={() =>
            navigation.navigate('More')
          }>
            DatabaseTest
        </Button> */}
        {/* <Button
          size="giant"
          style={styles.button1}
          onPress={() =>
            navigation.navigate('ArticlesPage')
          }>
            ArticlesPage
        </Button> */}
    </Layout>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: 0,
    backgroundColor: COLORS.primary,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: "column"
    },
    scrollcontainer: {
      backgroundColor: COLORS.primary,
      },
  title: {
      flex:1,
      alignSelf: "center",
      color:"#FFFFFF",
      fontWeight:'bold',
      color: COLORS.lightaccent,
      marginHorizontal: 20,
      marginTop: 100
  },
  button1: {
    marginHorizontal: 10,
    marginBottom: 100,
    marginTop: 400,
    color: COLORS.darkaccent
  },
  animation: {
    alignSelf: "center",
    justifyContent: "center",
  },
});