import React from "react";
import { StyleSheet, View, SafeAreaView, Image, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { Text, Button } from '@ui-kitten/components';
import CardFlip from "react-native-card-flip";
import { Icon } from 'react-native-eva-icons';
import COLORS from "../Colors";
import { withAuthenticator } from 'aws-amplify-react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { Auth } from 'aws-amplify';

const { width, height } = Dimensions.get('window')

//export default 
function GuidesPage2() {
      return (
        <SafeAreaView style={{ height: height, width: width, backgroundColor: COLORS.lightaccent }}>
          <Text style={styles.head}>Swipe!</Text>
          <CardStack
            style={styles.content}
            renderNoMoreCards={() => <Text style={{ fontWeight: '700', fontSize: 16, color: COLORS.primary, marginHorizontal: 80, }}>Inspired by The Wellness Society's Coronavirus Anxiety Workbook.</Text>}
            ref={swiper => {
              this.swiper = swiper
            }}
            onSwiped={() => console.log('onSwiped')}
            onSwipedLeft={() => console.log('onSwipedLeft')}
          >
            <Card style={[styles.card, styles.card6]}><Text style={styles.label}>Postive Thinking: A Quick Guide</Text></Card>
            <Card style={[styles.card, styles.card1]}><Text style={styles.label}>Negative, unhelpful thoughts can overwhelm you and have a gloomy effect on your day.</Text></Card>
            <Card style={[styles.card, styles.card7]}><Text style={styles.label}>The first step to feeling better is recognizing that you're experiencing stress and that you want to alleviate it.</Text></Card>
            <Card style={[styles.card, styles.card2]}><Text style={styles.label}>The ABCDE Technique can help with your negative thoughts</Text></Card>
            <Card style={[styles.card, styles.card8]}><Text style={styles.label}>A: When you feel stressed out, pause and pay Attention to your inner dialogue. </Text></Card>
            <Card style={[styles.card, styles.card4]}><Text style={styles.label}>B: What is your mind telling you? Do you Believe it?</Text></Card>
            <Card style={[styles.card, styles.card3]}><Text style={styles.label}>C: What would being thinking if you felt calmer? Challenge your current thought by widening your focus.</Text></Card>
            <Card style={[styles.card, styles.card7]}><Text style={styles.label}>D: Acknowledge that anxiety influenced your thinking and Discount the importance of an unhelpful thoughts.</Text></Card>
            <Card style={[styles.card, styles.card9]}><Text style={styles.label}>E: Explore options. It might be helpful to check out your recommended coping skills and try one. Options are important.</Text></Card>
            <Card style={[styles.card, styles.card5]}><Text style={styles.label}>It might be helpful to go this process out loud. Check in with yourself now. How are you feeling?</Text></Card>
          </CardStack>
    
          <View style={styles.footer}>
      <Button
        size="medium"
        style={styles.buttonbottom}
        onPress={() => {
          this.swiper.goBackFromRight();
        }}>
        <Text style={styles.buttontext}>Back</Text>
      </Button>
              {/* <TouchableOpacity style={[styles.button, styles.orange]} onPress={() => {
                this.swiper.goBackFromLeft();
              }}>
                <Icon name='person-outline' resizeMode={'contain'} style={{ height: 32, width: 32, borderRadius: 5 }} />
              </TouchableOpacity> */}
              {/* <TouchableOpacity style={[styles.button, styles.green]} onPress={() => {
                this.swiper.swipeRight();
              }}>
                <Text resizeMode={'contain'} style={{color: "black" }}>Next</Text> 
              </TouchableOpacity> */}
            </View>
    
          </SafeAreaView>
      );
    };
    
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    flexDirection: 'column',
    backgroundColor: COLORS.lightaccent,
  },
  content:{
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    width: 320,
    height: height * 0.55,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
  },
  card1: {
    backgroundColor: COLORS.secondary,
  },
  card2: {
    backgroundColor: COLORS.calmpink,
  },
  card3: {
    backgroundColor: COLORS.brightblue,
  },
  card4: {
    backgroundColor: COLORS.darkaccent,
  },
  card5: {
    backgroundColor: COLORS.lavender,
  },
  card6: {
    backgroundColor: COLORS.darkprimary,
  },
  card7: {
    backgroundColor: COLORS.mgradient3,
  },
  card8: {
    backgroundColor: COLORS.brightgreen,
  },
  card9: {
    backgroundColor: COLORS.darkprimary,
  },
  // label: {
  //   lineHeight: 400,
  //   textAlign: 'center',
  //   fontSize: 55,
  //   fontFamily: 'System',
  //   color: '#ffffff',
  //   backgroundColor: 'transparent',
  // },
  label: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
    elevation: 5,
    alignSelf: "center",
    justifyContent: "center",
    marginVertical: "20%",
    marginHorizontal: "6%"
},
  buttonbottom: {
    alignSelf: "center",
    marginBottom: height * 0.01,
    width: 200,
    height: 50,
    backgroundColor: COLORS.lightaccent,
    borderColor: COLORS.lightaccent,
    shadowColor: COLORS.lightaccent,
  },
  buttontext: {
    fontSize: 24,
    fontWeight: "600",
    color: COLORS.primary
  },
  footer:{
    flex:1,
    marginBottom: "20%",
    justifyContent:'center',
    alignItems:'center'
  },
  head: {
    color: COLORS.primary,
    // marginLeft: 20,
    paddingBottom: 20,
    paddingTop: "24%",
    paddingLeft: 10,
    alignSelf: "center",
    fontSize: 32,
    fontWeight: "700",
  },
  buttonContainer:{
    width:300,
    flexDirection:'column',
    justifyContent: 'space-between',
  },
  button:{
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    zIndex: 0,
  },
  orange:{
    width:55,
    height:55,
    borderWidth:6,
    borderColor:COLORS.darkaccent,
    borderRadius:55,
    marginTop:-15
  },
  green:{
    width:75,
    height:75,
    backgroundColor:'#fff',
    borderRadius:75,
    borderWidth:6,
    borderColor:COLORS.darkaccent,
  },
  red:{
    width:75,
    height:75,
    backgroundColor:'#fff',
    borderRadius:75,
    borderWidth:6,
    borderColor: COLORS.darkaccent,
  }
});

export default GuidesPage2;