import React, { useState } from 'react';
import {
  View, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, SafeAreaView
} from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import LottieView from "lottie-react-native";
import COLORS from "../Colors";

export default function PealExplanation({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightaccent, justifyContent: "center" }}>
      <ScrollView>
      {/* <View style={styles.container}>
        </View> */}
        <View style={styles.container}>
        <Text style={styles.title} category='h1'>
            <Text style={styles.bold}>Peal</Text> is here to help bring joy and peace to your life.
        </Text>
        <Text style={styles.title3} category='h1'>
            Every day you'll receive a set of <Text style={styles.bold}>3 personalized activities</Text> to help you reach your wellness goals.
        </Text>
          <Text style={styles.title3} category='h1'>
            Before we start, we want to get to know you better!
        </Text>
        </View>
        <View style={styles.container3}>
          <Button
            size="giant"
            style={styles.buttonbottom}
            onPress={() =>
              navigation.navigate('Identities')
            }>
            <Text style={styles.title2}>Next</Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "10%",
    marginLeft: "7%",
    backgroundColor: COLORS.lightaccent,
    alignItems: "flex-start",
  },
  container2: {
    flex: 1,
    marginTop: "80%",
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
    marginTop: "20%",
    alignSelf: "center",
    marginBottom: 0,
    backgroundColor: "white",
    width: "90%"
  },
  title: {
    color: "white",
    marginRight: "8%",
    marginBottom: 0,
    fontSize: 24,
    fontWeight: "400"
  },
  bold: {
    color: "white",
    marginTop: 0,
    marginBottom: 0,
    fontSize: 24,
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
  title3: {
    color: "white",
    marginRight: "8%",
    marginTop: 30,
    fontSize: 24,
    fontWeight: "400"
  },
});