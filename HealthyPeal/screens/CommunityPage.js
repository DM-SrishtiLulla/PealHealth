import { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from './../src/graphql/queries'
import { createPost } from './../src/graphql/mutations'
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
const { height, width } = Dimensions.get("window")

const initialState = { PostText: '', ImageLink: '' }

export default function CommunityPage({ navigation }) {

    const [formState, setFormState] = useState(initialState)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchPosts()
    }, [])

    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }

    async function fetchPosts() {
        try {
            const postData = await API.graphql(graphqlOperation(listPosts))
            const posts = postData.data.listPosts.items
            setPosts(posts)
        } catch (err) { console.log('error fetching posts') }
    }

    async function addPost() {
        try {
            const post = { ...formState }
            setPosts([...posts, post])
            setFormState(initialState)
            await API.graphql(graphqlOperation(createPost, { input: post }))
        } catch (err) {
            console.log('error creating post:', err)
        }
    }
    return (
        // HEADERS FOR PAGE - see below for content 
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <View style={{ flex: 1 }}>
                <Text style={{ marginTop: 40, fontSize: 32, alignSelf: "center", fontWeight: "bold", color: COLORS.lightaccent }}>Community</Text>
                <View style={{
                    height: 80, backgroundColor: COLORS.primary,
                    borderBottomWidth: 1, borderBottomColor: COLORS.lightaccent
                }}>
                    <View style={{
                        flexDirection: "row", padding: 10,
                        backgroundColor: COLORS.primary, marginHorizontal: 30,
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.2,
                        elevation: 1,
                        marginTop: 20
                    }}>
                        <Icon name='search-outline' width={24} height={24} fill={COLORS.darkaccent} />
                        <TextInput
                            placeholder="Try Meditation"
                            placeholderTextColor={COLORS.darkaccent}
                            style={{ flex: 1, fontWeight: "700", backgroundColor: COLORS.primary }}
                        />
                    </View>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}>


                    <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                        <Text style={{ color: COLORS.lightaccent, fontSize: 24, fontWeight: "700" }}>
                            Introducing Peal Community
                        </Text>
                        <Text style={{ color: COLORS.lightaccent, fontWeight: "300", marginTop: 10 }}>
                            A space for compassionate conversation
                        </Text>
                        <View style={{ width: width - 40, height: 240, marginTop: 20 }}>
                            <Image source={{ uri: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80" }}
                                style={{
                                    flex: 1, height: null, width: null, resizeMode: "cover",
                                    borderRadius: 5, borderWidth: 1,
                                    borderColor: COLORS.secondary
                                }}
                            />
                        </View>
                    </View>
                    <Button
            size="giant"
            style={{flex: 0.5, marginTop: "5%",
                alignSelf: "center",
                width: width - 40,
                backgroundColor: COLORS.lightaccent,
                borderColor: COLORS.primary}}
            onPress={() =>
              navigation.navigate('Post!')
            }>
            Add a post!
          </Button>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{
                            fontSize: 24, fontWeight: "800",
                            paddingHorizontal: 20, color: COLORS.lightaccent
                        }}>
                            New Posts!
                        </Text>
                        <View style={{
                            paddingHorizontal: 20, marginTop: 10, flexDirection: "row", flexWrap: "wrap",
                            justifyContent: "space-between"
                        }}>
                            {/* ACTUAL CONTENT GOES HERE */}
                            {/* WHERE OUR AWS MAP GOES */}

                            {
                                posts.map((post, index) => (


                                    <View key={post.id ? post.id : index}>
                                        <Card ImageLink={post.ImageLink || "https://images.unsplash.com/photo-1523459178261-028135da2714?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80"}
                                            PostText={post.PostText} />

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
