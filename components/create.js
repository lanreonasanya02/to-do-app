import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import { Formik } from "formik";

export default function CreateToDo({ addNewTask }) {
  return (
    <View>
      <Text style={styles.title}>Create Task:</Text>
      <Formik
        initialValues={{ text: "", body: "" }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addNewTask(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Task title"
              onChangeText={props.handleChange("text")}
              value={props.values.text}
            />

            <TextInput
              // multiline
              style={styles.input}
              placeholder="Task body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
            />

            <TextInput
              style={styles.input}
              placeholder="Task priority (1 - 5)"
              onChangeText={props.handleChange("priority")}
              value={props.values.priority}
            />

            <View style={styles.btn}>
              <Button
                title="Add Task"
                color="#000"
                onPress={() => {
                  props.handleSubmit();
                  Keyboard.dismiss();
                }}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "coral",
    marginTop: 20,
  },

  input: {
    borderWidth: 0.5,
    borderStyle: "solid",
    padding: 20,
    marginVertical: 10,
    borderColor: "coral",
    fontSize: 15,
    borderRadius: 8,
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
