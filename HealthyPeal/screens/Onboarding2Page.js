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
        <Text style={styles.title} category='h1'>
          FIND SUPPORT
          </Text>
        <Text style={styles.title} category='h1'>
          TRACK MOOD  
        </Text>
        <Text style={styles.title} category='h1'>
          PRACTICE JOY
        </Text>
        <LottieView source={require("../assets/18841-bar-graph.json")}
          autoPlay 
          loop
          speed={0.5}
          style={{
            height: 300,
            backgroundColor: COLORS.primary,
          }}/>
          <Button
          size="giant"
          style={styles.buttonbottom}
          onPress={() =>
            navigation.navigate('Onboarding3')
          }>
            Next
          </Button>
      </View>
    );
}
  
const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:0,
      backgroundColor: COLORS.primary,
      alignItems: "center"
    },
    title: {
      color: COLORS.darkaccent,
      justifyContent: "center",
      alignContent: "center",
      marginTop: 30,
      marginBottom: 30,
      fontSize: 40,
      fontWeight: "bold"
    },
    buttonbottom: {
      marginTop: 40,
      alignSelf: "center",
    },
});