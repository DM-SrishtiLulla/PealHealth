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
import { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listInsights } from './../src/graphql/queries';
import COLORS from "../Colors";



const {height, width} = Dimensions.get("window")

export default function HelloWorldPage({ navigation }) {

  const [insights, setInsights] = useState([])

  useEffect(() => {
    fetchInsights()
  }, [])

  async function fetchInsights() {
    try {
      const insightData = await API.graphql(graphqlOperation(listInsights))
      const insights = insightData.data.listInsights.items
      setInsights(insights)
      const shuffled = insights.sort(() => 0.5 - Math.random());
      let selected = shuffled.slice(0, 3);
      setInsights(selected)
    } catch (err) { console.log('error fetching insights') }
  }

  
    return (
      <Carousel data = {insights}/>
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