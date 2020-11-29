import React, { useState } from 'react';
import {
  View, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, SafeAreaView
} from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import LottieView from "lottie-react-native";
import COLORS from "../Colors";

const image = { uri: "https://bit.ly/2KLUfqR" };

export default function DailyPage({ navigation }) {
    return (
        <ImageBackground source={image} style={styles.image}>
                <ScrollView style={{backgroundColor: "#ecf1ec"}}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Median –– Health
                    </Text>
                </View>
                {/* <View style={styles.container}>
                    </View> */}
                    <View style={styles.container2}>
                        <Text style={styles.title} category='h1'>
                            Hello, Asha
                        </Text>
                    </View>
                    <View style={styles.container3}>
                        <Text style={styles.title2} category='h1'>
                            YOUR STATS
                        </Text>
                    </View>
                    <View style={styles.container4}>
                        <Text style={styles.title} category='h1'>
                            You are strong, loved, and valid.
                        </Text>
                    </View>
                    <View style={styles.container5}>
                        <Text style={styles.title2} category='h1'>
                            Your interests, identities, and goals matter. They shape your life.
                        </Text>
                    </View>
                    <View style={styles.container7}>
                        <Button
                            size="giant"
                            style={styles.buttonbottom}
                            onPress={() =>
                            navigation.navigate('Identities')
                            }>
                            <Text style={styles.title2}>CONTINUE</Text>
                        </Button>
                    </View>
                </ScrollView>
        </ImageBackground>
    );
}
    
const styles = StyleSheet.create({
    header: {
        backgroundColor: "black",
        height: "12%",
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
    container2: {
        flex: 1,
        marginTop: "5%",
        backgroundColor: "#ecf1ec",
        alignItems: "flex-start",
    },
    container3: {
        flex: 1,
        marginTop: "4%",
        alignItems: "flex-start",
        backgroundColor: "#ecf1ec",
        borderBottomWidth: 1,
        borderColor: "#bfbdc1"
    },
    container4: {
        flex: 1,
        marginTop: "5%",
        alignItems: "flex-start",
    },
    container5: {
        flex: 1,
        marginTop: "3%",
        alignItems: "flex-start",
    },
    container7: {
        flex: 1,
        justifyContent: "flex-end",
    },
    list: {
    //paddingHorizontal: 5,
    // backgroundColor:"#E6E6E6",
    },
    listContainer: {
        alignItems: 'center'
    },
    subTitle: {
        fontSize: 12,
        flex: 1,
        color: "black",
    },
    icon: {
        height: 20,
        width: 20,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    buttonbottom: {
        marginTop: "80%",
        alignSelf: "center",
        marginBottom: 0,
        backgroundColor: "black",
        width: "80%",
        borderWidth: 0,
    },
    title: {
        color: "black",
        justifyContent: "flex-start",
        textAlign: "left",
        marginTop: 0,
        marginBottom: 0,
        marginHorizontal: 20,
        fontSize: 36,
        fontWeight: "400",
        fontFamily: "Cochin",
        marginLeft: 20,
    },
    title3: {
        color: "black",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 0,
        fontSize: 20,
        fontWeight: "200",
        fontFamily: "Avenir",
    },
    bold: {
        color: "black",
        marginTop: 0,
        marginBottom: 0,
        fontSize: 40,
        fontWeight: "600",
        fontFamily: "Cochin",
    },
    title2: {
        color: "black",
        // alignContent: "center",
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 16,
        fontWeight: "300",
        fontFamily: "Avenir",
    },
    image: {
        height: 1500,
        width: "100%",
    }
});