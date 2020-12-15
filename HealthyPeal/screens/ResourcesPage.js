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
import { Icon } from 'react-native-eva-icons';
import { Layout, Text, Button } from '@ui-kitten/components';
import COLORS from '../Colors';

const {height, width} = Dimensions.get("window")

export default function ResourcesPage({ navigation }) {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={styles.header}>
                    <Text style={styles.headerText}>
                        MERA –– Health
                    </Text>
                </View>
        <Text style={{marginTop: 40, fontSize: 40, fontWeight:"700", marginHorizontal: 20, fontFamily: "Avenir", color: "black", fontFamily: "Cochin"}}>Crisis Resources</Text>
              <View style={{marginTop: "8%", paddingHorizontal: 20}}>
                <Text style={{color: "black", fontSize: 28, fontWeight: "500", fontFamily: "Cochin", marginBottom: "3%"}}>
                  Options for Help
                </Text>
                <Text style={{color: "black", fontSize: 20, fontFamily: "Avenir", marginTop: 10}}>
                National Suicide Prevention Lifeline: 1-800-273-8255
                </Text>
                <Text style={{color: "black", fontSize: 20, fontFamily: "Avenir", marginTop: 10}}>
                Trans Lifeline: 877-565-8860
                </Text>
                <Text style={{color: "black", fontSize: 20, fontFamily: "Avenir", marginTop: 10}}>
                Crisis Text Line: Text HOME to 741741 to connect with a Crisis Counselor
                </Text>
                <Text style={{color: "black", fontSize: 20, fontFamily: "Avenir", marginTop: 10}}>
                LGBT National Hotline: 888-843-4564
                </Text>
                <Text style={{color: "black", fontSize: 20, fontFamily: "Avenir", marginTop: 10}}>
                National Coalition of Anti-Violence Programs: 212-714-1141
                </Text>
                <Text style={{color: "black", fontSize: 18, fontFamily: "Avenir", marginTop: 10}}>
                LGBT National Youth Talkline: 800-246-7743
                </Text>
                <Text style={{color: "black", fontSize: 18, fontFamily: "Avenir", marginTop: 10}}>
                DeHQ [LGBTQ Helpline for South Asians]: 908-367-3374
                </Text>
              </View>
</ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    backgroundColor: "black",
    height: 100,
    color: "white",
    alignItems: "center",
},
headerText: {
    color: "white",
    fontSize: 28,
    marginTop: "12%",
    fontWeight: "400",
    fontFamily: "Cochin",
},
})