import { API, graphqlOperation } from 'aws-amplify'
import { listIdentitys } from './../src/graphql/queries'
import { createIdentity } from './../src/graphql/mutations'
import React, { useEffect, useState } from 'react'
import {
  View, Text, StyleSheet, TextInput, Button
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const initialState = {IdentityText: '', ImageLink: ''}

const IdentitiesPage = () => {
  const [formState, setFormState] = useState(initialState)
  const [identitys, setIdentitys] = useState([])

  useEffect(() => {
    fetchIdentitys()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchIdentitys() {
    try {
      const identityData = await API.graphql(graphqlOperation(listIdentitys))
      const identitys = identityData.data.listIdentitys.items
      setIdentitys(identitys)
    } catch (err) { console.log('error fetching identitys') }
  }

  async function addIdentity() {
    try {
      const identity = { ...formState }
      setIdentitys([...identitys, identity])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createIdentity, {input: identity}))
    } catch (err) {
      console.log('error creating identity:', err)
    }
  }

  return (
    <ScrollView>
        <View style={styles.container}>
        <TextInput
            onChangeText={val => setInput('IdentityText', val)}
            style={styles.input}
            value={formState.IdentityText} 
            placeholder="IdentityText"
        />
        <TextInput
            onChangeText={val => setInput('ImageLink', val)}
            style={styles.input}
            value={formState.ImageLink}
            placeholder="ImageLink"
        />
        <Button title="Create identity" onPress={addIdentity} /> 
        {
            identitys.map((identity, index) => (
            <View key={identity.ID ? article.ID : index} style={styles.identity}>
                <Text style={styles.identityTitle}>{identity.IdentityText}</Text>
                <Text style={styles.identityTitle}>{identity.ImageLink}</Text>
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

export default IdentitiesPage