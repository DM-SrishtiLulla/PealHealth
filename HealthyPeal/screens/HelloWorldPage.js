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
      const insight = await API.graphql(graphqlOperation(listUserInsightss, {filter: {and: {userID: {eq: user}, status: {eq: "new"}}}}))
      const items = (insight.data.listUserInsightss.items)
      const shuffled = items.sort(() => 0.5 - Math.random());
      let selected = shuffled.slice(0, 3);
      let actualData;
      for (const ins in selected) {
        actualData = selected[ins].insight
        userInsights.push(actualData)
      }
      setCurrentStatus(userInsights)
      const extraNeeded = 3 - items.length;
      let extraItems;
      if (extraNeeded > 0) {
        const extraInsights = await API.graphql(graphqlOperation(listInsights, {limit: extraNeeded}))
        extraItems = (extraInsights.data.listInsights.items)
        for (ei in extraItems) {
          userInsights.push(extraItems[ei])
        }
      }
      addUserInsights(extraItems)
      setInsights(userInsights)
    } catch (err) { console.log('error fetching insightsjas') }
  }

    async function setCurrentStatus(currentInsights) {
      let curId;
      let mut;
      console.log(currentInsights.length + "thatsit")
      if (currentInsights.length > 0) {
        for (const cur in currentInsights) {
          curId = currentInsights[cur].id
          mut = await API.graphql(graphqlOperation(updateUserInsights, {input: {insightID: curId, userID: user, status: "current"}}))
        }
      }
    }

    async function addUserInsights(currentInsights) {
      let curId;
      let mut;
      for (const cur in currentInsights) {
        curId = currentInsights[cur].id
        mut = await API.graphql(graphqlOperation(createUserInsights, {input: {insightID: curId, userID: user, status: "current"}}))
      }
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