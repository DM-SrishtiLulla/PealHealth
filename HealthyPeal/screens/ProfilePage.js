import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Button } from "react-native";
import { Icon } from 'react-native-eva-icons';
import { Auth } from 'aws-amplify';
import COLORS from "../Colors";
import { withAuthenticator } from 'aws-amplify-react-native'


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
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignSelf: "center", marginTop: 10 }}>
                    <View style={styles.profileImage}>
                        <Image source={{ uri: "https://images.unsplash.com/photo-1594270410221-e6a33cbc6fb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" }} style={styles.image} resizeMode="center" />
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "400", fontSize: 24 }]}>Coming Soon</Text>
                    <Text style={[styles.text, { color: "#AEB5BC", fontWeight: "400", fontSize: 14 }]}>@comingsoon</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>48</Text>
                        <Text style={[styles.text, styles.subText]}>Activities</Text>
                    </View>
                    <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <Text style={[styles.text, { fontSize: 24 }]}>20</Text>
                        <Text style={[styles.text, styles.subText]}>Posts</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>103</Text>
                        <Text style={[styles.text, styles.subText]}>Comments</Text>
                    </View>
                </View>

                <View style={{ marginTop: 32 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.mediaImageContainer}>
                            <Image source={{ uri: "https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" }} style={styles.image} resizeMode="cover" />
                        </View>
                        <View style={styles.mediaImageContainer}>
                            <Image source={{ uri: "https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" }} style={styles.image} resizeMode="cover" />
                        </View>
                        <View style={styles.mediaImageContainer}>
                            <Image source={{ uri: "https://images.unsplash.com/photo-1438109382753-8368e7e1e7cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" }} style={styles.image} resizeMode="cover" />
                        </View>
                    </ScrollView>
                </View>
                <Text style={[styles.subText, styles.recent]}>Recent Activity</Text>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.recentItem}>
                        <View style={styles.activityIndicator}></View>
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "white", fontWeight: "300" }]}>
                                Meditated <Text style={{ fontWeight: "600" }}>3 days</Text> this week.
                            </Text>
                        </View>
                    </View>

                    <View style={styles.recentItem}>
                        <View style={styles.activityIndicator}></View>
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "white", fontWeight: "300" }]}>
                                Commented on a post about <Text style={{ fontWeight: "600" }}>depression</Text>
                            </Text>
                        </View>
                    </View>
                </View>
                <Button title="Sign Out" onPress={signOut}></Button>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title2: {
        color: COLORS.primary,
        justifyContent: "center",
        // alignContent: "center",
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 20,
        fontSize: 30,
        fontWeight: "bold",
    },
    buttonbottom: {
        marginTop: -10,
        alignSelf: "center",
        backgroundColor: COLORS.lightaccent
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.darkprimary,
    },
    text: {
        fontFamily: "HelveticaNeue",
        color: "white"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    subText: {
        fontSize: 12,
        color: "white",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        width: 130,
        height: 130,
        marginTop: 20,
        borderRadius: 130,
        resizeMode: "cover",
        overflow: "hidden"
    },
    dm: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    active: {
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 28,
        left: 10,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 0
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    mediaCount: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: "50%",
        marginTop: -50,
        marginLeft: 30,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.38)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
        shadowOpacity: 1
    },
    recent: {
        marginLeft: 64,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 14
    },
    recentItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16
    },
    activityIndicator: {
        backgroundColor: "#CABFAB",
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    }
});

export default withAuthenticator(ProfilePage)


