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

import { Layout, Text, Button } from '@ui-kitten/components';
import COLORS from '../Colors';

class CommunityModule extends Component{
    render(){
        return (
            <View style={{height:130, width:130, marginLeft:20, borderWidth:0.5, borderColor:COLORS.lightaccent }}>
            <View style={{flex: 2}}>
              <Image source={this.props.imageUri}
              style={{flex:1, width:null , height:null, resizeMode: "cover"}}
              />
            </View>
            <View style={{flex: 1, paddingLeft:10, paddingTop:10}}>
              <Text>{this.props.name}</Text>
            </View>
          </View>
        );
    }
}
export default CommunityModule;

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }
  })