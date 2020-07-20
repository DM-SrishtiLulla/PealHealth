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
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary}}>
        <View style={{flex: 1}}>
        <Text style={{marginTop: 40, fontSize: 32, alignSelf: "center", fontWeight: "bold", color: COLORS.lightaccent}}>Resources</Text>
          <View style={{height:20, backgroundColor: COLORS.primary,
          borderBottomWidth: 1, borderBottomColor: COLORS.secondary}}>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
              <View style={{marginTop: 20, paddingHorizontal: 20}}>
                <View style={{width:width-40, height:240, marginTop: 20, marginBottom: 20}}>
                <Image source={{uri: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80"}}
                      style={{flex: 1, height : null, width: null, resizeMode: "cover",
                    borderRadius: 5, borderWidth: 1,
                  borderColor: COLORS.secondary}}
                      />
                </View>
                <Text style={{color: COLORS.lightaccent, fontSize: 32, fontWeight: "700"}}>
                  Crisis Lines - Options for Immediate Help
                </Text>
                <Text style={{color: COLORS.lightaccent, fontSize: 18, fontWeight: "bold", marginTop: 10}}>
                National Suicide Prevention Lifeline: 1-800-273-8255
                </Text>
                <Text style={{color: COLORS.lightaccent, fontSize: 18, fontWeight: "bold", marginTop: 10}}>
                Trans Lifeline: 877-565-8860
                </Text>
                <Text style={{color: COLORS.lightaccent, fontSize: 18, fontWeight: "bold", marginTop: 10}}>
                Crisis Text Line: Text HOME to 741741 to connect with a Crisis Counselor
                </Text>
                <Text style={{color: COLORS.lightaccent, fontSize: 18, fontWeight: "bold", marginTop: 10}}>
                LGBT National Hotline: 888-843-4564
                </Text>
                <Text style={{color: COLORS.lightaccent, fontSize: 18, fontWeight: "bold", marginTop: 10}}>
                National Coalition of Anti-Violence Programs: 212-714-1141
                </Text>
                <Text style={{color: COLORS.lightaccent, fontSize: 18, fontWeight: "bold", marginTop: 10}}>
                LGBT National Youth Talkline: 800-246-7743
                </Text>
                <Text style={{color: COLORS.lightaccent, fontSize: 18, fontWeight: "bold", marginTop: 10}}>
                DeHQ [LGBTQ Helpline for South Asians]: 908-367-3374
                </Text>
              </View>
  <View style={{marginTop: 40}}>
      <Text style={{fontSize: 24, fontWeight: "700",
    paddingHorizontal: 20}}>
      Spaces for conversation
    </Text>
    <View style={{paddingHorizontal: 20, marginTop: 20, flexDirection: "row", flexWrap: "wrap",
  justifyContent: "space-between"}}>
      <View style={{width:width/2 - 30, height: width/2 - 30, marginVertical: 10, borderWidth:0.5, borderColor:COLORS.secondary}}>
        <View style={{flex: 2}}>
        <Image source={{uri: "https://images.unsplash.com/photo-1523459178261-028135da2714?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80"}}
          style={{flex: 1, height : null, width: null, resizeMode: "cover",
          }}/>
        </View>
        <View style={{flex: 1, alignItems:"flex-start", justifyContent: "space-evenly", paddingLeft: 10, backgroundColor:COLORS.lightaccent}}>
          <Text style={{fontSize: 16, fontWeight: "bold", color: COLORS.primary}}>Body Image</Text>
          <Text style={{fontSize: 12, fontWeight: "bold", color: COLORS.primary}}>100 members</Text>
        </View>
      </View>
      <View style={{width:width/2 - 30, height: width/2 - 30, marginVertical: 10, borderWidth:0.5, borderColor:COLORS.secondary}}>
        <View style={{flex: 2}}>
        <Image source={{uri: "https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}}
          style={{flex: 1, height : null, width: null, resizeMode: "cover",
          }}/>
        </View>
        <View style={{flex: 1, alignItems:"flex-start", justifyContent: "space-evenly", paddingLeft: 10, backgroundColor:COLORS.lightaccent}}>
          <Text style={{fontSize: 16, fontWeight: "bold", color: COLORS.primary}}>Grief</Text>
          <Text style={{fontSize: 12, fontWeight: "bold", color: COLORS.primary}}>40 members</Text>
        </View>
      </View>
      <View style={{width:width/2 - 30, height: width/2 - 30, borderWidth:0.5, borderColor:COLORS.secondary}}>
        <View style={{flex: 2}}>
        <Image source={{uri: "https://images.unsplash.com/photo-1539541417736-3d44c90da315?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}}
          style={{flex: 1, height : null, width: null, resizeMode: "cover",
          }}/>
        </View>
        <View style={{flex: 1, alignItems:"flex-start", justifyContent: "space-evenly", paddingLeft: 10, backgroundColor:COLORS.lightaccent}}>
          <Text style={{fontSize: 16, fontWeight: "bold", color: COLORS.primary}}>Depression</Text>
          <Text style={{fontSize: 12, fontWeight: "bold", color: COLORS.primary}}>200 members</Text>
        </View>
      </View>
      <View style={{width:width/2 - 30, height: width/2 - 30, borderWidth:0.5, borderColor:COLORS.secondary}}>
        <View style={{flex: 2}}>
        <Image source={{uri: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80"}}
          style={{flex: 1, height : null, width: null, resizeMode: "cover",
          }}/>
        </View>
        <View style={{flex: 1, alignItems:"flex-start", justifyContent: "space-evenly", paddingLeft: 10, backgroundColor:COLORS.lightaccent}}>
          <Text style={{fontSize: 16, fontWeight: "bold", color: COLORS.primary}}>Anger</Text>
          <Text style={{fontSize: 12, fontWeight: "bold", color: COLORS.primary}}>50 members</Text>
        </View>
      </View>
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