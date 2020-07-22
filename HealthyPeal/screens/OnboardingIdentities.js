import React, { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listIdentitys } from './../src/graphql/queries'
import {
  View, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView, ImageBackground
} from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import LottieView from 'lottie-react-native';
import COLORS from "../Colors";

export default function OnboardingIdentities({ navigation }) {
  // const [goals, setGoals] = useState([
  //   {goal: "manage stress", key: "1"},
  //   {goal: "reduce anxiety", key: "2"},
  //   {goal: "process grief", key: "3"},
  //   {goal: "release anger", key: "4"},
  //   {goal: "raise self-esteem", key: "5"},
  //   {goal: "love your body", key: "6"},
  // ]);

  const [identitys, setIdentitys] = useState([])

  useEffect(() => {
    fetchIdentitys()
  }, [])

  async function fetchIdentitys() {
    try {
      const identityData = await API.graphql(graphqlOperation(listIdentitys))
      const identitys = identityData.data.listIdentitys.items
      setIdentitys(identitys)
    } catch (err) { console.log('error fetching identitys') }
  }


  const [data, setData] = useState([
    { id: 1, title: "Women", color: "#FF4500", members: 8, image: "https://img.icons8.com/color/70/000000/name.png", backimage: "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" },
    { id: 1, title: "Men", color: "#87CEEB", members: 6, image: "https://img.icons8.com/office/70/000000/home-page.png", backimage: "https://images.unsplash.com/photo-1511207538754-e8555f2bc187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80" },
    { id: 2, title: "LGBTQ+", color: "#4682B4", members: 12, image: "https://img.icons8.com/color/70/000000/two-hearts.png", backimage: "https://images.unsplash.com/photo-1532157277712-8771574c33b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80" },
    { id: 3, title: "Teen", color: "#6A5ACD", members: 5, image: "https://img.icons8.com/dusk/64/000000/family.png", backimage: "https://images.unsplash.com/photo-1475694867812-f82b8696d610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80" },
    { id: 4, title: "BIPOC", color: "#FF69B4", members: 6, image: "https://img.icons8.com/color/70/000000/groups.png", backimage: "https://images.unsplash.com/photo-1489619243109-4e0ea59cfe10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" },
    { id: 5, title: "Spiritual", color: "#00BFFF", members: 7, image: "https://img.icons8.com/color/70/000000/classroom.png", backimage: "https://images.unsplash.com/photo-1513438205128-16af16280739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80 " },
    { id: 6, title: "Immigrant", color: "#00FFFF", members: 8, image: "https://img.icons8.com/dusk/70/000000/checklist.png", backimage: "https://images.unsplash.com/flagged/photo-1554443877-b2ea8132bab7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" },
    { id: 8, title: "65+", color: "#20B2AA", members: 23, image: "https://img.icons8.com/dusk/70/000000/globe-earth.png", backimage: "https://images.unsplash.com/photo-1517826005156-6ecfa14b62dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80" },
    // {id:9, title: "Remember", color:"#191970", members:45, image:"https://img.icons8.com/color/70/000000/to-do.png"} ,
    // {id:9, title: "Game",     color:"#008080", members:13, image:"https://img.icons8.com/color/70/000000/basketball.png"} ,
  ])

  // return (
  //   <View style={styles.onboarding}>
  //     <FlatList
  //     data={goals}
  //     numColumns={2}
  //     horizontal={false}
  //     renderItem={({item}) => (
  //       <Text style={styles.item}>{item.goal}</Text>
  //       )}
  //     />
  //   </View>
  // )
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Join communities </Text>
      <FlatList style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={identitys}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => {
          return item.ID;
        }}
        renderItem={({ item }) => {
          return (
            // <TouchableOpacity style={[styles.card, { backgroundColor: item.color }]}>
            <TouchableOpacity style={[styles.card]}>

              <ImageBackground source={{ uri: item.ImageLink }} style={styles.image}>
                <View style={styles.cardHeader}>
                  <Text style={styles.title}>{item.IdentityText}</Text>
                </View>
                {/* <Image style={styles.cardImage} source={{uri:item.image}}/> */}
                <View style={styles.cardFooter}>
                  {/* <Text style={styles.subTitle}>{item.members} members</Text> */}
                </View>
              </ImageBackground>
            </TouchableOpacity>
          )
        }} />
      <Button
        size="giant"
        style={styles.buttonbottom}
        onPress={() =>
          navigation.navigate('Goals')
        }>
        <Text style={styles.buttontext}>Next</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    marginBottom: 0,
    backgroundColor: COLORS.primary,
  },
  list: {
    //paddingHorizontal: 5,
    backgroundColor: COLORS.primary,
  },
  listContainer: {
    alignItems: 'center',
  },
  /******** card **************/
  card: {
    marginHorizontal: 5,
    marginVertical: 5,
    flexBasis: '47%',
    borderRadius: 30,
    height: 140,
    width: 130
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardImage: {
    height: 70,
    width: 70,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    flex: 1,
    marginTop: 30,
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center",
    color: COLORS.primary,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 12,
    flex: 1,
    color: "#FFFFFF",
  },
  icon: {
    height: 20,
    width: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    opacity: 0.7
  },
  buttonbottom: {
    flex: 0.5,
    marginBottom: "10%",
    alignSelf: "center",
    width: 200,
    backgroundColor: COLORS.lightaccent
  },
  buttontext: {
    fontSize: 30,
    fontWeight: "800",
    color: COLORS.primary
  },
  head: {
    flex: 1,
    color: COLORS.lightaccent,
    // marginLeft: 20,
    // marginTop: 10,
    marginBottom: 10,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 10,
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "800",
    color: COLORS.lightaccent
  }
});