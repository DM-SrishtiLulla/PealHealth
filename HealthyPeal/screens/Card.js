import React, { useEffect, useState } from 'react'
import { Icon } from 'react-native-eva-icons';

//import { ScrollView } from 'react-native-gesture-handler'
import {
    View,
    StyleSheet,
    SafeAreaView,
    TextInput,
    ScrollView,
    Image,
    Dimensions,
} from "react-native";
import { Layout, Text, Button } from '@ui-kitten/components';
import COLORS from '../Colors';
const {height, width} = Dimensions.get("window")

export default function Card(props) {
    return (
        <View style={{width:width/2 - 30, height: width/2 - 30, marginVertical: 10, borderWidth:0.5, borderColor:COLORS.secondary}}>
            <View style={{flex: 2}}>
                <Image source={{uri: props.ImageLink}}
                style={{flex: 1, height : null, width: null, resizeMode: "cover",
                }}/>
            </View>
            <View style={{flex: 1, alignItems:"flex-start", justifyContent: "space-evenly", paddingLeft: 10, backgroundColor:COLORS.lightaccent}}>
                <Text style={{fontSize: 16, fontWeight: "bold", color: COLORS.primary}}>{props.Title}</Text>
                <Text style={{fontSize: 12, fontWeight: "bold", color: COLORS.primary}}>{props.Author}</Text>
            </View>
        </View>
    );
}