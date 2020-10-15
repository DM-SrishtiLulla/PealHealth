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
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <View style={{ flex: 1 }}>
                <Text style={{ marginTop: 40, fontSize: 32, alignSelf: "center", fontWeight: "bold", color: COLORS.brightblue }}>Community</Text>
                <View style={{
                    height: 80, backgroundColor: COLORS.primary,
                    borderBottomWidth: 1, borderBottomColor: COLORS.brightblue
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
                        <Text style={{ color: COLORS.brightblue, fontSize: 32, fontWeight: "700" }}>
                            Peal Community
                        </Text>
                        <Text style={{ color: COLORS.brightblue, fontWeight: "300", marginTop: 10 }}>
                            Check out our guides and inspirational posts
                        </Text>
                        <Text style={{ color: COLORS.brightblue, fontSize: 24, marginTop: 20, fontWeight: "700" }}>
                            COVID-19 Anxiety Support
                        </Text>
                        <View style={{ width: width - 40, height: 240, marginTop: 20 }}>
                            <Image source={{ uri: "https://images.unsplash.com/photo-1590417961276-2f4f5e9f6227?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" }}
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
                width: width - 50,
                backgroundColor: COLORS.brightblue,
                borderColor: COLORS.primary}}
            onPress={() =>
              navigation.navigate('Guides')
            }
            >
            <Text style={{fontSize: 22, fontWeight: "800", color: COLORS.primary
                        }}>COVID-19 Anxiety Guide</Text>
          </Button>
          <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                        <Text style={{ color: COLORS.brightblue, fontSize: 24, fontWeight: "700" }}>
                            Positive Thinking
                        </Text>
                        <Text style={{ color: COLORS.brightblue, fontWeight: "300", marginTop: 10 }}>
                            Try the ABCDE Technique
                        </Text>
                        <View style={{ width: width - 40, height: 240, marginTop: 20 }}>
                            <Image source={{ uri: "https://images.unsplash.com/photo-1505769542637-a892c7381a3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" }}
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
                width: width - 50,
                backgroundColor: COLORS.brightblue,
                borderColor: COLORS.primary}}
            onPress={() =>
              navigation.navigate('Guides2')
            }
            >
            <Text style={{fontSize: 22, fontWeight: "800", color: COLORS.primary
                        }}>Thought Pattern Guide</Text>
          </Button>
          {/* <View style={styles.categoryContainer}>
              <TouchableOpacity style={styles.categoryButton} onPress={() => {}}>
                <View style={styles.categoryIcon}>
                    <Icon name='search-outline' width={24} height={24} fill={COLORS.primary} />
                </View>
                <Text style={styles.categoryText}>Inspiration</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryButton} onPress={() => {}}>
                <View style={styles.categoryIcon}>
                    <Icon name='search-outline' width={24} height={24} fill={COLORS.primary} />
                </View>
                <Text style={styles.categoryText}>Inspiration</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryButton} onPress={() => {}}>
                <View style={styles.categoryIcon}>
                    <Icon name='search-outline' width={24} height={24} fill={COLORS.primary} />
                </View>
                <Text style={styles.categoryText}>Inspiration</Text>
              </TouchableOpacity>
          </View> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={{
                            fontSize: 24, fontWeight: "800",
                            paddingHorizontal: 20, color: COLORS.brightblue
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

const styles = StyleSheet.create({
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
       color: COLORS.brightblue,
       fontWeight: "bold",
   }
  })