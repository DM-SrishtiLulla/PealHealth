import { API, graphqlOperation } from 'aws-amplify'
import { listGoals, listInsights } from './../src/graphql/queries'
import { createInsight } from './../src/graphql/mutations'
import React, { useEffect, useState } from 'react'
import {
  View, Text, StyleSheet, TextInput, Button, Image
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


const InsightsPage = () => {
  const [insights, setInsights] = useState([])

  useEffect(() => {
    fetchInsights()
  }, [])

  async function fetchInsights() {
    try {
      const insightData = await API.graphql(graphqlOperation(listInsights))
      const insights = insightData.data.listInsights.items
      console.log(insights)
      setInsights(insights)
    } catch (err) { console.log('error fetching insights') }
  }

  /*async function addInsight() {
    try {
      const goal = { ...formState }
      setGoals([...goals, goal])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createGoal, {input: goal}))
    } catch (err) {
      console.log('error creating goal:', err)
    }
  }*/

  return (
    <ScrollView>
        <View style={styles.container}>
        {/* <TextInput
            onChangeText={val => setInput('GoalText', val)}
            style={styles.input}
            value={formState.GoalText} 
            placeholder="GoalText"
        />
        <TextInput
            onChangeText={val => setInput('ImageLink', val)}
            style={styles.input}
            value={formState.ImageLink}
            placeholder="ImageLink"
        />
        <Button title="Create goal" onPress={addGoal} />  */}
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
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  identity: {  marginBottom: 15 },
  input: { height: 50, backgroundColor: '#ddd', marginBottom: 10, padding: 8 },
  identityTitle: { fontSize: 18 }
})

export default InsightsPage