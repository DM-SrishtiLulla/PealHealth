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
import { resourcesData } from "./ResourcesData";

const {height, width} = Dimensions.get("window")

export default function HelloWorldPage({ navigation }) {
    return (
      <Carousel data = {resourcesData}/>
    );
};