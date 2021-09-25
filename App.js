import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    SafeAreaView,
    ScrollView,
} from 'react-native'

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('')
    const [courseGoals, setCourseGoals] = useState([])
    const goalInputHandler = (goal) => {
        setEnteredGoal(goal)
    }
    const addGoalHandler = () => {
        setCourseGoals((currentGoals) => [...currentGoals, enteredGoal])
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.padding}>
                <View style={styles.inputContainer}>
                    <TextInput
                        onChangeText={goalInputHandler}
                        value={enteredGoal}
                        placeholder="Course Goal"
                        style={styles.input}
                    />
                    <Button title="ADD" onPress={addGoalHandler} />
                </View>
                <ScrollView>
                    {courseGoals.map((courseGoal, index) => (
                        <View style={styles.goalItem} key={index}>
                            <Text>{courseGoal}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
    },
    goalItem: {
        margin: 10,
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
    },
})
