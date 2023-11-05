import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TaskItem = props => {
  return (
    <View style={styles.task}>
      <Text
        style={styles.itemList}>{props.taskId} - {props.taskname}</Text>
      <View
        style={styles.taskButtons}>
        <TouchableOpacity
          onPress={() => { console.log("should edit") }}>
          <Text
            style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.onDelete(props.taskId)}>
          <Text
            style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    fontSize: 18,
  },
  itemList: {
    fontSize: 19,
  },
  taskButtons: {
    flexDirection: "row",
  },
  editButton: {
    marginRight: 10,
    color: "green",
    fontWeight: "bold",
    fontSize: 18,
  },
  deleteButton: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
  }
});

export default TaskItem;