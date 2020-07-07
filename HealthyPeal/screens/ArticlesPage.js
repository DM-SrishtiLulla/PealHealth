// import React, { useEffect, useState } from 'react'
// import {
//   View, Text, StyleSheet, TextInput, Button
// } from 'react-native'

// import { API, graphqlOperation } from 'aws-amplify'
// import { createArticles } from './../src/graphql/mutations'
// import { listArticles } from './../src/graphql/queries'
// import { ScrollView } from 'react-native-gesture-handler'

// const initialState = { ID: 0, Title: ''}

// const ArticlesPage = () => {
//   const [formState, setFormState] = useState(initialState)
//   const [articles, setArticles] = useState([])

//   useEffect(() => {
//     fetchArticles()
//   }, [])

//   function setInput(key, value) {
//     setFormState({ ...formState, [key]: value })
//   }

//   async function fetchArticles() {
//     try {
//       const articleData = await API.graphql(graphqlOperation(listArticles))
//       const articles = articleData.data.listArticles.items
//       setArticles(articles)
//     } catch (err) { console.log('error fetching articles') }
//   }

//   async function addArticle() {
//     try {
//       const article = { ...formState }
//       setArticles([...articles, article])
//       setFormState(initialState)
//       await API.graphql(graphqlOperation(createArticles, {input: article}))
//     } catch (err) {
//       console.log('error creating article:', err)
//     }
//   }

//   return (
//     <ScrollView>
//         <View style={styles.container}>
//         <TextInput
//             onChangeText={val => setInput('ID', val)}
//             style={styles.input}
//             value={formState.ID} 
//             placeholder="ID"
//         />
//         <TextInput
//             onChangeText={val => setInput('Title', val)}
//             style={styles.input}
//             value={formState.Title}
//             placeholder="Title"
//         />
//         <Button title="Create article" onPress={addArticle} /> 
//         {
//             articles.map((article, index) => (
//             <View key={article.ID ? article.ID : index} style={styles.article}>
//                 <Text style={styles.articleTitle}>{article.Title}</Text>
//                 <Text>{article.ArticleText}</Text>
//             </View>
//             ))
//         }
//         </View>
//     </ScrollView>
//   )
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', padding: 20 },
//   article: {  marginBottom: 15 },
//   input: { height: 50, backgroundColor: '#ddd', marginBottom: 10, padding: 8 },
//   articleTitle: { fontSize: 18 }
// })

// export default ArticlesPage