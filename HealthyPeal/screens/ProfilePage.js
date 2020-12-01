import React, { useState } from 'react';
import {
  View, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, SafeAreaView
} from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import COLORS from "../Colors";
import { Icon } from 'react-native-eva-icons';

const image = { uri: "https://bit.ly/2KLUfqR" };

export default function ProfilePage({ navigation }) {
    return (
                <ScrollView style={{backgroundColor: "#f5f5f5"}}>
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
                            YOUR INFO
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
                    <View style={styles.container5}>
                        <Text style={styles.title2} category='h1'>
                            Your interests, identities, and goals matter. They shape your life. Your interests, identities, and goals matter. They shape your life.
                        </Text>
                    </View>
                    <View style={styles.container6}>
                    <Text style={styles.title4} category='h1'>
                        <Icon name='gift-outline' width={24} height={23} fill="black" />
                        Thing
                        </Text>
                        <Text style={styles.title4} category='h1'>
                        <Icon name='activity-outline' width={24} height={24} fill="black" />
                            Thing 2
                        </Text>
                        <Text style={styles.title4} category='h1'>
                        <Icon name='umbrella-outline' width={24} height={24} fill="black" />
                            Thing 3
                        </Text>
                        <Button
                            style={styles.otherbutton}
                            onPress={() =>
                            navigation.navigate('Dashboard')
                            }>
                            <Text style={styles.title2}>DISCOVER ACTIVITIES</Text>
                        </Button>
                    </View>
                    <View style={styles.container8}>
                        <Text style={styles.title2} category='h1'>
                            TODAY
                        </Text>
                    </View>
                    <View style={styles.container5}>
                        <Text style={styles.title2} category='h1'>
                            Your interests, identities, and goals matter. They shape your life.
                        </Text>
                    </View>
                    <View style={styles.container5}>
                        <Text style={styles.title2} category='h1'>
                            Your interests, identities, and goals matter. They shape your life. Your interests, identities, and goals matter. They shape your life.
                        </Text>
                    </View>
                    <View style={styles.container6}>
                        <Button
                            style={styles.otherbutton}
                            onPress={() =>
                            navigation.navigate('Community')
                            }>
                            <Text style={styles.title2}>COMMUNITY UPDATES</Text>
                        </Button>
                    </View>
                </ScrollView>
    );
}
    
const styles = StyleSheet.create({
    header: {
        backgroundColor: "black",
        height: 100,
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
        marginTop: 30,
        backgroundColor: "#f5f5f5",
        alignItems: "flex-start",
    },
    container3: {
        flex: 1,
        marginTop: 20,
        backgroundColor: "#f5f5f5",
        alignItems: "flex-start",
        borderBottomWidth: 1,
        borderColor: "#bfbdc1"
    },
    container4: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: "#f7f7f7",
        alignItems: "flex-start",
    },
    container5: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: "#f7f7f7",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    container6: {
        flex: 1,
        paddingBottom: 20,
        backgroundColor: "#f7f7f7",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    container7: {
        flex: 1,
        borderTopColor: "#bfbdc1",
        borderWidth: 1,
        borderBottomWidth: 0,
        justifyContent: "flex-end",
    },
    container8: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: "#f5f5f5",
        alignItems: "flex-start",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#bfbdc1"
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
    otherbutton: {
        marginTop: 20,
        alignSelf: "center",
        alignItems: "flex-start",
        marginBottom: 0,
        backgroundColor: "#f7f7f7",
        borderColor: "#bfbdc1",
        width: "95%",
        borderTopWidth: 1,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },
    buttonbottom: {
        marginTop: 20,
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
    title4: {
        color: "black",
        alignContent: "center",
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 20,
        fontWeight: "300",
        fontFamily: "Avenir",
    },
    image: {
        height: 1500,
        width: "100%",
    }
});