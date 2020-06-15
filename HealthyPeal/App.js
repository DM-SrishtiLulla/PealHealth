import 'react-native-gesture-handler';
import React, { useState}  from 'react';
import {
  View, AsyncStorage, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as theme } from './theme.json';
import { ApplicationProvider, Layout, Text, Button, IconRegistry, Icon} from '@ui-kitten/components';
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import { withAuthenticator } from 'aws-amplify-react-native';

const Stack = createStackNavigator();

function HelloWorldApp({ navigation }) {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
     <Button
        size="medium"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }>
          Go to Jane's profile
        </Button>
  </Layout>
  )
}

function ProfilePage({ navigation }) {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>Jane's Profile</Text>
     <Button
        size="medium"
        onPress={() =>
          navigation.navigate('Home')
        }>
          Go Back
        </Button>
      <Button
        size="medium"
        onPress={() =>
          navigation.navigate('Onboarding')
        }>
          Onboarding
        </Button>
  </Layout>
  )
}


function OnboardingPage() {
  // const [goals, setGoals] = useState([
  //   {goal: "manage stress", key: "1"},
  //   {goal: "reduce anxiety", key: "2"},
  //   {goal: "process grief", key: "3"},
  //   {goal: "release anger", key: "4"},
  //   {goal: "raise self-esteem", key: "5"},
  //   {goal: "love your body", key: "6"},
  // ]);

const [data, setData] = useState([
    {id:1, title: "You",      color:"#FF4500", members:8,  image:"https://img.icons8.com/color/70/000000/name.png"},
    {id:1, title: "Home",     color:"#87CEEB", members:6,  image:"https://img.icons8.com/office/70/000000/home-page.png"},
    {id:2, title: "Love",     color:"#4682B4", members:12, image:"https://img.icons8.com/color/70/000000/two-hearts.png"} ,
    {id:3, title: "Family",   color:"#6A5ACD", members:5,  image:"https://img.icons8.com/color/70/000000/family.png"} ,
    {id:4, title: "Friends",  color:"#FF69B4", members:6,  image:"https://img.icons8.com/color/70/000000/groups.png"} ,
    {id:5, title: "School",   color:"#00BFFF", members:7,  image:"https://img.icons8.com/color/70/000000/classroom.png"} ,
    {id:6, title: "Things",   color:"#00FFFF", members:8,  image:"https://img.icons8.com/dusk/70/000000/checklist.png"} ,
    {id:8, title: "World",    color:"#20B2AA", members:23, image:"https://img.icons8.com/dusk/70/000000/globe-earth.png"} ,
    {id:9, title: "Remember", color:"#191970", members:45, image:"https://img.icons8.com/color/70/000000/to-do.png"} ,
    {id:9, title: "Game",     color:"#008080", members:13, image:"https://img.icons8.com/color/70/000000/basketball.png"} ,
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
  <ScrollView style={styles.container}>
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
            <View style={styles.cardHeader}>
              <Text style={styles.title}>{item.title}</Text>
              <Image style={styles.icon} source={{uri:"https://img.icons8.com/ios/40/000000/settings.png"}}/>
            </View>
            <Image style={styles.cardImage} source={{uri:item.image}}/>
            <View style={styles.cardFooter}>
              <Text style={styles.subTitle}>{item.members} members</Text>
            </View>
          </TouchableOpacity>
        )
      }}/>
  </ScrollView>
);
}

function App() {
  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HelloWorldApp}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="Onboarding" component={OnboardingPage} />
      </Stack.Navigator>
    </NavigationContainer>
    </ApplicationProvider>
    </>
  );
}

// const styles = StyleSheet.create({
//   onboarding: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: 40,
//     paddingHorizontal: 20
//   },
//   item: {
//     marginTop: 24,
//     padding: 30,
//     backgroundColor: "pink",
//     fontSize: 24,
//     marginHorizontal: 10,
//   }
// })
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    //paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  /******** card **************/
  card:{
    marginHorizontal:2,
    marginVertical:2,
    flexBasis: '48%',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
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
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 70,
    width: 70,
    alignSelf:'center'
  },
  title:{
    fontSize:16,
    flex:1,
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
  }
});

export default withAuthenticator(App);
