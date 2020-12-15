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
//import Share from "react-native-share";
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

const myCustomShare = async() => {
  const shareOptions = {
    message: "I've been using this great app, Peal! Join the beta here: https://testflight.apple.com/join/1aMZKaW6",
  }
  try {
    const ShareResponse = Share.open(shareOptions);
  } catch(error) {
    console.log("Error", error)
  }
};

export default function MorePage({ navigation }) {

  return (

        <ScrollView style={{backgroundColor: "#f5f5f5"}} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Mera –– Health
                    </Text>
                </View>
          <Text style={{ color: "black", fontFamily: "Cochin", fontSize: 40, fontWeight: "700", marginTop: 10, marginBottom: 10, alignSelf: "center", fontWeight: "500", }}>
            More
      </Text>
          <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
            <Text style={{ color: "black", fontSize: 28, fontWeight: "700", fontFamily: "Cochin" }}>
              Crisis Resources
                </Text>
            <Text style={{ color: "black", fontSize: 20, fontWeight: "400", marginTop: "2%", marginBottom: "10%", fontFamily: "Avenir" }}>
              Call or text in for help.
                </Text>
              <Button 
                size="giant"
                style={styles.button1}
                onPress={() =>
                  navigation.navigate('Resources')
                }>
                <Text style={{ color: "black", fontSize: 24, fontWeight: "500", fontFamily: "Avenir" }}>Crisis Resources</Text>
              </Button>
              <Button title="Sign Out" style={styles.button1}
                      onPress={signOut}>
                <Text style={{ color: "black", height: 40, fontSize: 24, fontWeight: "500", fontFamily: "Avenir" }}>Sign Out</Text>
              </Button>
              <Button onPress={myCustomShare} style={styles.button1}>
              <Text style={{ color: "black", height: 40, fontSize: 24, fontWeight: "500", fontFamily: "Avenir" }}>Invite Friends</Text>
              </Button>
            </View>
        </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, paddingTop: 80, backgroundColor: "#f7f7f7" },
  todo: { marginBottom: 15 },
  header: {
    backgroundColor: "black",
    height: 100,
    color: "white",
    alignItems: "center",
},
headerText: {
    color: "white",
    fontSize: 28,
    marginTop: "12%",
    fontWeight: "400",
    fontFamily: "Cochin",
},
  input: { height: 70, backgroundColor: '#ddd', marginTop: 10, marginBottom: 10, padding: 8 },
  todoName: { fontSize: 18 },
  button1: {
    flex: 0.5,
    marginTop: "7%",
    alignSelf: "center",
    width: 240,
    color: "black",
    backgroundColor: "#f7f7f7",
    borderColor: "#bfbdc1",
  },
});