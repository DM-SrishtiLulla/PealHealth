import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Button, TouchableOpacity, Dimensions } from "react-native";
import CardFlip from "react-native-card-flip";
import { Icon } from 'react-native-eva-icons';
import COLORS from "../Colors";
import { Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native'

const { width, height } = Dimensions.get('window')

/*async function onSignOutClick() {
    await Auth.signOut()
        .then(data => console.log(data))
        .catch(err => console.log(err));
}*/

async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}


//export default 
function ProfilePage() {

    function signOut() {
        Auth.signOut()
          .then(() => {
            props.onStateChange('signedOut', null);
          })
          .catch(err => {
            console.log('err: ', err)
          })
      }
    
    return (
        <SafeAreaView style={styles.container}>
        <CardFlip style={styles.cardContainer} ref={card => (this.card = card)}>
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.card, styles.card1]}
            onPress={() => this.card.flip()}>
            <Text style={styles.label}>AB</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.card, styles.card2]}
            onPress={() => this.card.flip()}>
            <Text style={styles.label}>CD</Text>
          </TouchableOpacity>
        </CardFlip>
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.lightaccent,
        },
        cardContainer: {
          width: width - 20,
          height: height / 1.35,
        },
        card: {
          width: width - 40,
          height: height / 1.45,
          backgroundColor: '#FE474C',
          borderRadius: 5,
          shadowColor: 'rgba(0,0,0,0.5)',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.5,
          backgroundColor: 'white',
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
          marginBottom: 80,
          borderRadius: 10,
          shadowRadius: 3,
          elevation: 5,
        },
        card1: {
          backgroundColor: '#FE474C',
        },
        card2: {
          backgroundColor: '#FEB12C',
        },
        label: {
          lineHeight: 470,
          textAlign: 'center',
          fontSize: 55,
          fontFamily: 'System',
          color: '#ffffff',
          backgroundColor: 'transparent',
        },
      });

export default withAuthenticator(ProfilePage)


