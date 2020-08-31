import { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from './../src/graphql/queries'
import { createPost } from './../src/graphql/mutations'
import React, { useEffect, useState } from 'react'
import {
  View, Text, StyleSheet, TextInput, Button, Image
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const initialState = {PostText: '', ImageLink: ''}

const ArticlesPage = () => {
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
    } catch (err) { console.log('error fetching articles') }
  }

  async function addPost() {
    try {
      const post = { ...formState }
      setPosts([...posts, post])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createPost, {input: post}))
    } catch (err) {
      console.log('error creating post:', err)
    }
  }

  return (
    <ScrollView>
        <View style={styles.container}>
        <TextInput
            onChangeText={val => setInput('PostText', val)}
            style={styles.input}
            value={formState.PostText} 
            placeholder="Add a message!"
        />
        <TextInput
            onChangeText={val => setInput('ImageLink', val)}
            style={styles.input}
            value={formState.ImageLink}
            placeholder="Add an image! (use image address)"
        />
        <Button title="Create post" onPress={addPost} /> 
        {
            posts.map((post, index) => (
            <View key={post.ID ? post.ID : index} style={styles.identity}>
                <Text style={styles.identityTitle}>{post.PostText}</Text>
                <Image source={{ uri: post.PostLink }} style={{height : 10, width: 10}}/>
            </View>
            ))
        }
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  article: {  marginBottom: 15 },
  input: { height: 50, backgroundColor: '#ddd', marginBottom: 10, padding: 8 },
  articleTitle: { fontSize: 18 },
  identity: { color: "white", }
})

export default ArticlesPage