import { API, graphqlOperation } from 'aws-amplify'
import { listPealArticles } from './../src/graphql/queries'
import { createPealArticle } from './../src/graphql/mutations'
import React, { useEffect, useState } from 'react'
import { Icon } from 'react-native-eva-icons';

//import { ScrollView } from 'react-native-gesture-handler'
import {
    View,
    StyleSheet,
    SafeAreaView,
    TextInput,
    ScrollView,
    Image,
    Dimensions,
} from "react-native";
import { Layout, Text, Button } from '@ui-kitten/components';
import COLORS from '../Colors';
import Card from './Card';
const {height, width} = Dimensions.get("window")


const initialState = {Title: '', Author: ''}








export default function CardsTesting({ navigation }) {

    const [formState, setFormState] = useState(initialState)
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetchArticles()
    }, [])

    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }

    async function fetchArticles() {
        try {
        const articleData = await API.graphql(graphqlOperation(listPealArticles))
        const articles = articleData.data.listPealArticles.items
        setArticles(articles)
        } catch (err) { console.log('error fetching articles') }
    }

    async function addArticle() {
        try {
        const article = { ...formState }
        setArticles([...articles, article])
        setFormState(initialState)
        await API.graphql(graphqlOperation(createPealArticle, {input: article}))
        } catch (err) {
        console.log('error creating article:', err)
        }
    }
    return (
        // HEADERS FOR PAGE - see below for content 
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary}}>
            <View style={{flex: 1}}>
                <Text style={{marginTop: 40, fontSize: 32, alignSelf: "center", fontWeight: "bold"}}>Community</Text>
                <View style={{height:80, backgroundColor: COLORS.primary,
                borderBottomWidth: 1, borderBottomColor: COLORS.secondary}}>
                    <View style={{flexDirection:"row", padding: 10,
                    backgroundColor:COLORS.primary, marginHorizontal: 30,
                    shadowOffset: { width: 0, height: 0},
                    shadowOpacity: 0.2,
                    elevation: 1,
                    marginTop: 20
                    }}>
                    <Icon name='search-outline' width={24} height={24} fill={COLORS.lightaccent}/>
                    <TextInput
                    placeholder="Try Meditation"
                    placeholderTextColor={COLORS.lightaccent}
                    style={{flex: 1, fontWeight: "700", backgroundColor:COLORS.primary}}
                    />
                    </View>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <View style={{marginTop: 40, paddingHorizontal: 20}}>
                        <Text style={{color: COLORS.darkaccent, fontSize: 24, fontWeight: "700"}}>
                        Introducing Peal Community
                        </Text>
                        <Text style={{color: COLORS.darkaccent, fontWeight: "300", marginTop: 10}}>
                        A space for compassionate conversation
                        </Text>
                        <View style={{width:width-40, height:240, marginTop: 20}}>
                            <Image source={{uri: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80"}}
                                style={{flex: 1, height : null, width: null, resizeMode: "cover",
                                borderRadius: 5, borderWidth: 1,
                            borderColor: COLORS.secondary}}
                                />
                        </View>
                    </View>
                    <View style={{marginTop: 40}}>
                        <Text style={{fontSize: 24, fontWeight: "700",
                        paddingHorizontal: 20}}>
                        Spaces for conversation
                        </Text>
                        <View style={{paddingHorizontal: 20, marginTop: 20, flexDirection: "row", flexWrap: "wrap",
                            justifyContent: "space-between"}}>
        {/* ACTUAL CONTENT GOES HERE */}
                        {/* WHERE OUR AWS MAP GOES */}

                            {
                                articles.map((article, index) => (
                                
                                
                                <View key={article.id ? article.id : index}>
                                    <Card ImageLink={article.ImageLink || "https://images.unsplash.com/photo-1523459178261-028135da2714?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80"}
                                    Title={article.Title}
                                    Author={article.Author}/>
                                    
                                </View>
                                ))
                            }
                            
                        </View>
                    </View>
                </ScrollView>

            </View>
        </SafeAreaView>
    );
}