import React, { useState }  from 'react';
import {
    View, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, SafeAreaView
  } from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import LottieView from "lottie-react-native";
import COLORS from "../Colors";

export default function OnboardingPage({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary}}>
      <View style={styles.container}>
        <Text style={styles.title} category='h1'>
          PEAL IS...
        </Text>
        <Text style={styles.title} category='h1'>
          COMMUNITY
        </Text>
        <Text style={styles.title} category='h1'>
          CONVERSATION
        </Text>
        <Text style={styles.title} category='h1'>
          COMPASSION
        </Text>
        <LottieView source={require("../assets/22979-meditating-lady.json")}
          autoPlay 
          loop
          speed={0.7}
          style={{
            height: 300,
            backgroundColor: COLORS.primary,
            color: COLORS.lightaccent
          }}/>
          <Button
          size="giant"
          style={styles.buttonbottom}
          onPress={() =>
            navigation.navigate('Onboarding2')
          }>
            Get Started
          </Button>
      </View>
      </SafeAreaView>
    );
}
  
const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:0,
      backgroundColor: COLORS.primary,
      justifyContent: "flex-start",
      alignItems: "center"
    },
    list: {
      //paddingHorizontal: 5,
      backgroundColor:"#E6E6E6",
    },
    listContainer:{
      alignItems:'center'
    },
    subTitle:{
      fontSize:12,
      flex:1,
      color:"#FFFFFF",
    },
    icon:{
      height: 20,
      width: 20, 
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    buttonbottom: {
      marginTop: 20,
      alignSelf: "center",
    },
    title: {
      color: COLORS.lightaccent,
      justifyContent: "center",
      alignContent: "center",
      marginTop: 30,
      marginBottom: 10,
      fontSize: 40,
      fontWeight: "bold"
    },
});