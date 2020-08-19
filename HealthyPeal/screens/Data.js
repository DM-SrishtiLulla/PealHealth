import React, { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listInsights } from './../src/graphql/queries'
import {
  View, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView, ImageBackground
} from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import COLORS from "../Colors";

const [insights, setInsights] = useState([])

  useEffect(() => {
    fetchInsights()
  }, [])

  async function fetchInsights() {
    try {
      const insightData = await API.graphql(graphqlOperation(listInsights))
      const insights = insightData.data.listInsights.items
      setInsights(insights)
    } catch (err) { console.log('error fetching interests') }
  }

  export const dummyData = insights;


/*export const dummyData =
        [{
                title: 'Grounding, Literally', url: 'https://images.unsplash.com/photo-1506056820413-f8fa4de15de6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
                author: "Asha",
                description: "Take a breath and firmly press your feet into the ground. Center yourself to your physical space.",
                description2: "When you're done, swipe for more!",
                id: 1

        },
        {
                title: 'Knotted Up', url: 'https://images.unsplash.com/photo-1521729839347-131a32f9abcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
                description: "Cross your legs and arms. Remember you have control over your body.",
                author: "Asha",
                id: 2
        },
        {
                title: 'Pulse Check', url: "https://images.unsplash.com/photo-1557682257-2f9c37a3a5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
                description: 'Feel your wrist to find your pulse. Count the beats per minute, out loud or in your head.',
                author: "Asha",
                id: 3
        },
        {
                title: 'Levels', url: 'https://images.unsplash.com/photo-1527842180052-cad6d8291174?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
                description: "Change levels. Do the opposite of whatever you are doing, whether that be sitting or standing.",
                author: "Asha",
                id: 4
        },
        {
                title: 'Quicksand Visualization', url: 'https://images.unsplash.com/photo-1530086504-a846971115c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
                description: "Imagine being stuck in quicksand. Remind yourself that you can stay afloat through rest and acceptance.",
                author: "Asha",
                id: 5
        },
        {
                title: 'Beach Ball Visualization', url: 'https://images.unsplash.com/photo-1542167373-01a0624eb5b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
                description: "Imagine pushing a beach ball into water. It keeps popping back up. Accepting reality or the existence of thoughts can help you calm down the waves.",
                author: "Asha",
                id: 6
        }]
        // {
        //         title: 'Food inside a Bowl', url: 'https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg',
        //         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        //         author: "Asha",
        //         id: 7
        // },
        // {
        //         title: 'Food inside a Bowl', url: 'https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg',
        //         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        //         author: "Asha",
        //         id: 8
        // },
        // {
        //         title: 'Food inside a Bowl', url: 'https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg',
        //         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        //         author: "Asha",
        //         id: 9
        // },
        // {
        //         title: 'Food inside a Bowl', url: 'https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg',
        //         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        //         author: "Asha",
        //         id: 10
        // },
        // {
        //         title: 'Food inside a Bowl', url: 'https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg',
        //         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        //         author: "Asha",
        //         id: 11
        // },
        // {
        //         title: 'Food inside a Bowl', url: 'https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg',
        //         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        //         author: "Asha",
        //         id: 12
        // },
        // {
        //         title: 'Food inside a Bowl', url: 'https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg',
        //         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        //         author: "Asha",
        //         id: 13
        // },
        // {
        //         title: 'Vegatable Salad', url: 'https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg',
        //         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        //         author: "Asha",
        //         id: 14
        // }]*/