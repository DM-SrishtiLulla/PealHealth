import React, { useEffect, useState } from 'react'
import {
  View, Text, StyleSheet, TextInput, ScrollView, SafeAreaView,
} from 'react-native'
import { Avatar, Button, ListItem, Divider } from '@ui-kitten/components';
import COLORS from "../Colors";
//import { API, graphqlOperation } from 'aws-amplify'
//import { createTodo } from './../src/graphql/mutations'
//import { listTodos } from './../src/graphql/queries'

const InstallButton = (props) => (
  <Button size='tiny'>
    INSTALL
  </Button>
);

const ItemImage = (props) => (
  <Avatar
    {...props}
    style={[props.style, { tintColor: null }]}
  />
);

// const initialState = { name: '', description: '' }

const DatabaseTest = () => {
//   const [formState, setFormState] = useState(initialState)
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     fetchTodos()
//   }, [])

//   function setInput(key, value) {
//     setFormState({ ...formState, [key]: value })
//   }

//   async function fetchTodos() {
//     try {
//       const todoData = await API.graphql(graphqlOperation(listTodos))
//       const todos = todoData.data.listTodos.items
//       setTodos(todos)
//     } catch (err) { console.log('error fetching todos') }
//   }

//   async function addTodo() {
//     try {
//       const todo = { ...formState }
//       setTodos([...todos, todo])
//       setFormState(initialState)
//       await API.graphql(graphqlOperation(createTodo, {input: todo}))
//     } catch (err) {
//       console.log('error creating todo:', err)
//     }
//   }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{color:COLORS.primary}}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={{color:COLORS.darkaccent, fontSize:32, fontWeight:"700", marginBottom: 10, paddingHorizontal: 2 }}>
        More
      </Text>
      <ListItem
      style={{height:50}}
    title='Account Details'
    // description='A set of React Native components'
  />
  <Divider/>
  <ListItem
  style={{height:50}}
    title='Invite Friends'
    // description='A set of React Native components'
  />
  <Divider/>
  <ListItem
  style={{height:50, marginTop: 20}}
    title='Notifications'
    // description='A set of React Native components'
  />
  <Divider/>
  <ListItem
  style={{height:50}}
    title='Apple Health'
    // description='A set of React Native components'
  />
  <Divider/>
  <ListItem
  style={{height:50}}
    title='Activity'
    // description='A set of React Native components'
  />
  <Divider/>
  <ListItem
    style={{height:50, marginTop: 20}}
    title='Feedback'
    // description='A set of React Native components'
  />
  <Divider/>
  <ListItem
  style={{height:50}}
    title='Support'
    // description='A set of React Native components'
  />
  <Divider/>
  <ListItem
  style={{height:50}}
    title='About'
    // description='A set of React Native components'
  />
  <Divider/>
  <ListItem
  style={{height:50, marginTop: 20, marginBottom: 10}}
    title='Sign out'
    // description='A set of React Native components'
  />
  <Divider/>
      {/* <TextInput
        onChangeText={val => setInput('name', val)}
        style={styles.input}
        value={formState.name} 
        placeholder="Name"
      />
      <TextInput
        onChangeText={val => setInput('description', val)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <Button title="Create Todo" onPress={addTodo} />
      {
        todos.map((todo, index) => (
          <View key={todo.id ? todo.id : index} style={styles.todo}>
            <Text style={styles.todoName}>{todo.name}</Text>
            <Text>{todo.description}</Text>
          </View>
        ))
      } */}
      </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, marginTop: 80, color: COLORS.primary },
  todo: {  marginBottom: 15 },
  input: { height: 50, backgroundColor: '#ddd', marginTop: 10, marginBottom: 10, padding: 8 },
  todoName: { fontSize: 18 }
})

export default DatabaseTest;