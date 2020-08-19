import { API, graphqlOperation } from 'aws-amplify'
import { listInterests } from './../src/graphql/queries'
import { createInterest } from './../src/graphql/mutations'
import React, { useEffect, useState } from 'react'
import {
  View, Text, StyleSheet, TextInput, Button, Image
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const initialState = {InterestText: '', ImageLink: ''}

const InterestsPage = () => {
  const [formState, setFormState] = useState(initialState)
  const [interests, setInterests] = useState([])

  useEffect(() => {
    fetchInterests()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchInterests() {
    try {
      const interestData = await API.graphql(graphqlOperation(listInterests))
      const interests = interestData.data.listInterests.items
      setInterests(interests)
    } catch (err) { console.log('error fetching interests') }
  }

  async function addInterest() {
    try {
      const interest = { ...formState }
      setInterests([...interests, interest])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createInterest, {input: interest}))
    } catch (err) {
      console.log('error creating interest:', err)
    }
  }

  return (
    <ScrollView>
        <View style={styles.container}>
        <TextInput
            onChangeText={val => setInput('InterestText', val)}
            style={styles.input}
            value={formState.InterestText} 
            placeholder="InterestText"
        />
        <TextInput
            onChangeText={val => setInput('ImageLink', val)}
            style={styles.input}
            value={formState.ImageLink}
            placeholder="ImageLink"
        />
        <Button title="Create interest" onPress={addInterest} /> 
        {
            interests.map((interest, index) => (
            <View key={interest.ID ? interest.ID : index} style={styles.identity}>
                <Text style={styles.identityTitle}>{interest.InterestText}</Text>
                <Image source={{ uri: interest.ImageLink }} style={{height : 200, width: 200}}/>
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

export default InterestsPage