import { API, graphqlOperation } from 'aws-amplify'
import { listPealArticles } from './../src/graphql/queries'
import { createPealArticle } from './../src/graphql/mutations'
import React, { useEffect, useState } from 'react'
import {
  View, Text, StyleSheet, TextInput, Button
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const initialState = {Title: '', Author: ''}

const ArticlesPage = () => {
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
    <ScrollView>
        <View style={styles.container}>
        <TextInput
            onChangeText={val => setInput('Title', val)}
            style={styles.input}
            value={formState.Title} 
            placeholder="Title"
        />
        <TextInput
            onChangeText={val => setInput('Author', val)}
            style={styles.input}
            value={formState.Author}
            placeholder="Author"
        />
        <Button title="Create article" onPress={addArticle} /> 
        {
            articles.map((article, index) => (
            <View key={article.id ? article.id : index} style={styles.article}>
                <Text style={styles.articleTitle}>{article.Title}</Text>
                <Text style={styles.articleTitle}>{article.Author}</Text>
                <Text>{article.ArticleText}</Text>
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
  articleTitle: { fontSize: 18 }
})

export default ArticlesPage