import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated, TouchableOpacity } from 'react-native'
import CarouselItem from './CarouselItem'
import COLORS from "../Colors";


const { width, height } = Dimensions.get('window')

const scrollX = new Animated.Value(0)
let position = Animated.divide(scrollX, width)

const Carousel = ({data, navigation}) => {
    if (data && data.length) {
        return (
            <View style={styles.container}>
                <FlatList data={data}
                ref = {(flatList) => {this.flatList = flatList}}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <CarouselItem item={item} navigation={navigation}/>
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }]
                    )}
                />
                {/* <TouchableOpacity>
                    <View>
                        <Text style={styles.buttonText}>More Info</Text>
                    </View>
                </TouchableOpacity> */}
            </View>
        )
    }

    console.log('Please provide Images')
    return null
};

export default Carousel;

const styles = StyleSheet.create({
    container: {backgroundColor: COLORS.lightaccent, paddingBottom: "10%", alignItems: "center" },
    dotView: { flexDirection: 'row', justifyContent: 'center' },
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
        fontWeight: "400",
        // alignContent: "flex-end",
        alignSelf: "center",
    }
})