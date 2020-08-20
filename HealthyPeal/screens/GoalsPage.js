import { API, graphqlOperation } from 'aws-amplify'
import { listGoals } from './../src/graphql/queries'
import { createGoal } from './../src/graphql/mutations'
import React, { useEffect, useState } from 'react'
import {
  View, Text, StyleSheet, TextInput, Button, Image
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const initialState = {GoalText: '', ImageLink: ''}

const GoalsPage = () => {
  const [formState, setFormState] = useState(initialState)
  const [goals, setGoals] = useState([])

  useEffect(() => {
    fetchGoals()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchGoals() {
    try {
      const goalData = await API.graphql(graphqlOperation(listGoals))
      const goals = goalData.data.listGoals.items
      setGoals(goals)
    } catch (err) { console.log('error fetching goals') }
  }

  async function addGoal() {
    try {
      const goal = { ...formState }
      setGoals([...goals, goal])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createGoal, {input: goal}))
    } catch (err) {
      console.log('error creating goal:', err)
    }
  }

  return (
    <ScrollView>
        <View style={styles.container}>
        <TextInput
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
        <Button title="Create goal" onPress={addGoal} /> 
        {
            goals.map((goal, index) => (
            <View key={goal.ID ? goal.ID : index} style={styles.identity}>
                <Text style={styles.identityTitle}>{goal.GoalText}</Text>
                <Image source={{ uri: goal.ImageLink }} style={{height : 200, width: 200}}/>
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

export default GoalsPage