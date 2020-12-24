import React, { useEffect, useState, useCallback } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listInterests } from './../src/graphql/queries'
import {
  View, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView, ImageBackground
} from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import COLORS from "../Colors";
import { Icon } from 'react-native-eva-icons';
import { useIsFocused } from '@react-navigation/native';


const CardItem = ({item, isChecked, selectItem}) => {
  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={event => selectItem({name: item.id})}
        style={styles.card}>
        {/* <ImageBackground source={{ uri: item.ImageLink }} style={styles.image}> */}
          {isChecked
          ? <Icon name='checkmark-circle-2-outline' style={{marginLeft: 10, marginTop: 8}} width={30} height={30} fill={"black"} />
          : <Icon name='radio-button-off-outline' style={{marginLeft: 10, marginTop: 8}} width={30} height={30} fill={"black"} />
          }
          {/* <View style={styles.cardHeader}> */}
            <Text style={styles.title}>{item.InterestText}</Text>
          {/* </View>
          <View style={styles.cardFooter}>
          </View> */}
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
  const isFocused = useIsFocused();


  useEffect(() => {
    if (isFocused) {
      fetchInterests()
    }
  }, [isFocused]);

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
    <ScrollView style={{backgroundColor: "#f7f7f7"}}>
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
          navigation.navigate('Identities')
        }>
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
    marginBottom: "10%",
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
    width: 178,
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