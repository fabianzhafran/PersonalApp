import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, Modal, Button } from 'react-native';

const GoalInput = (props) => {                                  
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    const cancelGoalHandler = () => {
        props.onCancelGoal();
    }
    
    return (
        <Modal visible={props.visible} style={styles.modalStyle} animationType="slide">
            <View style={styles.topBar}>
                <View style={styles.CancelView}>
                    <Text style={styles.addAndBackText} onPress={cancelGoalHandler}>Cancel</Text>
                </View>
                <View style={styles.AddView}>
                    <Text style={styles.addAndBackText} onPress={addGoalHandler}>Add</Text>
                </View>
            </View>
            <View style={styles.inputContainer}>
                 <TextInput
                    placeholder="Placeholder"
                    style={styles.input}
                    onChangeText={text => goalInputHandler(text)}
                    value={props.enteredGoal}
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalStyle : {
        fontSize : 70,
    },  
    inputContainer : {
        flex : 1,
        flexDirection : 'column',
        borderTopWidth : 2,
        borderTopColor : 'grey',
        justifyContent : 'flex-start',
        alignItems : 'flex-start',
    },
    topBar : {
        minHeight : 30,
        minWidth : '100%',
        display : "flex",
        flexDirection : 'row',
        justifyContent : 'space-between',
        // fontFamily : 'sans-serif',
    },
    CancelView : {
        minHeight : 30,
        minWidth : '50%',
        margin : 10,
    },
    AddView : {
        minHeight : 30,
        margin : 10,
        paddingRight : 0,
    },
    addAndBackText : {
        fontSize : 20,
        fontFamily : 'sans-serif',
    },
    input : {
        width : '100%',
        padding : 10,
        marginBottom: 10,
        alignContent: 'stretch',
    },
    addButton : {
        backgroundColor : 'black',
    }
})

export default GoalInput;