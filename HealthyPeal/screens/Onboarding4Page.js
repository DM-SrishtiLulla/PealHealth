
import React, { useState }  from 'react';
import {
    View, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView, ImageBackground
  } from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import LottieView from 'lottie-react-native';
import COLORS from "../Colors";

export default function Onboarding4Page({ navigation }) {
    // const [goals, setGoals] = useState([
    //   {goal: "manage stress", key: "1"},
    //   {goal: "reduce anxiety", key: "2"},
    //   {goal: "process grief", key: "3"},
    //   {goal: "release anger", key: "4"},
    //   {goal: "raise self-esteem", key: "5"},
    //   {goal: "love your body", key: "6"},
    // ]);
  
    const [data, setData] = useState([
        {id:1, title: "Meditation",        color:"#FF4500", members:8,  image:"https://img.icons8.com/color/70/000000/name.png", backimage:"https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"},
        {id:1, title: "Journaling",     color:"#87CEEB", members:6,  image:"https://img.icons8.com/office/70/000000/home-page.png", backimage:"https://images.unsplash.com/flagged/photo-1556848797-f3d99afc29af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"},
        {id:2, title: "Videos",     color:"#4682B4", members:12, image:"https://img.icons8.com/color/70/000000/two-hearts.png", backimage:"https://images.unsplash.com/photo-1543176634-8593f3d8330e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"} ,
        {id:3, title: "Music",   color:"#6A5ACD", members:5,  image:"https://img.icons8.com/color/70/000000/family.png", backimage:"https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"} ,
        {id:4, title: "Experimental",  color:"#FF69B4", members:6,  image:"https://img.icons8.com/color/70/000000/groups.png", backimage:"https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"} ,
        {id:5, title: "Fitness",   color:"#00BFFF", members:7,  image:"https://img.icons8.com/color/70/000000/classroom.png", backimage:"https://images.unsplash.com/photo-1542048097389-2790fe7a1f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"} ,
        {id:6, title: "Affirmation",   color:"#00FFFF", members:8,  image:"https://img.icons8.com/dusk/70/000000/checklist.png", backimage:"https://images.unsplash.com/photo-1494783435443-c15feee0a80a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"} ,
        {id:8, title: "Advocacy",    color:"#20B2AA", members:23, image:"https://img.icons8.com/dusk/70/000000/globe-earth.png", backimage:"https://images.unsplash.com/photo-1532767153582-b1a0e5145009?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"} ,
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
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]}>
                <ImageBackground source={{uri:item.backimage}} style={styles.image}>
                <View style={styles.cardHeader}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                {/* <Image style={styles.cardImage} source={{uri:item.image}}/> */}
                <View style={styles.cardFooter}>
                  {/* <Text style={styles.subTitle}>{item.members} members</Text> */}
                </View>
                </ImageBackground>
              </TouchableOpacity>
            )
          }}/>
          <Button
          size="giant"
          style={styles.buttonbottom}
          onPress={() =>
            navigation.navigate('Tabs')
          }>
            Home
          </Button>
      </View>
    );
}
  
const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:0,
      marginBottom: 0,
      backgroundColor: COLORS.primary,
    },
    list: {
      //paddingHorizontal: 5,
      backgroundColor: COLORS.primary,
    },
    listContainer:{
      alignItems:'center'
    },
    /******** card **************/
    card:{
      marginHorizontal:5,
      marginVertical:5,
      flexBasis: '48%',
      borderRadius: 30,
      height: 150,
      width: 130
    },
    cardHeader: {
      paddingVertical: 17,
      paddingHorizontal: 16,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      flexDirection: 'row',
      alignItems:"center", 
      justifyContent:"center"
    },
    cardContent: {
      paddingVertical: 12.5,
      paddingHorizontal: 16,
    },
    cardFooter:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 12.5,
      paddingBottom: 25,
      paddingHorizontal: 16,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    cardImage:{
      height: 70,
      width: 70,
      alignSelf:'center'
    },
    title:{
      fontSize:20,
      flex:1,
      alignSelf: "center",
      color:"#FFFFFF",
      fontWeight:'bold'
    },
    subTitle:{
      fontSize:12,
      flex:1,
      color:"#FFFFFF",
    },
    icon:{
      height: 20,
      width: 20, 
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    buttonbottom: {
      marginBottom: 70,
      alignSelf: "center",
    },
});