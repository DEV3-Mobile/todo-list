import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, FlatList, TouchableOpacity } from 'react-native';
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

  const renderItem = (itemData) => (
    <TaskItem taskname={itemData.item} />
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {console.log(tasks)}
      <Text style={styles.heading}>To Do App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={enteredTask}
        onChangeText={taskInputHandler}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={addTaskHandler}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
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
  },
  input: {
    borderWidth: 3,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 18,
  },
  addButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  }
});