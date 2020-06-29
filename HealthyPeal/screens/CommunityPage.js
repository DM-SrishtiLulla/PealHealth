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

export default function CommunityPage({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary}}>
        <View style={{flex: 1}}>
        <Text style={{marginTop: 50, fontSize: 32, alignSelf: "center", fontWeight: "bold"}}>Community</Text>
          <View style={{height:100, backgroundColor: COLORS.primary,
          borderBottomWidth: 1, borderBottomColor: COLORS.secondary}}>
            <View style={{flexDirection:"row", padding: 10,
            backgroundColor:COLORS.primary, marginHorizontal: 30,
            shadowOffset: { width: 0, height: 0},
            shadowOpacity: 0.2,
            elevation: 1,
            marginTop: 20
            }}>
              <Icon name='search-outline' width={24} height={24} fill={COLORS.lightaccent}/>
              <TextInput
              placeholder="Try Meditation"
              placeholderTextColor={COLORS.lightaccent}
              style={{flex: 1, fontWeight: "700", backgroundColor:COLORS.primary}}
              />
            </View>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
          <Animated.View
            style={{flexDirection: "row", marginHorizontal: 20, postion: "relative", top: 10, color: COLORS.primary}}>
              {/* <View style={{minHeight: 40, minWidth: 40, padding: 5,
              backgroundColor: COLORS.primary, borderWidth: 0.2,
              borderRadius: 2, borderColor: COLORS.lightaccent, marginLeft: 5, marginRight: 5}}>
                <Text style={{fontWeight: "700", fontSize: 14, color: COLORS.lightaccent}}> Local </Text>
              </View>
              <View style={{minHeight: 40, minWidth: 40, padding: 5,
              backgroundColor: COLORS.primary, borderWidth: 0.2,
              borderRadius: 2}}>
                <Text style={{fontWeight: "700", fontSize: 14, color: COLORS.lightaccent}}> Global </Text>
              </View> */}
            </Animated.View>
            <View style={{flex:1, backgroundColor:COLORS.primary, paddingTop: 20}}>
              <Text style={{color:COLORS.darkaccent, fontSize:24, fontWeight:"700", paddingHorizontal:20}}>
                What can we help you find?
              </Text>
              <View style={{height: 130, marginTop: 20}}>
                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
                  <View style={{height: 130, width: 130,
                  marginLeft: 20, borderWidth: 2, borderColor: COLORS.secondary}}>
                    <View style={{flex: 2}}>
                      <Image source={{uri: "https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"}}
                      style={{flex: 1, height : null, width: null, resizeMode: "cover"}}
                      />
                    </View>
                    <View style={{flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                      <Text style={{color: COLORS.lightaccent, fontWeight:"500"}}>Information</Text>
                    </View>
                  </View>
                  <View style={{height: 130, width: 130,
                  marginLeft: 20, borderWidth: 2, borderColor: COLORS.secondary}}>
                    <View style={{flex: 2}}>
                      <Image source={{uri: "https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"}}
                      style={{flex: 1, height : null, width: null, resizeMode: "cover"}}
                      />
                    </View>
                    <View style={{flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text style={{color: COLORS.lightaccent, fontWeight:"500"}}>Resources</Text>
                    </View>
                  </View>
                  <View style={{height: 130, width: 130,
                  marginLeft: 20, borderWidth: 2, borderColor: COLORS.secondary}}>
                    <View style={{flex: 2}}>
                      <Image source={{uri: "https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"}}
                      style={{flex: 1, height : null, width: null, resizeMode: "cover"}}
                      />
                    </View>
                    <View style={{flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text style={{color: COLORS.lightaccent, fontWeight:"500"}}>Events</Text>
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
                  borderColor: COLORS.secondary}}
                      />
                </View>
              </View>
  <View style={{marginTop: 40}}>
      <Text style={{fontSize: 24, fontWeight: "700",
    paddingHorizontal: 20}}>
      Spaces for conversation
    </Text>
    <View style={{paddingHorizontal: 20, marginTop: 20, flexDirection: "row", flexWrap: "wrap",
  justifyContent: "space-between"}}>
      <View style={{width:width/2 - 30, height: width/2 - 30, marginVertical: 10, borderWidth:0.5, borderColor:COLORS.secondary}}>
        <View style={{flex: 1}}>
        <Image source={{uri: "https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"}}
          style={{flex: 1, height : null, width: null, resizeMode: "cover",
          }}/>
        </View>
        <View style={{flex: 1, alignItems:"flex-start", justifyContent: "space-evenly", paddingLeft: 10, backgroundColor:COLORS.lightaccent}}>
          <Text style={{fontSize: 16, color: COLORS.primary}}>Disordered Eating</Text>
          <Text style={{fontSize: 12, fontWeight: "bold", color: COLORS.primary}}>100 members</Text>
        </View>
      </View>
      <View style={{width:width/2 - 30, height: width/2 - 30, marginVertical: 10, borderWidth:0.5, borderColor:COLORS.secondary}}>
        <View style={{flex: 1}}>
        <Image source={{uri: "https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"}}
          style={{flex: 1, height : null, width: null, resizeMode: "cover",
          }}/>
        </View>
        <View style={{flex: 1, alignItems:"flex-start", justifyContent: "space-evenly", paddingLeft: 10, backgroundColor:COLORS.lightaccent}}>
          <Text style={{fontSize: 16, color: COLORS.primary}}>Grief</Text>
          <Text style={{fontSize: 12, fontWeight: "bold", color: COLORS.primary}}>100 members</Text>
        </View>
      </View>
      <View style={{width:width/2 - 30, height: width/2 - 30, borderWidth:0.5, borderColor:COLORS.secondary}}>
        <View style={{flex: 1}}>
        <Image source={{uri: "https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"}}
          style={{flex: 1, height : null, width: null, resizeMode: "cover",
          }}/>
        </View>
        <View style={{flex: 1, alignItems:"flex-start", justifyContent: "space-evenly", paddingLeft: 10, backgroundColor:COLORS.lightaccent}}>
          <Text style={{fontSize: 16, color: COLORS.primary}}>Depression</Text>
          <Text style={{fontSize: 12, fontWeight: "bold", color: COLORS.primary}}>100 members</Text>
        </View>
      </View>
      <View style={{width:width/2 - 30, height: width/2 - 30, borderWidth:0.5, borderColor:COLORS.secondary}}>
        <View style={{flex: 1}}>
        <Image source={{uri: "https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"}}
          style={{flex: 1, height : null, width: null, resizeMode: "cover",
          }}/>
        </View>
        <View style={{flex: 1, alignItems:"flex-start", justifyContent: "space-evenly", paddingLeft: 10, backgroundColor:COLORS.lightaccent}}>
          <Text style={{fontSize: 16, color: COLORS.primary}}>Anger</Text>
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