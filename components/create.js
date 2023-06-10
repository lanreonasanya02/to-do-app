import { StyleSheet, View, Text, TextInput, Keyboard } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import Button from "./button";

const taskSchema = () =>
  yup.object({
    text: yup.string().required().min(4),
    body: yup.string().min(8),
    priority: yup
      .string()
      .required()
      .test("urgency", "Value must be a number between 1 & 5", (val) => {
        return Number(val) < 6 && Number(val) > 0;
      }),
  });

export default function CreateToDo({ addNewTask }) {
  return (
    <View>
      <Text style={styles.title}>Create Task:</Text>
      <Formik
        initialValues={{ text: "", body: "", priority: "" }}
        validationSchema={taskSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addNewTask(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Task name"
              onChangeText={props.handleChange("text")}
              value={props.values.text}
              onBlur={props.handleBlur("text")}
            />

            <Text style={styles.errorText}>
              {props.touched.text && props.errors.text}
            </Text>

            <TextInput
              multiline
              minHeight={60}
              style={styles.input}
              placeholder="Description"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              onBlur={props.handleBlur("body")}
            />
            <Text style={styles.errorText}>
              {props.touched.body && props.errors.body}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Urgency (1 - 5)"
              onChangeText={props.handleChange("priority")}
              value={props.values.priority}
              keyboardType="numeric"
              onBlur={props.handleBlur("priority")}
            />
            <Text style={styles.errorText}>
              {props.touched.priority && props.errors.priority}
            </Text>

            <View style={styles.btn}>
              {/* <Button
                title="Add Task"
                color="#000"
                onPress={() => {
                  props.handleSubmit();
                  Keyboard.dismiss();
                }}
              /> */}

              <Button
                text="Create Task"
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

  errorText: {
    color: "crimson",
    fontStyle: "italic",
  },
});
