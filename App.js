import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';
import TaskItem from './components/TaskItem';

//Task = todo item

export default function App() {
  const [enteredTask, setEnteredTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const taskInputHandler = (enteredText) => {
    console.log(enteredText);
    setEnteredTask(enteredText);
  }
  const addTaskHandler = () => {
    console.log(enteredTask);
    // const tasksTemp = tasks;
    // tasksTemp.push(enteredTask);
    // setTasks(tasksTemp);
    setTasks((currentTasks) => [...currentTasks, enteredTask]);
  }

  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      {console.log(tasks)}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="add task..."
          style={styles.input}
          clearButtonMode="always"
          onChangeText={taskInputHandler}
        />
        <Button title="ADD" onPress={addTaskHandler} />
      </View>
      <FlatList data={tasks} renderItem={(itemData) => (
        <TaskItem taskname={itemData.item} />
      )} />

      //https://pastebin.com/SwRT2shN
    </View >
  );
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
    marginBottom: 10,
  }
});