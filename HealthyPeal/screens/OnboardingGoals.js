import React, { useEffect, useState, useCallback } from 'react'
import { API, graphqlOperation, Auth } from 'aws-amplify'
import { listGoals, getGoal, getUserInfo, listUserInsightss } from './../src/graphql/queries'
import { createUserGoals, deleteUserGoals, createUserInsights, deleteUserInsights } from './../src/graphql/mutations'
import {
  View, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView, ImageBackground
} from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import COLORS from "../Colors";
import { Icon } from 'react-native-eva-icons';
import { useIsFocused } from '@react-navigation/native';
//import { renderItem } from './CardItem'



const CardItem = ({item, isChecked, selectItem}) => {
  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={event => selectItem({name: item.id})}
        style={styles.card}>
        {/* <ImageBackground source={{ uri: item.ImageLink }} style={styles.image}> */}
          {isChecked
          ? <Icon name='checkmark-circle-2-outline' style={{marginLeft: 10, marginTop: 8}} width={30} height={30} fill={"black"}/>
          : <Icon name='radio-button-off-outline' style={{marginLeft: 10, marginTop: 8}} width={30} height={30} fill={"black"} />
          }
            <Text style={styles.title}>{item.GoalText}</Text>
        {/* </ImageBackground>  */}
      </TouchableOpacity>
    </React.Fragment>
  );
}

const renderItem = ({ item, checkedItems, setCheckedItems }) => {
  return <CardItem
    item={item}
    selectItem={item => {
      setCheckedItems(event => {       
        const index = checkedItems.indexOf(item.name);

        var newItems = [...checkedItems]
        if (index == -1) {
          // If item is not in list
          newItems = [...checkedItems, item.name]
        } else {
          newItems.splice(index, 1);
        }
        return newItems        
      });
    }}
    isChecked={checkedItems.includes(item.id)}
  />;
};

export default function OnboardingGoals({ navigation }) {

  const [goals, setGoals] = useState([])
  let user;

  const [checkedItems, setCheckedItems] = useState([]);
  const [oldGoals, setOldGoals] = useState([]);
  const [oldInsights, setOldInsights] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      fetchGoals()
      fetchSelectedGoals()
      fetchUserInsights()
    }
  }, [isFocused]);

  async function fetchUserInsights() {
    await getUser();
    try {
      let userInsights = [];
      const goalI = await API.graphql(graphqlOperation(getUserInfo, {id: user}))
      const item = (goalI.data.getUserInfo.Insights.items)
      for (const i in item) {
        userInsights.push(item[i].insightID)
      }
      /*let userInsights = [];
      const insight = await API.graphql(graphqlOperation(getUserInfo, {id: user}))
      const items = (insight.data.getUserInfo.Insights.items)
      let actualData;
      for (const ins in items) {
        actualData = items[ins].insightID
        userInsights.push(actualData)
      }*/
      setOldInsights(userInsights)
      console.log(userInsights)
    } catch (err) { console.log('error fetching userinsights') }
  }

  async function fetchGoals() {
    try {
      const goalData = await API.graphql(graphqlOperation(listGoals))
      const goals = goalData.data.listGoals.items
      setGoals(goals)
    } catch (err) { console.log('error fetching goals') }
  }

  async function fetchSelectedGoals() {
    await getUser();
    try {
      let userGoals = [];
      const goalI = await API.graphql(graphqlOperation(getUserInfo, {id: user}))
      const item = (goalI.data.getUserInfo.Goals.items)
      for (const i in item) {
        userGoals.push(item[i].goalID)
      }
      setCheckedItems(userGoals)
      setOldGoals(userGoals)
    } catch (err) {
      console.log('error creating usergoal:', err)
    }
  }

  async function getUser() {
    let us = await Auth.currentAuthenticatedUser();
    user = us.username;
  }

  async function saveUserInfo(checked) {
    await getUser();
    var goalsToDelete = oldGoals.filter(x => checked.indexOf(x) === -1);

    for (const gd of goalsToDelete) {
      deleteOldGoal(gd);
      deleteUserInsight(gd);
    }

    var goalsToAdd = checked.filter(x => oldGoals.indexOf(x) === -1);

    for (const ga of goalsToAdd) {
      addUserGoal(ga);
      addUserInsight(ga);
    }

    navigation.navigate('Interests')
  }

  async function addUserInsight(goal) {
    try {
      const goalI = await API.graphql(graphqlOperation(getGoal, {id: goal}))
      //console.log(goalI)
      const item = (goalI.data.getGoal.Insights.items)
      for (const i in item) {
        console.log(item[i].id)
        console.log(user)
        await API.graphql(graphqlOperation(createUserInsights, {input: {insightID: item[i].id, userID: user, status: "new"}}))
      }
    } catch (err) {
      console.log('error creating gf:', err)
    }
  }
  async function addUserGoal(goal) {
    try {
      await API.graphql(graphqlOperation(createUserGoals, {input: {goalID: goal, userID: user}}))
    } catch (err) {
      console.log('error creating gf:', err)
    }
  }

  async function deleteUserInsight(goal) {
      const goalI = await API.graphql(graphqlOperation(getGoal, {id: goal}))
      const item = (goalI.data.getGoal.Insights.items)
      for (const i in item) {
        console.log("look here")
        console.log(user)
        console.log(item[i].id)
        try {
          await API.graphql(graphqlOperation(deleteUserInsights, {input: {insightID: item[i].id, userID: user}, condition: {status: {eq: "new"}}}))
        } catch (err) {
          console.log('error delting gf:', err)
        }
      }
    }

  async function deleteOldGoal(goal) {
    try {
      await API.graphql(graphqlOperation(deleteUserGoals, {input: {goalID: goal, userID: user}}))
    } catch (err) {
      console.log('error deleting goal:', err)
    }
  }

  // get the user's saved items here in future - don't start with useState[] empty list or it wipes progress every time
  const renderItemCall = useCallback(({ item }) => renderItem({ item, checkedItems, setCheckedItems }));

  return (
    <ScrollView style={{backgroundColor: "#f7f7f7"}}>
    <View style={styles.container} >
      <Text style={styles.head}>What are your goals?</Text>
      <FlatList style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={goals}
        horizontal={false}
        numColumns={1}
        keyExtractor={(item) => {
          return item.id;
        }}
        extraData={goals}
        renderItem={renderItemCall}/>
      <Button
        size="giant"
        style={styles.buttonbottom}
        onPress={checked => saveUserInfo(checkedItems)}
        >
        <Text style={styles.buttontext}>NEXT</Text>
      </Button>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonbottom: {
    alignSelf: "center",
    backgroundColor: "black",
    width: "80%",
    borderWidth: 0,
    marginTop: "5%",
},
  container:{
    backgroundColor: "#f7f7f7",
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: "#f7f7f7",
  },
  listContainer:{
    marginTop: 0,
    alignItems:'center',
  },
  /******** card **************/
  card:{
    display: "flex",
    flexDirection: "row",
    marginHorizontal:5,
    marginBottom: 20,
    borderRadius: 30,
    borderColor: "black",
    borderWidth: 1,
    height: 50,
    width: 220,
    backgroundColor: "#f7f7f7",
    //backgroundColor: COLORS.lightaccent
  },
  cardHeader: {
    // paddingVertical: 17,
    // paddingHorizontal: 14,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    // paddingVertical: 12.5,
    // paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingTop: 12.5,
    // paddingBottom: 25,
    // paddingHorizontal: 16,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardImage:{
    height: 70,
    width: 70,
    alignSelf:'center'
  },
  title:{
    fontSize: 20,
    marginLeft: 8,
    marginTop: 10,
    fontFamily: "Avenir",
    borderRadius: 100,
    borderColor: "#f7f7f7",
    color: "black",
    backgroundColor: "#f7f7f7",
    fontWeight: '400'
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
    justifyContent: "center",
    // height: 0,
    // width: 0,
  },

  buttontext: {
    color: "white",
    fontSize: 22,
    fontWeight: "300",
    fontFamily: "Avenir",
},
  head: {
    flex: 1,
    color: "black",
    fontFamily: "Cochin",
    // marginLeft: 20,
    marginTop: "5%",
    marginBottom: 0,
    paddingTop: "20%",
    paddingBottom: 30,
    paddingLeft: 10,
    alignSelf: "center",
    fontSize: 32,
    fontWeight: "400",
  },
  checkbox: {
    marginTop: 20,
    marginLeft: 10
  }
});