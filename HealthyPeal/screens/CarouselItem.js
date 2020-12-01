import React from 'react'
import { View, SafeAreaView, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Button } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Icon } from 'react-native-eva-icons';
import COLORS from "../Colors";

const { width, height } = Dimensions.get('window')


const CarouselItem = ({item, navigation}) => {
    return (
        <View style={styles.cardView}>
            <TouchableOpacity 
                onPress={() => 
                    navigation.navigate('Details', {
                        InsightText: item.InsightText,
                        ImageLink: item.ImageLink,
                        id: item.id
                    })}>
                <Image style={styles.image} source={{ uri: item.ImageLink }} />
                <View style={styles.textView}>
                    {/* <Text style={styles.itemTitle}>{item.InsightText}</Text> */}
                    <Text style={styles.itemDescription}>{item.InsightText}</Text>
                    {/* <Button onPress={() => navigation.navigate('Details')}></Button> */}
                    {/* <Text style={styles.itemDescription}>{item.description2}</Text>
                    <Text style={styles.itemDescription}>{item.description3}</Text>
                    <Text style={styles.itemDescription}>{item.description4}</Text> */}
                    {/* <Text style={styles.itemAuthor}>By {item.author}</Text> */}
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width - 20,
        height: height / 1.35,
        backgroundColor: 'white',
        margin: 10,
        marginTop: 90,
        marginBottom: 80,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },

    textView: {
        position: 'absolute',
        top: 10,
        margin: 10,
        left: 5,
    },
    image: {
        width: width - 20,
        height: height / 1.35,
        borderRadius: 10
    },
    itemTitle: {
        color: "black",
        fontSize: 64,
        fontWeight: "bold",
        elevation: 5
    },
    itemDescription: {
        color: "black",
        fontFamily: "Cochin",
        fontWeight: "700",
        fontSize: 32,
        elevation: 5,
        marginTop: 30,
        marginHorizontal: 5
    },
    itemAuthor: {
        color: 'white',
        fontSize: 14,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        marginBottom: 10    
    },
    button: {
        flex: 0.5,
        alignSelf: "center",
        marginRight: 10,
        width: 160,
        borderRadius: 40,
        backgroundColor: COLORS.brightblue,
      },
    buttonText: {
        color: COLORS.primary,
        fontSize: 24,
        paddingBottom: 24,
        paddingTop: 12,
        paddingHorizontal: 8,
        fontWeight: "400",
        flex: 1,
        // alignContent: "flex-end",
        alignSelf: "center",
    }
})

export default CarouselItem;