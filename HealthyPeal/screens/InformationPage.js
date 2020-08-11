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

export default function InformationPage({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.text}}>
        <View style={{flex: 1}}>
        <Text style={{marginTop: 40, fontSize: 32, alignSelf: "center", fontWeight: "bold"}}>Information</Text>
          <View style={{height:20, backgroundColor: COLORS.text,
          borderBottomWidth: 1, borderBottomColor: COLORS.secondary}}>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
              <View style={{marginTop: 20, paddingHorizontal: 20}}>
                <View style={{width:width-40, height:240, marginTop: 20, marginBottom: 20}}>
                <Image source={{uri: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1993&q=80"}}
                      style={{flex: 1, height : null, width: null, resizeMode: "cover",
                    borderRadius: 5, borderWidth: 1,
                  borderColor: COLORS.secondary}}
                      />
                </View>
                <Text style={{color: COLORS.darkaccent, fontSize: 32, fontWeight: "700"}}>
                  Mindfulness Exercises
                </Text>
                <View style={{width:width-40, height:240, marginTop: 20, marginBottom: 20}}>
                <Image source={{uri: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}}
                      style={{flex: 1, height : null, width: null, resizeMode: "cover",
                    borderRadius: 5, borderWidth: 1,
                  borderColor: COLORS.secondary}}
                      />
                </View>
                <Text style={{color: COLORS.darkaccent, fontSize: 18, fontWeight: "bold", marginTop: 10}}>
                Quicksand Visualization - Imagine being stuck in quicksand as being like a person
who fights reality and ends up getting deeper and deeper in the quicksand. Only by acceptance of the
quicksand by lying spread eagle-like - and not resisting- can we keep ourselves from sinking deeper.
                </Text>
                <View style={{width:width-40, height:240, marginTop: 20, marginBottom: 20}}>
                <Image source={{uri: "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"}}
                      style={{flex: 1, height : null, width: null, resizeMode: "cover",
                    borderRadius: 5, borderWidth: 1,
                  borderColor: COLORS.secondary}}
                      />
                </View>
                <Text style={{color: COLORS.darkaccent, fontSize: 18, fontWeight: "bold", marginTop: 10}}>
              Mountain Visualization - Regardless of the weather, rain, snow, sleet, hail and sunshine, the
mountain still stands and is unwavering. It does not react to inclement weather.
                </Text>
                <View style={{width:width-40, height:240, marginTop: 20, marginBottom: 20}}>
                <Image source={{uri: "https://images.unsplash.com/photo-1498747946579-bde604cb8f44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"}}
                      style={{flex: 1, height : null, width: null, resizeMode: "cover",
                    borderRadius: 5, borderWidth: 1,
                  borderColor: COLORS.secondary}}
                      />
                </View>
              </View>
                <Text style={{color: COLORS.darkaccent, fontSize: 18, fontWeight: "bold", marginTop: 10, marginHorizontal: 20}}>
                Beach Ball Visualization- If you put a beach ball in a tub of water and push it down it will keep popping
back up. This demonstrates the impossibility of resisting reality and pushing thoughts away. If we persist
in denying or fighting reality, it will keep coming back stronger, just as the beach ball in water will keep
popping back up. As the saying goes, “what you resist will persist.”
                </Text>
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