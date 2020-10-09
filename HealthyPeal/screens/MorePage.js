import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  Animated,
  ColorPropType,
} from "react-native";
import { Avatar, Button, ListItem, Layout, Text, Divider } from '@ui-kitten/components';
import COLORS from '../Colors';
import { Auth } from 'aws-amplify'

const { height, width } = Dimensions.get("window")

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

async function onSignOutClick() {
  await Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}


export default function MorePage({ navigation }) {

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1, color: COLORS.lightaccent }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ color: "white", fontSize: 32, fontWeight: "700", marginTop: 10, marginBottom: 10, paddingHorizontal: 2 }}>
            More
      </Text>
          <View style={{ marginTop: 10, paddingHorizontal: 4 }}>
            <Text style={{ color: COLORS.primary, fontSize: 28, fontWeight: "700" }}>
              Crisis Resources
                </Text>
            <Text style={{ color: COLORS.primary, fontSize: 20, fontWeight: "400", marginTop: 10 }}>
              Call or text in for help.
                </Text>
            <View style={{ width: width - 50, height: 400, marginTop: 20 }}>
              <Image
                source={{ uri: "https://images.unsplash.com/photo-1487499648633-2ade40e0f769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" }}
                style={{
                  flex: 1, height: null, width: null, resizeMode: "cover",
                  borderRadius: 5, borderWidth: 1,
                  borderColor: COLORS.secondary
                }}
              />
              <Button
                size="giant"
                style={{ marginTop: 20, marginBottom: 0, backgroundColor: COLORS.darkaccent, borderColor: COLORS.lightaccent }}
                onPress={() =>
                  navigation.navigate('Resources')
                }>
                <Text style={{ color: COLORS.primary, fontSize: 24, fontWeight: "500" }}>Crisis Resources</Text>
              </Button>
              <Button title="Sign Out" style={{ marginTop: 20, marginBottom: 20, backgroundColor: COLORS.darkaccent, borderColor: COLORS.lightaccent }}
                      onPress={signOut}>
                <Text style={{ color: COLORS.primary, fontSize: 24, fontWeight: "500" }}>Sign Out</Text>
              </Button>
            </View>
          </View>
          {/* <ListItem
            style={{ height: 70, marginTop: 20 }}
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
          <Divider /> */}
          {/* <Button
            size="giant"
            style={styles.button1}
            onPress={() =>
              navigation.navigate('CardsTesting')
            }>
            CardsTesting
          </Button> */}
          {/* <Button
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
              navigation.navigate('GoalsPage')
            }>
            GoalsPage
          </Button>
          <Button
            size="giant"
            style={styles.button1}
            onPress={() =>
              navigation.navigate('InterestsPage')
            }>
            InterestsPage
          </Button>
          <Button
            size="giant"
            style={styles.button1}
            onPress={() =>
              navigation.navigate('InsightsPage')
            }>
            InsightsPage
          </Button> */}
          {/* <Button
            size="giant"
            style={styles.button1}
            onPress={() =>
              navigation.navigate('ArticlesPage')
            }>
            Add a post!
          </Button> */}
          <Button
            size="giant"
            style={styles.button1}
            onPress={() =>
              navigation.navigate('InsightsPage')
            }>
            InassightsmadPage
          </Button>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, paddingTop: 80, backgroundColor: COLORS.lightaccent },
  todo: { marginBottom: 15 },
  input: { height: 70, backgroundColor: '#ddd', marginTop: 10, marginBottom: 10, padding: 8 },
  todoName: { fontSize: 18 },
  button1: {
    flex: 0.5,
    marginBottom: "10%",
    alignSelf: "center",
    width: 200,
    color: "white"
  },
});