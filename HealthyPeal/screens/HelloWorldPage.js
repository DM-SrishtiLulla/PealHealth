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
  Dimensions
} from "react-native";
import { Icon } from 'react-native-eva-icons';
import { Layout, Text, Button } from '@ui-kitten/components';
import COLORS from '../Colors';

const {height, width} = Dimensions.get("window")

export default function CommunityPage({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1}}>
        <View style={{flex: 1, marginTop: 30}}>
          <ScrollView
            scrollEventThrottle={16}
          >
            <View style={{flex:1, backgroundColor:COLORS.primary, paddingTop: 20}}>
              <Text style={{color:COLORS.darkaccent, fontSize:32, fontWeight:"700", paddingHorizontal:20}}>
                Your Daily Steps
              </Text>
              <View style={{height: 130, marginTop: 20}}>
                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
                  <View style={{height: 130, width: 130,
                  marginLeft: 20, borderWidth: 0.5, borderColor: COLORS.lightaccent}}>
                    <View style={{flex: 2}}>
                      <Image source={{uri: "https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"}}
                      style={{flex: 1, height : null, width: null, resizeMode: "cover"}}
                      />
                    </View>
                    <View style={{flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                      <Text>Home</Text>
                    </View>
                  </View>
                  <View style={{height: 130, width: 130,
                  marginLeft: 20, borderWidth: 0.5, borderColor: COLORS.lightaccent}}>
                    <View style={{flex: 2}}>
                      <Image source={{uri: "https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"}}
                      style={{flex: 1, height : null, width: null, resizeMode: "cover"}}
                      />
                    </View>
                    <View style={{flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                      <Text>Away</Text>
                    </View>
                  </View>
                  <View style={{height: 130, width: 130,
                  marginLeft: 20, borderWidth: 0.5, borderColor: COLORS.lightaccent}}>
                    <View style={{flex: 2}}>
                      <Image source={{uri: "https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"}}
                      style={{flex: 1, height : null, width: null, resizeMode: "cover"}}
                      />
                    </View>
                    <View style={{flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                      <Text>Near</Text>
                    </View>
                  </View>
                </ScrollView>
              </View>
              <View style={{marginTop: 40, paddingHorizontal: 20}}>
                <Text style={{color: COLORS.darkaccent, fontSize: 24, fontWeight: "700"}}>
                  Introducing Peal Community
                </Text>
                <Text style={{color: COLORS.darkaccent, fontWeight: "300", marginTop: 10}}>
                 A space for compassionate conversation
                </Text>
                <View style={{width:width-40, height:240, marginTop: 20}}>
                <Image source={{uri: "https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"}}
                      style={{flex: 1, height : null, width: null, resizeMode: "cover",
                    borderRadius: 5, borderWidth: 1,
                  borderColor: COLORS.lightaccent}}
                      />
                </View>
              </View>
  <View style={{marginTop: 40}}>
      <Text style={{fontSize: 24, fontWeight: "700",
    paddingHorizontal: 20}}>
      Homes around the world
    </Text>
    <View style={{paddingHorizontal: 20, marginTop: 20, flexDirection: "row", flexWrap: "wrap",
  justifyContent: "space-between"}}>
      <View style={{width:width/2 - 30, height: width/2 - 30, borderWidth:0.5, borderColor:COLORS.lightaccent}}>
        <View style={{flex: 1}}>
        <Image source={{uri: "https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"}}
          style={{flex: 1, height : null, width: null, resizeMode: "cover",
          }}/>
        </View>
        <View style={{flex: 1, alignItems:"flex-start", justifyContent: "space-evenly", paddingLeft: 10, backgroundColor:COLORS.lightaccent}}>
          <Text style={{fontSize: 14, color: COLORS.primary}}>Disordered Eating</Text>
          <Text style={{fontSize: 12, fontWeight: "bold", color: COLORS.primary}}>100 members</Text>
        </View>
      </View>
      <View style={{width:width/2 - 30, height: width/2 - 30, borderWidth:0.5, borderColor:COLORS.lightaccent}}>
        <View style={{flex: 1}}>
        <Image source={{uri: "https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"}}
          style={{flex: 1, height : null, width: null, resizeMode: "cover",
          }}/>
        </View>
        <View style={{flex: 1, alignItems:"flex-start", justifyContent: "space-evenly", paddingLeft: 10, backgroundColor:COLORS.lightaccent}}>
          <Text style={{fontSize: 14, color: COLORS.primary}}>Disordered Eating</Text>
          <Text style={{fontSize: 12, fontWeight: "bold", color: COLORS.primary}}>100 members</Text>
        </View>
      </View>
      <View style={{width:width/2 - 30, height: width/2 - 30, borderWidth:0.5, borderColor:COLORS.lightaccent}}>
        <View style={{flex: 1}}>
        <Image source={{uri: "https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"}}
          style={{flex: 1, height : null, width: null, resizeMode: "cover",
          }}/>
        </View>
        <View style={{flex: 1, alignItems:"flex-start", justifyContent: "space-evenly", paddingLeft: 10, backgroundColor:COLORS.lightaccent}}>
          <Text style={{fontSize: 14, color: COLORS.primary}}>Disordered Eating</Text>
          <Text style={{fontSize: 12, fontWeight: "bold", color: COLORS.primary}}>100 members</Text>
        </View>
      </View>
      <View style={{width:width/2 - 30, height: width/2 - 30, borderWidth:0.5, borderColor:COLORS.lightaccent}}>
        <View style={{flex: 1}}>
        <Image source={{uri: "https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"}}
          style={{flex: 1, height : null, width: null, resizeMode: "cover",
          }}/>
        </View>
        <View style={{flex: 1, alignItems:"flex-start", justifyContent: "space-evenly", paddingLeft: 10, backgroundColor:COLORS.lightaccent}}>
          <Text style={{fontSize: 14, color: COLORS.primary}}>Disordered Eating</Text>
          <Text style={{fontSize: 12, fontWeight: "bold", color: COLORS.primary}}>100 members</Text>
        </View>
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