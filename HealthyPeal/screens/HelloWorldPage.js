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
import { listInsights, getUserInfo, getInsight } from './../src/graphql/queries';
import COLORS from "../Colors";



const {height, width} = Dimensions.get("window")

export default function HelloWorldPage({ navigation }) {

  let user;

  const [insights, setInsights] = useState([])

  useEffect(() => {
    fetchInsights()
  }, [])

  async function getUser() {
    let us = await Auth.currentAuthenticatedUser();
    user = us.username;
  }

  async function fetchInsights() {
    await getUser();
    try {
      let userInsights = [];
      const insightI = await API.graphql(graphqlOperation(getUserInfo, {id: user}))
      const item = (insightI.data.getUserInfo.Insights.items)
      let insightID;
      let insightFull;
      let actualData;
      for (const i in item) {
        insightID = item[i].insightID
        insightFull = await API.graphql(graphqlOperation(getInsight, {id: insightID}))
        actualData = insightFull.data.getInsight
        userInsights.push(actualData)
      }
      setInsights(userInsights)
      /*const insightData = await API.graphql(graphqlOperation(listInsights))
      const insights = insightData.data.listInsights.items
      console.log(insights)
      /*setInsights(insights)
      const shuffled = insights.sort(() => 0.5 - Math.random());
      let selected = shuffled.slice(0, 3);
      setInsights(selected)*/
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