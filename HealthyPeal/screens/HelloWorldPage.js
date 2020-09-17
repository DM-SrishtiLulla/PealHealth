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

const {height, width} = Dimensions.get("window")

export default function HelloWorldPage({ navigation }) {

  let user;

  const [insights, setInsights] = useState([])

  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      fetchInsights()
    }
  }, [isFocused]);

  

  async function getUser() {
    let us = await Auth.currentAuthenticatedUser();
    user = us.username;
  }

  async function fetchInsights() {
    await getUser();
    try {
      let userInsights = [];
      const insight = await API.graphql(graphqlOperation(listUserInsightss, {filter: {and: {userID: {eq: "scoconut26"}, status: {eq: "new"}}}}))
      const items = (insight.data.listUserInsightss.items)
      console.log(items.length)
      const shuffled = items.sort(() => 0.5 - Math.random());
      let selected = shuffled.slice(0, 3);
      let actualData;
      for (const ins in selected) {
        actualData = selected[ins].insight
        userInsights.push(actualData)
      }
      const extraNeeded = 3 - items.length;
      if (extraNeeded > 0) {
        const extraInsights = await API.graphql(graphqlOperation(listInsights, {limit: extraNeeded}))
        const extraItems = (extraInsights.data.listInsights.items)
        console.log(extraItems)
        for (ei in extraItems) {
          userInsights.push(extraItems[ei])
        }
      }
      setInsights(userInsights)
    } catch (err) { console.log('error fetching insightsjas') }
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