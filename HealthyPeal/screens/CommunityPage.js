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
import { TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';

const {height, width} = Dimensions.get("window")

export default function CommunityPage({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkprimary}}>
        <View style={{flex: 1}}>
        <Text style={{marginTop: 40, fontSize: 32, alignSelf: "center", fontWeight: "bold", color: "white"}}>Community</Text>
          <View style={{height:80, backgroundColor: COLORS.darkprimary,
          borderBottomWidth: 1, borderBottomColor: COLORS.darkaccent}}>
            <View style={{flexDirection:"row", padding: 10,
            backgroundColor:"white", marginHorizontal: 30,
            shadowOffset: { width: 0, height: 0},
            shadowOpacity: 0.2,
            elevation: 1,
            marginTop: 20
            }}>
              <Icon name='search-outline' width={24} height={24} fill={COLORS.secondary}/>
              <TextInput
              placeholder=" Explore"
              placeholderTextColor={COLORS.secondary}
              style={{flex: 1, fontSize: 16, fontWeight: "600", backgroundColor:COLORS.primary}}
              />
            </View>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            {/* <View style={{flex:1, backgroundColor:COLORS.primary, paddingTop: 20}}>
              <Text style={{color:COLORS.darkaccent, fontSize:24, fontWeight:"700", paddingHorizontal:20}}>
                What can we help you find?
              </Text> */}
              {/* <View style={{height: 60, marginTop: 20}}>
                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
                  <View style={{height: 60, width: 160,
                  marginLeft: 20, borderWidth: 2, borderColor: COLORS.secondary}}>
                    <View style={{flex: 1, paddingLeft: 20, paddingTop: 12 }}>
                    <TouchableOpacity onPress={() =>navigation.navigate('Resources')}>
                    <Text style={{color: COLORS.lightaccent, fontWeight:"bold", fontSize: 24}}>Resources</Text>
                    </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{height: 60, width: 160,
                  marginLeft: 20, borderWidth: 2, borderColor: COLORS.secondary}}>
                    <View style={{flex: 1, paddingLeft: 16, paddingTop: 12 }}>
                    <TouchableOpacity onPress={() =>navigation.navigate('Information')}>
                    <Text style={{color: COLORS.lightaccent, fontWeight:"bold", fontSize: 24}}>Conditions</Text>
                    </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{height: 60, width: 140,
                  marginLeft: 20, borderWidth: 2, borderColor: COLORS.secondary}}>
                    <View style={{flex: 1, paddingLeft: 8, paddingTop: 12 }}>
                    <TouchableOpacity onPress={() =>navigation.navigate('Resources')}>
                    <Text style={{color: COLORS.lightaccent, fontWeight:"bold", fontSize: 24}}>Symptoms</Text>
                    </TouchableOpacity>
                    </View>
                  </View>
                </ScrollView>
              </View> */}
              <View style={{marginTop: 20, paddingHorizontal: 20}}>
                <Text style={{color: "white", fontSize: 24, fontWeight: "700"}}>
                  Introducing Peal Community
                </Text>
                <Text style={{color: "white", fontWeight: "300", marginTop: 10}}>
                 A space for compassionate conversation
                </Text>
                <View style={{width:width-40, height:240, marginTop: 20}}>
                <Image source={{uri: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80"}}
                      style={{flex: 1, height : null, width: null, resizeMode: "cover",
                    borderRadius: 5, borderWidth: 1,
                  borderColor: COLORS.secondary}}
                      />
                </View>
              </View>
  <View style={{marginTop: 40}}>
      <Text style={{fontSize: 24, fontWeight: "700",
    paddingHorizontal: 20, color: "white"}}>
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
          <Text style={{fontSize: 16, fontWeight: "bold", color: COLORS.darkprimary}}>Body Image</Text>
          {/* <Text style={{fontSize: 12, fontWeight: "bold", color: COLORS.primary}}>100 members</Text> */}
        </View>
      </View>
      <View style={{width:width/2 - 30, height: width/2 - 30, marginVertical: 10, borderWidth:0.5, borderColor:COLORS.secondary}}>
        <View style={{flex: 2}}>
        <Image source={{uri: "https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}}
          style={{flex: 1, height : null, width: null, resizeMode: "cover",
          }}/>
        </View>
        <View style={{flex: 1, alignItems:"flex-start", justifyContent: "space-evenly", paddingLeft: 10, backgroundColor:COLORS.lightaccent}}>
          <Text style={{fontSize: 16, fontWeight: "bold", color: COLORS.darkprimary}}>Grief</Text>
          {/* <Text style={{fontSize: 12, fontWeight: "bold", color: COLORS.primary}}>40 members</Text> */}
        </View>
      </View>
      <View style={{width:width/2 - 30, height: width/2 - 30, borderWidth:0.5, borderColor:COLORS.secondary}}>
        <View style={{flex: 2}}>
        <Image source={{uri: "https://images.unsplash.com/photo-1539541417736-3d44c90da315?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}}
          style={{flex: 1, height : null, width: null, resizeMode: "cover",
          }}/>
        </View>
        <View style={{flex: 1, alignItems:"flex-start", justifyContent: "space-evenly", paddingLeft: 10, backgroundColor:COLORS.lightaccent}}>
          <Text style={{fontSize: 16, fontWeight: "bold", color: COLORS.darkprimary}}>Depression</Text>
          {/* <Text style={{fontSize: 12, fontWeight: "bold", color: COLORS.primary}}>200 members</Text> */}
        </View>
      </View>
      <View style={{width:width/2 - 30, height: width/2 - 30, borderWidth:0.5, borderColor:COLORS.secondary}}>
        <View style={{flex: 2}}>
        <Image source={{uri: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80"}}
          style={{flex: 1, height : null, width: null, resizeMode: "cover",
          }}/>
        </View>
        <View style={{flex: 1, alignItems:"flex-start", justifyContent: "space-evenly", paddingLeft: 10, backgroundColor:COLORS.lightaccent}}>
          <Text style={{fontSize: 16, fontWeight: "bold", color: COLORS.darkprimary}}>Anger</Text>
          {/* <Text style={{fontSize: 12, fontWeight: "bold", color: COLORS.primary}}>50 members</Text> */}
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