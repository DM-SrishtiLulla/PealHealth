import React, { useState } from 'react';
import {
  View, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, SafeAreaView
} from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import LottieView from "lottie-react-native";
import COLORS from "../Colors";

export default function OnboardingPage({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightaccent, justifyContent: "center" }}>
      <ScrollView>
      {/* <View style={styles.container}>
        </View> */}
        <View style={styles.container2}>
          <Text style={styles.title} category='h1'>
            Peal
        </Text>
          <Text style={styles.title} category='h1'>
            supports
        </Text>
          <Text style={styles.title} category='h1'>
            <Text style={styles.bold}>your</Text> mental and
        </Text>
          <Text style={styles.title} category='h1'>
            emotional health.
        </Text>
        </View>
        <View style={styles.container3}>
          <Button
            size="giant"
            style={styles.buttonbottom}
            onPress={() =>
              navigation.navigate('About')
            }>
            <Text style={styles.title2}>Start Your Journey</Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    marginTop: "70%",
    marginLeft: "7%",
    backgroundColor: COLORS.lightaccent,
    alignItems: "flex-start",
  },
  container3: {
    flex: 1,
    backgroundColor: COLORS.lightaccent,
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
    color: "#FFFFFF",
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
    marginTop: "10%",
    alignSelf: "center",
    marginBottom: 0,
    backgroundColor: COLORS.primary,
    width: "90%"
  },
  title: {
    color: "white",
    marginTop: 0,
    marginBottom: 0,
    fontSize: 40,
    fontWeight: "300"
  },
  bold: {
    color: "white",
    marginTop: 0,
    marginBottom: 0,
    fontSize: 40,
    fontWeight: "600"
  },
  title2: {
    color: COLORS.lightaccent,
    // alignContent: "center",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 20,
    fontSize: 30,
    fontWeight: "500"
  },
});