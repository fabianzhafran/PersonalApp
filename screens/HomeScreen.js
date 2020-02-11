import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import {
  Image,
  Platform,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { MonoText } from '../components/StyledText';

import GoalInput from '../components/GoalInput';
import GoalItems from '../components/GoalItems';



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
    <View style = {[styles.screen, styles.container]}>
      <GoalInput 
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancelGoal={cancelGoalAddHandler}
      />

      {/* <TopBar /> */}
      {/* <View style={{position : 'absolute', width : 50, height : 50, backgroundColor : 'black', }} */}

      <FlatList
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
        colors={['rgb(70, 70, 70)', 'rgb(110, 110, 110]', 'rgb(50, 50, 50)']}
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
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  screen : {
    padding : 0,
  },
  addButton : {
    position: "absolute",
    width: 70,
    height: 70,
    borderRadius: 60,
    marginTop: 540,
    marginLeft: 310,
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
