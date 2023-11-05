import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, FlatList, TouchableOpacity } from 'react-native';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

//1 task is een 1 todo item op de todo lijst

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (taskToAdd) => {
    console.log(taskToAdd);
    // const tasksTemp = tasks;
    // tasksTemp.push(enteredTask);
    // setTasks(tasksTemp);
    // niet nodig --> return nieuwe array met spread syntax + entered task op laatste index.
    setTasks((currentTasks) => [...currentTasks, taskToAdd]);
  }

  const renderItem = (itemData) => (
    <TaskItem taskname={itemData.item} />
  );

  return (
    <View style={styles.container}>
      {console.log(tasks)}
      <StatusBar style="auto" />
      <Text style={styles.heading}>To Do App</Text>
      <TaskInput onAddTask={addTaskHandler} />
      <FlatList data={tasks} renderItem={renderItem} />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 7,
    color: "green",
  }
});