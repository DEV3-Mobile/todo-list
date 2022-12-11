import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TaskItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.taskname}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,//bestaat niet in CSS
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  }
});

export default TaskItem;