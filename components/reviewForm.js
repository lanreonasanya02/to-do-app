import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { Formik } from "formik";

export default function ReviewForm() {
  return (
    <View>
      <Formik
        initialValues={{ text: "", body: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formikprops) => (
          <View>
            <TextInput
              style={StyleSheet.input}
              placeholder="Review text"
              onChangeText={props.handleChange("text")}
              value={props.values.text}
            />

            <TextInput
              style={StyleSheet.input}
              placeholder="Review body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              multiline
            />

            <Button
              title="Add Task"
              color="coral"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
