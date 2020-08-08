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

const {height, width} = Dimensions.get("window")

export default function HelloWorldPage({ navigation }) {
    return (
      <Carousel data = {dummyData}/>
    );
};