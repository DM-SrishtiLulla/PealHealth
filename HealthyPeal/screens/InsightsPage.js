import { API, graphqlOperation } from 'aws-amplify'
import { listGoals, listInsights } from './../src/graphql/queries'
import { createInsight } from './../src/graphql/mutations'
import React, { useEffect, useState } from 'react'
import COLORS from "../Colors";

import {
  View, Text, StyleSheet, TextInput, Button, Image, FlatList, StatusBar, SafeAreaView, TouchableOpacity
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useIsFocused } from '@react-navigation/native';

const initialState = {InsightText: '', ImageLink: ''}


const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.GoalText}</Text>
  </TouchableOpacity>
);

const InsightsPage = () => {
  const [formState, setFormState] = useState(initialState)
  const [insights, setInsights] = useState([])
  const [goals, setGoals] = useState([])
  const isFocused = useIsFocused();
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    if (isFocused) {
      fetchGoals()
      fetchInsights()
    }
  }, [isFocused]);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  }; 

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

  async function fetchGoals() {
    try {
      const goalData = await API.graphql(graphqlOperation(listGoals))
      const goals = goalData.data.listGoals.items
      setGoals(goals)
    } catch (err) { console.log('error fetching goals') }
  }



  async function addInsight() {
    try {
      if (selectedId) {
        const insight = { ...formState, goalID: selectedId }
        setInsights([...insights, insight])
        setFormState(initialState)
        await API.graphql(graphqlOperation(createInsight, {input: insight}))
      }
      
    } catch (err) {
      console.log('error creating insight:', err)
    }
  }


  return (
    <ScrollView>
        <View style={styles.container}>
        <TextInput
            onChangeText={val => setInput('InsightText', val)}
            style={styles.input1}
            value={formState.InsightText} 
            placeholder="InsightText"
        />
        <TextInput
            onChangeText={val => setInput('ImageLink', val)}
            style={styles.input}
            value={formState.ImageLink}
            placeholder="ImageLink"
        />
        <SafeAreaView style={styles.container}>
          <FlatList
            data={goals}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            extraData={selectedId}
          />
        </SafeAreaView>
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
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, marginBottom: 20, },
  identity: {  marginTop: 30, marginBottom: 15 },
  input1: { height: 50, backgroundColor: '#ddd', marginBottom: 10, padding: 8, marginTop: 70 },
  input: { height: 50, backgroundColor: '#ddd', marginBottom: 10, padding: 8 },
  identityTitle: { fontSize: 18 },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
})

export default InsightsPage