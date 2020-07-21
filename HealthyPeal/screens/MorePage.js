import React, { useEffect, useState } from 'react'
import {
  View, Text, StyleSheet, TextInput, ScrollView, SafeAreaView,
} from 'react-native'
import { Avatar, Button, ListItem, Divider } from '@ui-kitten/components';
import COLORS from "../Colors";

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

export default function MorePage({ navigation }) {

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ color: COLORS.primary }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ color: COLORS.darkaccent, fontSize: 32, fontWeight: "700", marginBottom: 10, paddingHorizontal: 2 }}>
            More
      </Text>
          <ListItem
            style={{ height: 70 }}
            title='Account Details'
          // description='A set of React Native components'
          />
          <Divider />
          <ListItem
            style={{ height: 70 }}
            title='Invite Friends'
          // description='A set of React Native components'
          />
          <Divider />
          <ListItem
            style={{ height: 70, marginTop: 20 }}
            title='Notifications'
          // description='A set of React Native components'
          />
          <Divider />
          <ListItem
            style={{ height: 70 }}
            title='Apple Health'
          // description='A set of React Native components'
          />
          <Divider />
          <ListItem
            style={{ height: 70 }}
            title='Activity'
          // description='A set of React Native components'
          />
          <Divider />
          <ListItem
            style={{ height: 70, marginTop: 20 }}
            title='Feedback'
          // description='A set of React Native components'
          />
          <Divider />
          <ListItem
            style={{ height: 70 }}
            title='Support'
          // description='A set of React Native components'
          />
          <Divider />
          <ListItem
            style={{ height: 70 }}
            title='About'
          // description='A set of React Native components'
          />
          <Divider />
          <ListItem
            style={{ height: 70, marginTop: 20, marginBottom: 10 }}
            title='Sign out'
          // description='A set of React Native components'
          />
          <Divider />
          <Button
            size="giant"
            style={styles.button1}
            onPress={() =>
              navigation.navigate('CardsTesting')
            }>
            CardsTesting
          </Button>
          <Button
            size="giant"
            style={styles.button1}
            onPress={() =>
              navigation.navigate('IdentitiesPage')
            }>
            IdentitiesPage
          </Button>
          <Button
            size="giant"
            style={styles.button1}
            onPress={() =>
              navigation.navigate('ArticlesPage')
            }>
            ArticlesPage
          </Button>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, marginTop: 70, color: COLORS.primary },
  todo: { marginBottom: 15 },
  input: { height: 70, backgroundColor: '#ddd', marginTop: 10, marginBottom: 10, padding: 8 },
  todoName: { fontSize: 18 },
  button1: {
    flex: 0.5,
    marginBottom: "10%",
    alignSelf: "center",
    width: 200,
    color: COLORS.lightaccent
  },
});