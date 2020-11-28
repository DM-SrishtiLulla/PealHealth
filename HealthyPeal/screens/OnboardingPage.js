import React, { useState } from 'react';
import {
  View, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, SafeAreaView
} from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import LottieView from "lottie-react-native";
import COLORS from "../Colors";

const image = { uri: "https://bit.ly/2JeqKxs" };

export default function OnboardingPage({ navigation }) {
  return (
    <ImageBackground source={image} style={styles.image}>
    <SafeAreaView style={{ flex: 1, justifyContent: "center"}}>
      <ScrollView>
      {/* <View style={styles.container}>
        </View> */}
        <View style={styles.container2}>
          <Text style={styles.title} category='h1'>
            ABC
        </Text>
          <Text style={styles.title3} category='h1'>
            SUPPORT FOR YOU
        </Text>

        </View>
        <View style={styles.container3}>
          <Button
            size="giant"
            style={styles.buttonbottom}
            onPress={() =>
              navigation.navigate('About')
            }>
            <Text style={styles.title2}>CONTINUE</Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    marginTop: "45%",
    alignItems: "center",
  },
  container3: {
    flex: 1,
    justifyContent: "flex-end",
  },
  list: {
    //paddingHorizontal: 5,
    // backgroundColor:"#E6E6E6",
  },
  listContainer: {
    alignItems: 'center'
  },
  subTitle: {
    fontSize: 12,
    flex: 1,
    color: "black",
  },
  icon: {
    height: 20,
    width: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  buttonbottom: {
    marginTop: "80%",
    alignSelf: "center",
    marginBottom: 0,
    backgroundColor: "black",
    width: "80%",
    borderWidth: 0,
  },
  title: {
    color: "black",
    justifyContent: "center",
    marginTop: 0,
    marginBottom: 0,
    fontSize: 48,
    fontWeight: "400",
    fontFamily: "Cochin",
  },
  title3: {
    color: "black",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 0,
    fontSize: 20,
    fontWeight: "200",
    fontFamily: "Avenir",
  },
  bold: {
    color: "black",
    marginTop: 0,
    marginBottom: 0,
    fontSize: 40,
    fontWeight: "600",
    fontFamily: "Cochin",
  },
  title2: {
    color: "white",
    // alignContent: "center",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 20,
    fontSize: 22,
    fontWeight: "300",
    fontFamily: "Avenir",
  },
  image: {
    height: 1500,
    width: "100%",
  }
});