import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TaskInput = props => {
  const [enteredTask, setEnteredTask] = useState("");

  const taskInputHandler = (enteredText) => {
    //console.log(enteredText);
    setEnteredTask(enteredText);
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={enteredTask}
        onChangeText={taskInputHandler}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          setEnteredTask("");//enteredTaks leegmaken
          props.onAddTask(enteredTask);
        }}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
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
export default TaskInput;