import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [author, setAuthor] = useState("Shaun JP");
  const [attributor, setAttributor] = useState("Muyiwa David");
  const [title, setTitle] = useState({
    course: "React Native",
    program: "Tutorial",
  });

  const changeText = () => {
    setAuthor(author === "Lanre Adeolu" ? "Shaun Jp" : "Lanre Adeolu");
    // setTitle({ course: "React", program: "Examination" });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>
          {title.course} {title.program}
        </Text>
        <Text style={styles.subHeading}>By {author}</Text>
      </View>

      <View>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi natus
          quam accusantium sequi! Rerum beatae magnam omnis ratione laboriosam,
          consectetur natus eius tempore veniam inventore qui quisquam
          repellendus! Quae, saepe.
        </Text>

        <View style={styles.attribution}>
          <Text style={styles.subtext}>Tutorial Compiled By {attributor}</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(val) => setAttributor(val)}
            placeholder="e.g. John Doe"
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={styles.btnContainer}>
        <Button title="Update State" onPress={changeText} />
      </View>
    </View>
  );
}
{
  /* <StatusBar style="auto" /> */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    textAlign: "center",
    fontSize: 30,
    color: "blue",
    fontFamily: "Arial",
    fontWeight: "bold",
    margin: 5,
  },

  subHeading: {
    color: "red",
    textAlign: "center",
    margin: 1,
    marginBottom: 15,
  },

  text: {
    textAlign: "center",
    padding: 5,
  },

  attribution: {
    paddingTop: 20,
    textAlign: "center",
  },

  subtext: {
    textAlign: "center",
  },

  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: "blue",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    width: 200,
    alignSelf: "center",
  },

  btnContainer: {
    borderWidth: 1,
    borderColor: "blue",
    backgroundColor: "beige",
    color: "#fff",
    marginTop: 10,
  },
});
