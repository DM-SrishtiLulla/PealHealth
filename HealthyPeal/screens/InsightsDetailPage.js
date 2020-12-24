import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  FlatList,
  Dimensions,
  Animated,
  ColorPropType,
} from "react-native";
import { Avatar, Button, ListItem, Layout, Text, Divider } from '@ui-kitten/components';
import COLORS from '../Colors';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Icon } from 'react-native-eva-icons';
import { Auth } from 'aws-amplify'

const { height, width } = Dimensions.get("window")

export default function InsightsDetailPage({ route, navigation }) {

    const { InsightText, ImageLink, id, goalID } = route.params;
    console.log(id)

    //const image = {uri: "https://images.unsplash.com/photo-1590367514834-9647133f3ae4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"};
  
    return (
        <View style={{backgroundColor: "#f5f5f5", flex: 1}}>
            <ImageBackground
                source={{uri: ImageLink}}
                style={styles.image}
                imageStyle={{borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}
                >
                {/* <TouchableOpacity style={styles.button1}>
                    <Icon style={styles.icon2} name='arrow-ios-back-outline'width={32} height={32} fill={"black"} />
                </TouchableOpacity> */}
                {/* <Text style={styles.tagline}>Discover Switzerland</Text> */}
            <Text style={styles.placename}>{InsightText}</Text>
            </ImageBackground>
            <TouchableOpacity style={styles.info}>
                <Icon style={styles.icon} name='heart-outline' width={32} height={32} fill={"white"} />
            </TouchableOpacity>
            <ScrollView>
                <Text style={{color: "black", padding: 14, fontSize: 24, fontWeight: "500"}}>
                    About Meditation
                </Text>
                <Text style={{color: "black", paddingHorizontal: 16, fontSize: 18, fontFamily: "Avenir", fontWeight: "normal", justifyContent: "flex-start", textAlign: "justify", lineHeight: 24, paddingBottom: 12}}>
                Why create a small daily meditation practice? There are countless reasons! Meditation relieves stress and helps you to relax. When you practice mindfulness, you can carry it out to everyday life.
                </Text>
                <Text style={{color: "black", paddingHorizontal: 16, fontSize: 18, fontFamily: "Avenir", fontWeight: "normal", justifyContent: "flex-start", textAlign: "justify", lineHeight: 24, paddingBottom: 12}}>
                Meditation has been shown to have mental benefits, such as improved focus, happiness, memory, self-control, academic performance and more. Some research on meditation has indicated that it may have other health benefits, including improved metabolism, heart rate, respiration, blood pressure and more.
                </Text>
                <Text style={{color: "black", paddingHorizontal: 16, fontSize: 18, fontFamily: "Avenir", fontWeight: "normal", justifyContent: "flex-start", textAlign: "justify", lineHeight: 24, paddingBottom: 12}}>
                It's important to start small and focus on your breath. Being mindful of your body during meditation can help you focus your attention. A quiet space can also be helpful.
                </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 10, paddingTop: 0, backgroundColor: "#f5f5f5" },
    image: {
        height: 400,
        justifyContent: "flex-end",
    },
    tagline: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 16,
        marginVertical: 8
    },
    placename: {
        color: "white",
        fontSize: 32,
        fontWeight: "bold",
        paddingHorizontal: 16,
        marginBottom: 56,
        fontFamily: "Cochin",
    },
    info: {
        position: "absolute",
        right: 12,
        top: 362,
        backgroundColor: COLORS.calmpink,
        padding: 18,
        borderRadius: 80
    },
    infotext: {
        color: "white",
        fontSize: 20,
    },
    button1: {
        width: 56,
        height: 56,
        marginLeft: 20,
        marginBottom: 140,
        alignItems: "center",
        borderRadius: 40,
        backgroundColor: "#f5f5f5",
        borderColor: "#f5f5f5"
    },
    icon: {
        marginVertical: 0,
    },
    icon2: {
        marginVertical: 12,
    }

  });
    // <View style={styles.container}>
    //   <SafeAreaView style={{ flex: 1, color: COLORS.lightaccent }}>
    //     <ScrollView showsVerticalScrollIndicator={false}>
    //       <Text style={{ color: "white", fontSize: 32, fontWeight: "700", marginTop: 10, marginBottom: 10, paddingHorizontal: 2 }}>
    //         More
    //   </Text>
    //       <View style={{ marginTop: 10, paddingHorizontal: 4 }}>
    //         <Text style={{ color: "black", fontSize: 28, fontWeight: "700" }}>
    //           Crisis Resources
    //             </Text>
    //         <Text style={{ color: "black", fontSize: 20, fontWeight: "400", marginTop: 10 }}>
    //           Call or text in for help.
    //             </Text>
    //         <View style={{ width: width - 50, height: 400, marginTop: 20 }}>
    //           <Image
    //             source={{ uri: "https://images.unsplash.com/photo-1487499648633-2ade40e0f769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" }}
    //             style={{
    //               flex: 1, height: null, width: null, resizeMode: "cover",
    //               borderRadius: 5, borderWidth: 1,
    //               borderColor: COLORS.secondary
    //             }}
    //           />
    //           <Button
    //             size="giant"
    //             style={{ marginTop: 20, marginBottom: 0, backgroundColor: COLORS.darkaccent, borderColor: COLORS.lightaccent }}>
    //             <Text style={{ color: "black", fontSize: 24, fontWeight: "500" }}>Info</Text>
    //           </Button>

    //         </View>
    //         </View>
    //     </ScrollView>
    //   </SafeAreaView>
    // </View>

    // <View style={{backgroundColor: COLORS.brightblue, flex: 1}}>
    //         <ImageBackground
    //             source={image}
    //             style={styles.image}
    //             imageStyle={{borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}
    //             >
    //             {/* <TouchableOpacity style={styles.button1}>
    //                 <Icon style={styles.icon2} name='arrow-ios-back-outline'width={32} height={32} fill={"black"} />
    //             </TouchableOpacity> */}
    //             {/* <Text style={styles.tagline}>Discover Switzerland</Text> */}
    //             <Text style={styles.placename}>Meditate for 3 minutes before you get into bed</Text>
    //         </ImageBackground>
    //         <TouchableOpacity style={styles.info}>
    //             <Icon style={styles.icon} name='heart-outline' width={32} height={32} fill={"black"} />
    //         </TouchableOpacity>
    //         <ScrollView>
    //             <Text style={{color: "black", padding: 14, fontSize: 24, fontWeight: "bold"}}>
    //                 About Meditation
    //             </Text>
    //             <Text style={{color: "black", paddingHorizontal: 16, fontSize: 18, fontWeight: "normal", justifyContent: "flex-start", textAlign: "justify", lineHeight: 24, paddingBottom: 12}}>
    //             Why create a small daily meditation practice? There are countless reasons! Meditation relieves stress and helps you to relax. When you practice mindfulness, you can carry it out to everyday life.
    //             </Text>
    //             <Text style={{color: "black", paddingHorizontal: 16, fontSize: 18, fontWeight: "normal", justifyContent: "flex-start", textAlign: "justify", lineHeight: 24, paddingBottom: 12}}>
    //             Meditation has been shown to have mental benefits, such as improved focus, happiness, memory, self-control, academic performance and more. Some research on meditation has indicated that it may have other health benefits, including improved metabolism, heart rate, respiration, blood pressure and more.
    //             </Text>
    //             <Text style={{color: "black", paddingHorizontal: 16, fontSize: 18, fontWeight: "normal", justifyContent: "flex-start", textAlign: "justify", lineHeight: 24, paddingBottom: 12}}>
    //             It's important to start small and focus on your breath. Being mindful of your body during meditation can help you focus your attention. A quiet space can also be helpful.
    //             </Text>
    //         </ScrollView>
    //     </View>