import { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from './../src/graphql/queries'
import { createPost } from './../src/graphql/mutations'
import React, { useEffect, useState } from 'react'
import { Icon } from 'react-native-eva-icons';
import { useIsFocused } from '@react-navigation/native';


//import { ScrollView } from 'react-native-gesture-handler'
import {
    View,
    StyleSheet,
    SafeAreaView,
    TextInput,
    ScrollView,
    Image,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import { Layout, Text, Button } from '@ui-kitten/components';
import COLORS from '../Colors';
import Card from './Card';

const { height, width } = Dimensions.get("window")

const initialState = { PostText: '', ImageLink: '' }

export default function CommunityPage({ navigation }) {

    const [formState, setFormState] = useState(initialState)
    const [posts, setPosts] = useState([])
    const isFocused = useIsFocused();


    useEffect(() => {
        if (isFocused) {
          fetchPosts()
        }
      }, [isFocused]);

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
        <ScrollView style={{backgroundColor: "#f5f5f5", fontFamily: "Cochin"}}>
        <View style={styles.header}>
            <Text style={styles.headerText}>
                Median –– Health
            </Text>
        </View>
            <View style={{ flex: 1 }}>
                <Text style={{ marginTop: 20, fontSize: 40, fontFamily: "Cochin", alignSelf: "center", fontWeight: "500", color: "black" }}>Community</Text>
                <View style={{
                    height: 80, backgroundColor: "#f5f5f5",
                    borderBottomWidth: 1, borderBottomColor: "#bfbdc1",
                }}>
                    <View style={{
                        flexDirection: "row", padding: 10,
                        backgroundColor: "#f5f5f5", marginHorizontal: 30,
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.2,
                        elevation: 1,
                        marginTop: 20
                    }}>
                        <Icon name='search-outline' width={24} height={24} fill={"#bfbdc1"} />
                        <TextInput
                            placeholder="Try Meditation"
                            placeholderTextColor={"#bfbdc1"}
                            style={{ flex: 1, fontWeight: "700", backgroundColor: "#f5f5f5" }}
                        />
                    </View>
                </View>
                    <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                        <Text style={{ color: "black", fontFamily: "Cochin", fontSize: 32, fontWeight: "500" }}>
                            Welcome!
                        </Text>
                        <Text style={{ color: "black", fontFamily: "Avenir", fontSize: 16, fontWeight: "300", marginTop: 4 }}>
                            Check out our guides and inspirational posts
                        </Text>
                        <Text style={{ color: "black", fontFamily: "Cochin", fontSize: 24, marginTop: 20, fontWeight: "700" }}>
                            COVID-19 Anxiety Support
                        </Text>
                        <Text style={{ color: "black", fontSize: 16, fontFamily: "Avenir", fontWeight: "300", marginTop: 4 }}>
                            Mental health tips for the pandemic
                        </Text>
                        <View style={{ width: width - 40, height: 240, marginTop: 20 }}>
                            <Image source={{ uri: "https://images.unsplash.com/photo-1590417961276-2f4f5e9f6227?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" }}
                                style={{
                                    flex: 1, height: null, width: null, resizeMode: "cover",
                                    borderRadius: 5, borderWidth: 1,
                                    borderColor: "#f5f5f5"
                                }}
                            />
                        </View>
                    </View>
                    <Button
            style={{flex: 1,
                marginTop: 10,
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: "#f7f7f7",
                borderColor: "black",
                width: "90%",
                alignSelf: "center",}}
            onPress={() =>
              navigation.navigate('Guides')
            }
            >
            <Text style={{fontSize: 20, fontFamily: "Avenir", fontWeight: "500", color: "black"
                        }}>COVID-19 Anxiety Guide</Text>
          </Button>
          <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                        <Text style={{ color: "black", fontFamily: "Cochin", fontSize: 26, fontWeight: "700" }}>
                            Positive Thinking
                        </Text>
                        <Text style={{ color: "black", fontSize: 16, fontFamily: "Avenir", fontWeight: "300", marginTop: 4 }}>
                            Try the ABCDE Technique
                        </Text>
                        <View style={{ width: width - 40, height: 240, marginTop: 10 }}>
                            <Image source={{ uri: "https://images.unsplash.com/photo-1505769542637-a892c7381a3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" }}
                                style={{
                                    flex: 1, height: null, width: null, resizeMode: "cover",
                                    borderRadius: 5, borderWidth: 1,
                                    borderColor: "#f5f5f5"
                                }}
                            />
                        </View>
                    </View>
                    <Button
            style={{
            flex: 1,
            marginTop: 10,
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: "#f7f7f7",
            borderColor: "black",
            width: "90%",
            alignSelf: "center",}}
            onPress={() =>
              navigation.navigate('Guides2')
            }
            >
            <Text style={{fontSize: 20, fontFamily: "Avenir", fontWeight: "500", color: "black"
                        }}>Thought Pattern Guide</Text>
          </Button>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{
                            fontSize: 24, fontFamily: "Cochin", fontWeight: "500",
                            paddingHorizontal: 20, color: "black"
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
    categoryContainer: {
        flexDirection: "row",
        width: "90%",
        alignSelf: "center",
        marginTop: 25,
        marginBottom: 10,
    },
    categoryButton: {
        flex: 1,
        width: "30%",
        marginHorizontal: 20,
        alignSelf: "center",
    },
    categoryIcon: {
       borderWidth: 0,
       alignItems: "center",
       justifyContent: "space-evenly",
       alignSelf: "center",
       width: 70,
       height: 70,
       backgroundColor: COLORS.calmpink,
       borderRadius: 50
   },
   categoryText: {
       alignSelf: "center",
       marginTop: 5,
       fontSize: 16,
       color: "black",
       fontWeight: "bold",
   }
  })