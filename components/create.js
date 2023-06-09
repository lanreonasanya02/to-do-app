import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Keyboard,
} from "react-native";

export default function CreateToDo({ addTask }) {
  const [input, setInput] = useState("");

  return (
    <View>
      <Text>Enter Task:</Text>

      <TextInput
        onChangeText={(val) => setInput(val)}
        style={styles.input}
        placeholder="e.g. Going to the spa"
      />

      <View style={styles.btn}>
        <Button
          title="Add Task"
          color="#000"
          onPress={() => {
            addTask(input);
            Keyboard.dismiss();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.5,
    borderStyle: "solid",
    padding: 20,
    marginTop: 5,
    borderColor: "coral",
    fontSize: 15,
  },

  btn: {
    backgroundColor: "#d7d7d7",
    paddingVertical: 10,
    marginVertical: 20,
    width: 200,
    alignSelf: "center",
    borderRadius: 10,
  },
});
