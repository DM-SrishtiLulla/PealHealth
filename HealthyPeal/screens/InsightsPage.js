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
import { API, graphqlOperation, Auth } from 'aws-amplify'
import { listUserInsightss, getUserInfo, getInsight, listInsights } from './../src/graphql/queries';
import COLORS from "../Colors";
import { useIsFocused } from '@react-navigation/native';
import { createUserInsights, updateUserInsights } from '../src/graphql/mutations';

const {height, width} = Dimensions.get("window")

export default function InsightsPage({ navigation }) {

  //let user;

  const [insights, setInsights] = useState([])

  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      fetchInsights()
      console.log("HELLO")
      console.log(insights)

    }
  }, [isFocused]);

  


  async function fetchInsights() {
    try {
      let userInsights = [];
      
      const extraNeeded = 3 - items.length;
      let extraItems;
      if (extraNeeded > 0) {
        //console.log
        const extraInsights = await API.graphql(graphqlOperation(listInsights, {limit: extraNeeded}))
        extraItems = (extraInsights.data.listInsights.items)
        for (ei in extraItems) {
          userInsights.push(extraItems[ei])
          console.log(extraItems[ei])
        }
      }
      setInsights(userInsights)

      console.log(extraItems)
    } catch (err) { console.log('error fetching insightsjas') }
  }
    return (
      <View></View>
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