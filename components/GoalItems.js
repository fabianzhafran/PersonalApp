import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import { BoxShadow } from 'react-native-shadow';

const GoalItems = props => {
  const shadowOpt = {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.7,
    shadowRadius: 8.00,
    elevation: 24,
  };

  return (
    <TouchableOpacity activeOpacity={0.4} onPress={props.deleteItem} style={styles.listItem}>
      <LinearGradient
        colors={['grey', 'black']}
        start={[0.0, props.random2]}
        end={[props.random3, 0.0]}
        style={styles.listItem}
        onPress={() => setIsAddMode(true)}
      >
      <View styles={[styles.listItem, shadowOpt]}>
        <Text style={styles.textStyle}>{props.title}</Text>
      </View>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem : {
    padding : 20,
    minHeight : 40,
    marginTop : 2.5,
    marginBottom : 2.5,
    minHeight : 30,
    borderRadius : 30,
  },
  textStyle : {
    fontFamily : 'sans-serif-medium',
    fontSize : 20,
    color : 'white',
  }
})

export default GoalItems