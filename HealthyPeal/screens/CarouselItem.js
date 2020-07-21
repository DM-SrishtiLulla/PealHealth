import React from 'react'
import { View, SafeAreaView, StyleSheet, Text, Image, Dimensions } from 'react-native'
import COLORS from "../Colors";

const { width, height } = Dimensions.get('window')


const CarouselItem = ({item}) => {
    return (
        <SafeAreaView style={styles.cardView}>
            <Image style={styles.image} source={{ uri: item.url }} />
            <View style={styles.textView}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <Text style={styles.itemDescription}>{item.description2}</Text>
                <Text style={styles.itemDescription}>{item.description3}</Text>
                <Text style={styles.itemDescription}>{item.description4}</Text>
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
        marginTop: 100,
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
        color: COLORS.primary,
        fontSize: 56,
        shadowColor: COLORS.darkaccent,
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
    },
    itemDescription: {
        color: COLORS.primary,
        fontWeight: "bold",
        fontSize: 32,
        shadowColor: COLORS.darkaccent,
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        marginTop: 30
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
    }
})

export default CarouselItem;