import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Button, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-eva-icons';
import { Auth } from 'aws-amplify';
import COLORS from "../Colors";

function ProfilePage({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* <View style={{ alignSelf: "center", marginTop: 40 }}>
                    <View style={styles.profileImage}>
                        <Image source={{ uri: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" }} style={styles.image} resizeMode="center" />
                    </View>
                </View> */}
                <View style={styles.extraView}>
                    <View style={styles.infoContainer}>
                        <Text style={[styles.text, { fontWeight: "700", fontSize: 36, marginTop: 24 }]}>Profile</Text>
                        {/* <Text style={[styles.text, { color: "#AEB5BC", fontWeight: "400", fontSize: 14 }]}>@comingsoon</Text> */}
                    </View>
                    <View style={styles.infoContainer2}>
                        <Text style={[styles.text, { fontWeight: "400", fontSize: 20, marginTop: 0 }]}>Learn more about your insights!</Text>
                        {/* <Text style={[styles.text, { color: "#AEB5BC", fontWeight: "400", fontSize: 14 }]}>@comingsoon</Text> */}
                    </View>
                </View>
                {/* <View style={styles.statsContainer}>
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
                </View> */}
                <Text style={[styles.subText, styles.recent]}>Interests</Text>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.categoryContainer}>
                        <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('Details')}>
                            <View style={styles.categoryIcon}>
                                <Icon name='compass-outline' width={40} height={40} fill={COLORS.primary} />
                            </View>
                            <Text style={styles.categoryText}>Nature</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('Details')}>
                            <View style={styles.categoryIcon}>
                                <Icon name='gift-outline' width={40} height={40} fill={COLORS.primary} />
                            </View>
                            <Text style={styles.categoryText}>Self-Care</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('Details')}>
                            <View style={styles.categoryIcon}>
                                <Icon name='color-palette-outline' width={40} height={40} fill={COLORS.primary} />
                            </View>
                            <Text style={styles.categoryText}>Creative</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.categoryContainer}>
                        <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('Details')}>
                            <View style={styles.categoryIcon}>
                                <Icon name='book-open-outline' width={40} height={40} fill={COLORS.primary} />
                            </View>
                            <Text style={styles.categoryText}>Journal</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('Details')}>
                            <View style={styles.categoryIcon}>
                                <Icon name='eye-outline' width={40} height={40} fill={COLORS.primary} />
                            </View>
                            <Text style={styles.categoryText}>Meditation</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('Details')}>
                            <View style={styles.categoryIcon}>
                                <Icon name='people-outline' width={40} height={40} fill={COLORS.primary} />
                            </View>
                            <Text style={styles.categoryText}>Social</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={[styles.subText, styles.recent]}>Saved Insights</Text>
                <View style={{ marginTop: 16 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.mediaImageContainer}>
                            <Image source={{ uri: "https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" }} style={styles.image} resizeMode="cover" />
                        </View>
                        <View style={styles.mediaImageContainer}>
                            <Image source={{ uri: "https://images.unsplash.com/photo-1519160558534-579f5106e43f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" }} style={styles.image} resizeMode="cover" />
                        </View>
                        <View style={styles.mediaImageContainer}>
                            <Image source={{ uri: "https://images.unsplash.com/photo-1438109382753-8368e7e1e7cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" }} style={styles.image} resizeMode="cover" />
                        </View>
                    </ScrollView>
                    {/* <View style={styles.recentItem}>
                        <View style={styles.activityIndicator}></View>
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "white", fontWeight: "300" }]}>
                                Meditated <Text style={{ fontWeight: "600" }}>3 days</Text> this week.
                            </Text>
                        </View>
                    </View> */}

                    {/* <View style={styles.recentItem}>
                        <View style={styles.activityIndicator}></View>
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "white", fontWeight: "300" }]}>
                                Commented on a post about <Text style={{ fontWeight: "600" }}>depression</Text>
                            </Text>
                        </View>
                    </View> */}
                </View>
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
        backgroundColor: COLORS.lightaccent,
    },
    extraView: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.primary,
        paddingBottom: 16,
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
        fontWeight: "500"
    },
    profileImage: {
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
        marginLeft: 16,
        marginTop: 32,
        marginBottom: 6,
    },
    infoContainer2: {
        marginLeft: 16,
        marginTop: 0,
        marginBottom: 0,
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
        marginHorizontal: 12
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
        marginLeft: 16,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 28,
        fontWeight: "700"
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
    },
    categoryContainer: {
        flexDirection: "row",
        width: "96%",
        alignSelf: "center",
        marginTop: 16,
        marginBottom: 10,
    },
    categoryButton: {
        flex: 1,
        width: "30%",
        marginHorizontal: 8,
        alignSelf: "center",
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: "center",
        justifyContent: "space-evenly",
        alignSelf: "center",
        width: 90,
        height: 90,
        backgroundColor: COLORS.brightblue,
        borderRadius: 50
    },
    categoryText: {
        alignSelf: "center",
        marginTop: 12,
        fontSize: 18,
        color: COLORS.primary,
        fontWeight: "bold",
    }
});

export default ProfilePage;

