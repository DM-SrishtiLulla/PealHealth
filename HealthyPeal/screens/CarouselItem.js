import React from 'react'
import { View, SafeAreaView, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Button } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Icon } from 'react-native-eva-icons';
import COLORS from "../Colors";

const { width, height } = Dimensions.get('window')


const CarouselItem = ({item}) => {
    return (
        <SafeAreaView style={styles.cardView}>
            <Image style={styles.image} source={{ uri: item.ImageLink }} />
            <View style={styles.textView}>
                {/* <Text style={styles.itemTitle}>{item.InsightText}</Text> */}
                <Text style={styles.itemDescription}>{item.InsightText}</Text>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Icon style={styles.icon} name='heart-outline' width={36} height={36} fill={COLORS.calmpink} />
                    </View>
                </TouchableOpacity>
                {/* <Text style={styles.itemDescription}>{item.description2}</Text>
                <Text style={styles.itemDescription}>{item.description3}</Text>
                <Text style={styles.itemDescription}>{item.description4}</Text> */}
                {/* <Text style={styles.itemAuthor}>By {item.author}</Text> */}
            </View>
        </SafeAreaView>
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
        color: "white",
        fontSize: 56,
        fontWeight: "bold",
        elevation: 5
    },
    itemDescription: {
        color: "white",
        fontWeight: "bold",
        fontSize: 24,
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
        width: 64,
        height: 64,
        marginTop: 440,
        marginLeft: "70%",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 100,
        backgroundColor: "white",
        borderColor: "white"
    },
    icon: {
        marginTop: 14,
    }
})

export default CarouselItem;