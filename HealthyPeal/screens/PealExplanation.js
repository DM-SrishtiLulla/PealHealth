import React, { useState }  from 'react';
import {
    View, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Dimensions
  } from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import LottieView from 'lottie-react-native';
import COLORS from "../Colors";

const { width, height } = Dimensions.get('window')

const image2 = {uri: "https://images.unsplash.com/photo-1595246861171-ab531e06cfe4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"};

export default function PealExplanation({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.title} category='h1'>
          If you have anxiety, you are not alone.
        </Text>
        <Text style={styles.title} category='h1'>
          Peal can help you find exercises, resources, and communities.
        </Text>
        <Text style={styles.title} category='h1'>
          To start, try an activity on your dashboard.
        </Text>
        {/* <LottieView source={require("../assets/22979-meditating-lady.json")}
          autoPlay 
          loop
          speed={0.7}
          style={{
            height: 200,
            backgroundColor: COLORS.primary,
            color: COLORS.lightaccent
          }}/> */}
          <Button
          size="giant"
          style={styles.buttonbottom}
          onPress={() =>
            navigation.navigate('Tabs')
          }>
            <Text style={styles.buttontext}>Next</Text>
          </Button>
      </View>
    );
}
  
const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:0,
      backgroundColor: COLORS.primary,
      // alignItems: "center",
    },
    title: {
      color: COLORS.lightaccent,
      justifyContent: "center",
      alignContent: "center",
      marginTop: 30,
      marginBottom: 0,
      marginLeft: 30,
      marginRight: 20,
      fontSize: 36,
      fontWeight: "bold",
    },
    title1: {
      color: COLORS.lightaccent,
      // justifyContent: "center",
      // alignContent: "center",
      marginTop: 30,
      // marginBottom: 10,
      marginLeft: 0,
      // marginRight: 20,
      fontSize: 36,
      fontWeight: "bold",
    },
    buttonbottom: {
      marginTop: 40,
      width: 200,
      alignSelf: "center",
      backgroundColor: COLORS.lightaccent,
    },
    buttontext: {
      fontSize: 30,
      fontWeight: "800",
      color: COLORS.primary
  },
    image: {
      width: width - 20,
      height: height / 1.35,
      borderRadius: 10
  },
});