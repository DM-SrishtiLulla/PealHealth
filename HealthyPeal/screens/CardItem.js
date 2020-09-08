// problem - can't pass item.GoalText in the renderItemCallback because you can't put dot 
/* import React from 'react'
import {
  View, TouchableOpacity, ImageBackground, StyleSheet
} from 'react-native';
import { Text } from '@ui-kitten/components';
import COLORS from "../Colors";
import { Icon } from 'react-native-eva-icons';

const CardItem = ({item, ItemText, isChecked, selectItem}) => {
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
              <Text style={styles.title}>{ItemText}</Text>
            </View>
            <View style={styles.cardFooter}>
            </View>
          </ImageBackground> 
        </TouchableOpacity>
      </React.Fragment>
    );
}

export const renderItem = ({ item, ItemText, checkedItems, setCheckedItems }) => {
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
      ItemText={ItemText}
    />;
  };
  

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

 */