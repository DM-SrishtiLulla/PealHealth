
import React, { useState }  from 'react';
import {
    View, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView, ImageBackground,
  } from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import LottieView from 'lottie-react-native';
import COLORS from "../Colors";

export default function Onboarding4Page({ navigation }) {
    const [data, setData] = useState([
      {id:1, title: "Sleep Better",        color:"#FF4500", members:8,  image:"https://img.icons8.com/color/70/000000/name.png", backimage:"https://images.unsplash.com/photo-1518260243959-eaff079e5987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80"},
      {id:1, title: "Be Social",     color:"#87CEEB", members:6,  image:"https://img.icons8.com/office/70/000000/home-page.png", backimage:"https://images.unsplash.com/photo-1568561300108-e0c35b5f7c1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
      {id:2, title: "Get Motivated",     color:"#4682B4", members:12, image:"https://img.icons8.com/color/70/000000/two-hearts.png", backimage:"https://images.unsplash.com/photo-1508898578281-774ac4893c0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"} ,
      {id:3, title: "Think Positively",   color:"#6A5ACD", members:5,  image:"https://img.icons8.com/dusk/64/000000/family.png", backimage:"https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"} ,
      {id:4, title: "Reduce Anxiety",  color:"#FF69B4", members:6,  image:"https://img.icons8.com/color/70/000000/groups.png", backimage:"https://images.unsplash.com/photo-1445112098124-3e76dd67983c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80"} ,
      {id:5, title: "Lift My Mood",   color:"#00BFFF", members:7,  image:"https://img.icons8.com/color/70/000000/classroom.png", backimage:"https://images.unsplash.com/photo-1487235829740-e0ac5a286e1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1948&q=80"} ,
      {id:6, title: "Get Energized",   color:"#00FFFF", members:8,  image:"https://img.icons8.com/dusk/70/000000/checklist.png", backimage:"https://images.unsplash.com/photo-1503117388374-af436bb2be2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80"} ,
      {id:8, title: "Love My Body",    color:"#20B2AA", members:23, image:"https://img.icons8.com/dusk/70/000000/globe-earth.png", backimage:"https://images.unsplash.com/photo-1506784693919-ef06d93c28d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"} ,
        // {id:9, title: "Remember", color:"#191970", members:45, image:"https://img.icons8.com/color/70/000000/to-do.png"} ,
        // {id:9, title: "Game",     color:"#008080", members:13, image:"https://img.icons8.com/color/70/000000/basketball.png"} ,
      ])
      const [activeChecked, setActiveChecked] = React.useState(false);
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
      <Text style={styles.head}>Goals</Text>
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
            navigation.navigate('Interests')
          }>
            <Text style={styles.buttontext}>Next</Text>
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
    alignItems:'center',
  },
  /******** card **************/
  card:{
    marginHorizontal:5,
    marginVertical:5,
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
    marginTop: 30,
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center",
    color:COLORS.lightaccent,
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
      flex: 0.5,
      marginBottom: "10%",
      alignSelf: "center",
      width: 200,
      color: COLORS.lightaccent
  },
  buttontext: {
    fontSize: 30,
    fontWeight: "800",
    color: COLORS.lightaccent
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