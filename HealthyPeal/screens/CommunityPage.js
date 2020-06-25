import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image
} from "react-native";
import { Icon } from 'react-native-eva-icons';
import CommunityModule from "../components/CommunityModule";

import { Layout, Text, Button } from '@ui-kitten/components';
import COLORS from '../Colors';

export default function CommunityPage({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1}}>
        <View style={{flex: 1}}>
          <View style={{height:100, backgroundColor: COLORS.primary,
          borderBottomWidth: 1, borderBottomColor: COLORS.lightaccent}}>
            <View style={{flexDirection:"row", padding: 10,
            backgroundColor:COLORS.primary, marginHorizontal: 30,
            shadowOffset: { width: 0, height: 0},
            shadowOpacity: 0.2,
            elevation: 1,
            marginTop: 40
            }}>
              <Icon name='search-outline' width={24} height={24} fill={COLORS.lightaccent}/>
              <TextInput
              placeholder="Try Meditation"
              placeholderTextColor={COLORS.lightaccent}
              style={{flex: 1, fontWeight: "700", backgroundColor:COLORS.primary}}/>
            </View>
          </View>
          <ScrollView
            scrollEventThrottle={16}
          >
            <View style={{flex:1, backgroundColor:COLORS.primary, paddingTop: 20}}>
              <Text style={{color:COLORS.darkaccent, fontSize:24, fontWeight:"700", paddingHorizontal:20}}>
                What can we help you find?
              </Text>
              <View style={{height: 130, marginTop: 20}}>
                <ScrollView>
                    <CommunityModule imageURI={require("../assets/")}
                    />
                </ScrollView>
              </View>
            </View>
          </ScrollView>
    </View>
    </SafeAreaView>
    )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})