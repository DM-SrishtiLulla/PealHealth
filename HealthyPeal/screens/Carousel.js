import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated } from 'react-native'
import CarouselItem from './CarouselItem'
import COLORS from "../Colors";


const { width, height } = Dimensions.get('window')

const scrollX = new Animated.Value(0)
let position = Animated.divide(scrollX, width)

const Carousel = ({data}) => {
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
                        return <CarouselItem item={item} />
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }]
                    )}
                />

               
            </View>
        )
    }

    console.log('Please provide Images')
    return null
};

export default Carousel;

const styles = StyleSheet.create({
    container: {backgroundColor: COLORS.lightaccent, paddingBottom: 0 },
    dotView: { flexDirection: 'row', justifyContent: 'center' }
})