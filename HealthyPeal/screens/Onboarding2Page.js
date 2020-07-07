import React, { useState }  from 'react';
import {
    View, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView, ImageBackground
  } from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import LottieView from 'lottie-react-native';
import COLORS from "../Colors";

export default function Onboarding2Page({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.title} category='h3'>
          Find support from your communities.
          </Text>
        <Text style={styles.title} category='h3'>
           Monitor your mood and track how you're feeling.
        </Text>
        <Text style={styles.title2} category='h3'>
           Our algorithms learn what works for you.
        </Text>
        {/* <LottieView source={require("../assets/4776-graph (1).json")}
          autoPlay 
          loop
          speed={0.5}
          style={{
            marginRight: 200,
            height: 200,
            backgroundColor: COLORS.primary,
          }}/> */}
          <Button
          size="giant"
          style={styles.buttonbottom}
          onPress={() =>
            navigation.navigate('Communities')
          }>
            <Text style={styles.title2}>Next</Text>
          </Button>
      </View>
    );
}
  
const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:0,
      backgroundColor: COLORS.primary,
      alignItems: "flex-start",
    },
    title: {
      color: COLORS.lightaccent,
      justifyContent: "center",
      // alignContent: "center",
      marginTop: 30,
      marginBottom: 0,
      marginLeft: 30,
      marginRight: 20,
      fontSize: 30,
      fontWeight: "bold",
    },
    title2: {
      color: COLORS.lightaccent,
      justifyContent: "center",
      // alignContent: "center",
      marginTop: 30,
      marginBottom: 10,
      marginLeft: 30,
      marginRight: 20,
      fontSize: 30,
      fontWeight: "bold",
    },
    buttonbottom: {
      marginTop: 40,
      width: 200,
      alignSelf: "center",
      color: COLORS.lightaccent,
    },
});