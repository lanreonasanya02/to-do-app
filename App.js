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
    {
      text: "Go shopping",
      key: "1",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia officia nesciunt veniam numquam itaque magnam accusantium beatae laborum. Utotam rem laboriosam! Unde fuga quam dolor voluptatibus iusto placeat sint, dignissimos provident voluptatem obcaecati recusandae, maxime quasi maiores minima omnis nisi, veritatis eveniet. Earum consequatur tempore repellendus animi eius!",
      priority: 4,
    },
    {
      text: "Do coding exercises",
      key: "2",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia officia nesciunt veniam numquam itaque magnam accusantium beatae laborum. Utotam rem laboriosam! Unde fuga quam dolor voluptatibus iusto placeat sint, dignissimos provident voluptatem obcaecati recusandae, maxime quasi maiores minima omnis nisi, veritatis eveniet. Earum consequatur tempore repellendus animi eius!",
      priority: 5,
    },
    {
      text: "Clean the house",
      key: "3",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia officia nesciunt veniam numquam itaque magnam accusantium beatae laborum. Utotam rem laboriosam! Unde fuga quam dolor voluptatibus iusto placeat sint, dignissimos provident voluptatem obcaecati recusandae, maxime quasi maiores minima omnis nisi, veritatis eveniet. Earum consequatur tempore repellendus animi eius!",
      priority: 1,
    },
  ]);

  const addNewTask = (newtask) => {
    newtask.key = Math.random().toString();
    setTodos((prevTodos) => {
      return [newtask, ...prevTodos];
    });
  };

  const removeTask = function (key) {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.key !== key);
    });
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
            <CreateToDo addNewTask={addNewTask} />
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
    margin: 30,
    flex: 1,
  },

  todos: {
    marginTop: 60,
    flex: 1,
  },
});
