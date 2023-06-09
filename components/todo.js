import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

export default function ToDo({ item, removeTask }) {
  return (
    <TouchableOpacity>
      <View style={styles.listContainer}>
        <Text style={styles.list}>
          Task {item.key} - {item.text}
        </Text>

        <TouchableOpacity onPress={() => removeTask(item.key)}>
          <Text style={styles.icons}>
            <Entypo name="edit" size={20} color="coral" />{" "}
            <MaterialIcons name="delete" size={26} color="coral" />
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    backgroundColor: "#eee",
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: "space-between",
  },

  list: {
    fontSize: 20,
  },

  icons: {
    flexDirection: "row",
    columnGap: 20,
  },
});
