import React, { useEffect, useState, useCallback } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listInterests } from './../src/graphql/queries'
import {
  View, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView, ImageBackground
} from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import COLORS from "../Colors";
import { Icon } from 'react-native-eva-icons';

const CardItem = ({item, isChecked, selectItem}) => {
  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={event => selectItem({name: item.id})}
        style={styles.card}>
        {/* <ImageBackground source={{ uri: item.ImageLink }} style={styles.image}> */}
          {isChecked
          ? <Icon name='checkmark-circle-2-outline' style={{marginLeft: 5, marginTop: 5}} width={40} height={40} fill={COLORS.primary} />
          : <Icon name='radio-button-off-outline' style={{marginLeft: 5, marginTop: 5}} width={40} height={40} fill={COLORS.primary} />
          }
          <View style={styles.cardHeader}>
            <Text style={styles.title}>{item.InterestText}</Text>
          </View>
          <View style={styles.cardFooter}>
          </View>
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
        console.log("checkedItems: ", newItems);
        return newItems        
      });
    }}
    isChecked={checkedItems.includes(item.id)}
  />;
};

export default function OnboardingInterests({ navigation }) {

  const [interests, setInterests] = useState([])

  useEffect(() => {
    fetchInterests()
  }, [])

  async function fetchInterests() {
    try {
      const interestData = await API.graphql(graphqlOperation(listInterests))
      const interests = interestData.data.listInterests.items
      setInterests(interests)
    } catch (err) { console.log('error fetching interests') }
  }

  const [checkedItems, setCheckedItems] = useState([]);
  const renderItemCall = useCallback(({ item }) => renderItem({ item, checkedItems, setCheckedItems }));

  return (
    <View style={styles.container}>
      <Text style={styles.head}>What interests you?</Text>
      <FlatList style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={interests}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => {
          return item.id;
        }}
        extraData={interests}
        renderItem={renderItemCall}/>
      <Button
        size="giant"
        style={styles.buttonbottom}
        onPress={() =>
          navigation.navigate('Tabs')
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
    flexBasis: '42%',
    borderRadius: 30,
    height: 120,
    backgroundColor: COLORS.lightaccent
  },
  cardHeader: {
    paddingVertical: 5,
    paddingHorizontal: 16,
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
    fontSize: 24,
    flex: 1,
    // marginTop: 0,
    // justifyContent: "center",
    textAlign: "center",
    // alignSelf: "center",
    color: COLORS.primary,
    backgroundColor: COLORS.lightaccent,
    fontWeight: '700'
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
    height: 0,
    width: 0,
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
    // marginLeft: 20,
    // marginTop: 10,
    marginBottom: 10,
    paddingTop: "20%",
    paddingBottom: 40,
    paddingLeft: 10,
    alignSelf: "center",
    fontSize: 32,
    fontWeight: "600",
  },
});