import { StyleSheet, Text, View } from "react-native";

export default function Heading() {
  return (
    <View style={styles.headingContainer}>
      <Text style={styles.heading}>To Do App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    height: 100,
    backgroundColor: "coral",
  },

  heading: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 50,
  },
});
