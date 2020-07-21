import React from 'react'
import {View, Text} from 'react-native'
import Carousel from "./Carousel";
import { dummyData } from "./Data";


export default function ProfilePage({navigation}) {
    return (
        <View>
            <Carousel data = {dummyData}/>
        </View>
    )
};