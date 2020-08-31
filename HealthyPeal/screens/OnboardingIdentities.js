import React, { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listIdentitys } from './../src/graphql/queries'
import {
  View, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView, ImageBackground
} from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import COLORS from "../Colors";
import CheckBox from '@react-native-community/checkbox';



export default function OnboardingIdentities({ navigation }) {

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

  const [checkedItems, setCheckedItems] = useState([]);

  const handleChange = event => {
    const index = checkedItems.indexOf(event.name);
    
    var newItems = [... checkedItems]
    if (index == -1) {
      // If item is not in list
      newItems = [...checkedItems, event.name]
    } else {
      newItems.splice(index, 1);
    }
    setCheckedItems(newItems)
    console.log("checkedItems: ", checkedItems);
   
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head}>How do you identify?</Text>
      <FlatList style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={identitys}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={[styles.card]}>

              <ImageBackground source={{ uri: item.ImageLink }} style={styles.image}>
              <View style={styles.checkbox}>
                <CheckBox
                  boxType={'square'}
                  tintColor={COLORS.darkaccent}
                  onCheckColor={COLORS.primary}
                  lineWidth={3}
                  onFillColor={COLORS.secondary}
                  onTintColor={COLORS.darkaccent}
                  name={item.id}
                  disabled={false}
                  onValueChange={event => handleChange({ name: item.id })}
                />
              </View>
                <View style={styles.cardHeader}>
                  <Text style={styles.title}>{item.IdentityText}</Text>
                </View>
                <View style={styles.cardFooter}>
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
    fontSize: 18,
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
    paddingTop: 20,
    paddingBottom: 30,
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