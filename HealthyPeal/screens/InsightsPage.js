import { API, graphqlOperation } from 'aws-amplify'
import { listInsights } from './../src/graphql/queries'
import { createInsight } from './../src/graphql/mutations'
import React, { useEffect, useState } from 'react'
import {
  View, Text, StyleSheet, TextInput, Button, Image, SafeAreaView
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const initialState = {InsightText: '', ImageLink: ''}

const InsightsPage = () => {
  const [formState, setFormState] = useState(initialState)
  const [insights, setInsights] = useState([])

  useEffect(() => {
    fetchInsights()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchInsights() {
    try {
      const insightData = await API.graphql(graphqlOperation(listInsights))
      const insights = insightData.data.listInsights.items
      setInsights(insights)
    } catch (err) { console.log('error fetching insights') }
  }

  async function addInsight() {
    try {
      const insight = { ...formState }
      setInsights([...insights, insight])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createInsight, {input: insight}))
    } catch (err) {
      console.log('error creating insight:', err)
    }
  }

  return (
    <SafeAreaView>
    <ScrollView>
        <View style={styles.container}>
        <TextInput
            onChangeText={val => setInput('InsightText', val)}
            style={styles.input}
            value={formState.InsightText} 
            placeholder="InsightText"
        />
        <TextInput
            onChangeText={val => setInput('ImageLink', val)}
            style={styles.input}
            value={formState.ImageLink}
            placeholder="ImageLink"
        />
        <Button title="Create insight" onPress={addInsight} /> 
        {
            insights.map((insight, index) => (
            <View key={insight.ID ? insight.ID : index} style={styles.identity}>
                <Text style={styles.identityTitle}>{insight.InsightText}</Text>
                <Image source={{ uri: insight.ImageLink }} style={{height : 200, width: 200}}/>
            </View>
            ))
        }
        </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  identity: {  marginBottom: 30 },
  input: { height: 50, backgroundColor: '#ddd', marginBottom: 10, padding: 8 },
  identityTitle: { fontSize: 18 }
})

export default InsightsPage