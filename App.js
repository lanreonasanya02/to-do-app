// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Heading from "./components/heading";
import ToDo from "./components/todo";
import CreateToDo from "./components/create";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Go shopping", key: "1" },
    { text: "Do coding exercises", key: "2" },
    { text: "Clean the house", key: "3" },
  ]);

  const removeTask = function (key) {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.key !== key);
    });
  };

  const addTask = function (text) {
    if (text.length > 4) {
      setTodos((prevTodos) => {
        return [
          { text, key: Math.random().toFixed(3).toString() },
          ...prevTodos,
        ];
      });
    } else {
      Alert.alert("Too Short!", "Task cannot be less than 4 characters", [
        { text: "Understood", onPress: () => console.log("Alert closed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Heading />

        <View style={styles.body}>
          <View>
            <CreateToDo addTask={addTask} />
          </View>

          <View style={styles.todos}>
            <Text style={styles.title}>All Tasks!</Text>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <ToDo item={item} removeTask={removeTask} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "coral",
  },

  body: {
    margin: 20,
    flex: 1,
  },

  todos: {
    marginTop: 60,
    flex: 1,
  },
});
