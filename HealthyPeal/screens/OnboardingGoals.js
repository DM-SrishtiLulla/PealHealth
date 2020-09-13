import React, { useEffect, useState, useCallback } from 'react'
import { API, graphqlOperation, Auth } from 'aws-amplify'
import { listGoals, getGoal, getUserInfo } from './../src/graphql/queries'
import { createUserGoals, deleteUserGoals } from './../src/graphql/mutations'
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
        <ImageBackground source={{ uri: item.ImageLink }} style={styles.image}>
          {isChecked
          ? <Icon name='checkmark-circle-2-outline' width={30} height={30} fill={COLORS.secondary} />
          : <Icon name='radio-button-off-outline' width={30} height={30} fill={COLORS.secondary} />
          }
          <View style={styles.cardHeader}>
            <Text style={styles.title}>{item.GoalText}</Text>
          </View>
          <View style={styles.cardFooter}>
          </View>
        </ImageBackground> 
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
        //console.log("checkedItems: ", newItems);
        return newItems        
      });
    }}
    isChecked={checkedItems.includes(item.id)}
  />;
};

export default function OnboardingGoals({ navigation }) {

  //getUser();

  const [goals, setGoals] = useState([])
  let user;

  const [checkedItems, setCheckedItems] = useState([]);
  const [oldGoals, setOldGoals] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      console.log("are we here??")
      fetchGoals()
      fetchSelectedGoals()
    }
  }, [isFocused]);

  async function fetchGoals() {
    try {
      const goalData = await API.graphql(graphqlOperation(listGoals))
      const goals = goalData.data.listGoals.items
      setGoals(goals)
      //console.log("ok")
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
        //console.log(item[i].goalID)
      }
      console.log(userGoals)
      setCheckedItems(userGoals)
      setOldGoals(userGoals)
      //console.log(item)
    } catch (err) {
      console.log('error creating usergoal:', err)
    }
  }

  async function getUser() {
    let us = await Auth.currentAuthenticatedUser();
    user = us.username;
    console.log("whennn")
    //const { attributes } = user;
    //console.log(user.username);
    //console.log(user);
    //console.log(attributes);
  }

  async function saveUserInfo(checked) {
    await getUser();
    console.log("username: " + user);
    console.log("old goals")
    console.log(oldGoals)
    console.log("new goals")
    console.log(checked)

    var goalsToDelete = oldGoals.filter(x => checked.indexOf(x) === -1);
    console.log("delete")
    console.log(goalsToDelete);

    for (const gd of goalsToDelete) {
      deleteOldGoal(gd);
      console.log(gd);
    }

    for (const ch of checked) {
      addUserGoal(ch);
      addUserInsight(ch);
      console.log(ch)
    }

    navigation.navigate('Interests')
  }

  async function addUserInsight(goal) {
    try {
      console.log(user)
      const goalI = await API.graphql(graphqlOperation(getGoal, {id: goal}))
      const item = (goalI.data.getGoal.Insights.items)
      for (const i in item) {
        console.log("atheplace")
        console.log(item[i].id)
        console.log(item[i].InsightText)

      }
      //console.log(item)
    } catch (err) {
      console.log('error creating gf:', err)
    }
  }
  async function addUserGoal(goal) {
    try {
      console.log(user)
      await API.graphql(graphqlOperation(createUserGoals, {input: {goalID: goal, userID: user}}))
      /*const goalI = await API.graphql(graphqlOperation(getGoal, {id: goal}))
      const item = (goalI.data.getGoal.Insights.items)
      for (const i in item) {
        console.log(item[i].id)
      }*/
      //console.log(item)
    } catch (err) {
      console.log('error creating gf:', err)
    }
  }

  async function deleteOldGoal(goal) {
    try {
      console.log(goal)
      console.log(user)
      await API.graphql(graphqlOperation(deleteUserGoals, {input: {goalID: goal, userID: user}}))
      //console.log(item)
    } catch (err) {
      console.log('error deleting goal:', err)
    }
  }

  // get the user's saved items here in future - don't start with useState[] empty list or it wipes progress every time
  const renderItemCall = useCallback(({ item }) => renderItem({ item, checkedItems, setCheckedItems }));

  return (
    <View style={styles.container}>
      <Text style={styles.head}>What do you want help with?</Text>
      <FlatList style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={goals}
        horizontal={false}
        numColumns={2}
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
    paddingHorizontal: 14,
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
    alignSelf: 'center'
  },
  title: {
    fontSize: 16,
    flex: 1,
    marginTop: 0,
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center",
    color: COLORS.primary,
    backgroundColor: COLORS.lightaccent,
    borderColor: COLORS.lightaccent,
    borderWidth: 10,
    fontWeight: '700'
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
    justifyContent: "center"
  },
  buttonbottom: {
    marginBottom: "10%",
    marginTop: "5%",
    alignSelf: "center",
    width: 200,
    height: 60,
    backgroundColor: COLORS.lightaccent,
    borderColor: COLORS.lightaccent,
  },
  buttontext: {
    fontSize: 24,
    fontWeight: "600",
    color: COLORS.primary
  },
  head: {
    flex: 1,
    color: COLORS.lightaccent,
    paddingTop: "20%",
    paddingLeft: 10,
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "600",
  },
  checkbox: {
    marginTop: 20,
    marginLeft: 10
  }
});