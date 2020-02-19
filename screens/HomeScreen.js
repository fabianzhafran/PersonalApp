import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import { Platform, FlatList, StyleSheet, TouchableOpacity, View, Dimensions, Text } from 'react-native';
import { ApplicationProvider, TopNavigation } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { LinearGradient } from 'expo-linear-gradient';

import GoalInput from '../components/GoalInput';
import GoalItems from '../components/GoalItems';

// const client = new Twitter({
//   consumer_key: Environment.TWITTER_API_KEY,
//   consumer_secret: Environment.TWITTER_API_SECRET_KEY,
//   access_token_key: Environment.TWITTER_ACCESS_TOKEN,
//   access_token_secret: Environment.TWITTER_ACCESS_SECRET_TOKEN
// });

export default function HomeScreen() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (enterGoal) => {
    console.log(courseGoals);
    setCourseGoals(currentGoals => {
      console.log(currentGoals);
      return [...currentGoals, {id : Math.random().toString(), value : enterGoal}];
    });
    console.log(isAddMode);
    setIsAddMode(false);
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  const isAddModeHandler = () => {
    setIsAddMode(true);
    // console.log('function runs');
  };

  const cancelGoalAddHandler = () => {
    setIsAddMode(false);
  };

  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <View style = {[styles.screen, styles.container]}>
        <View style={styles.topNavigation}>
          <Text style={styles.topText}>Todo List (in dev)</Text> 
          <View style={styles.topNavigationCurve} />
        </View>
        <GoalInput 
          visible={isAddMode}
          onAddGoal={addGoalHandler}
          onCancelGoal={cancelGoalAddHandler}
        />

        <FlatList
          style={styles.scrollViewStyle}
          keyExtractor={(item, index) => item.id} 
          data={courseGoals}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={itemData => <GoalItems 
                                    title={itemData.item.value} 
                                    deleteItem={deleteGoalHandler.bind(this, itemData.item.id)}
                                    random1={Math.random()}
                                    random2={Math.random()}
                                    random3={Math.random()}
                                    random4={Math.random()}  
                                  />
                      }
        />
        
        <TouchableOpacity activeOpacity={0.4} style= {styles.addButton} onPress={() => isAddModeHandler()}>
          <LinearGradient
          colors={['rgb(70, 70, 70)', 'white']}
          style={styles.addButton}
          start={[0.0, 0.0]}
          end={[1.0, 1.0]}
          onPress={() => setIsAddMode(true)}
          >
            <View style={styles.plusHorizontal} />
            <View style={styles.plusVertical} />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ApplicationProvider>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  screen : {
    padding: 0,
    fontFamily: 'space-mono',
  },
  addButton : {
    position: "absolute",
    width: 70,
    height: 70,
    borderRadius: 60,
    marginTop: 540,
    marginLeft: 0.8 * Math.round(Dimensions.get('window').width),
    alignItems: "center",
    justifyContent: "center"
  },
  plusHorizontal : {
    position: "absolute",
    width: 5,
    height: 30,
    backgroundColor: "white",
    borderRadius: 3
  },
  plusVertical: {
    position: "absolute",
    backgroundColor: "white",
    width: 30,
    height: 5,
    borderRadius: 3
  },
  scrollViewStyle: {
    padding: 0,
    margin: 0,
    backgroundColor: 'rgba(20, 20, 75, 1.0)',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topNavigation: { 
    paddingTop: 30,
    backgroundColor: 'black',
  },
  topNavigationCurve: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'rgba(20, 20, 75, 1.0)',
    minHeight: 30,
  },
  topText: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 20,
    fontSize: 20,
    color: 'white'
  }
});
