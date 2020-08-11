import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  Animated
} from "react-native";
import Carousel from "./Carousel";
import { dummyData } from "./Data.js";
import COLORS from "../Colors";

const {height, width} = Dimensions.get("window")

export default function HelloWorldPage({ navigation }) {
    return (
      <View style={styles.container}>
      <Carousel data = {dummyData}/>
      </View>
    );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:0,
    marginBottom: 0,
    backgroundColor: COLORS.darkprimary,
  },
});