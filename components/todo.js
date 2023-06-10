import { StyleSheet, Text, TouchableOpacity, View, Modal } from "react-native";
import { MaterialIcons, Entypo, Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function ToDo({ item, removeTask }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setModalOpen(true)}>
        <View style={styles.listContainer}>
          <Text style={styles.list}>
            Priority ({item.priority}) - {item.text}
          </Text>

          <TouchableOpacity onPress={() => removeTask(item.key)}>
            <Text style={styles.icons}>
              {/* <Entypo name="edit" size={20} color="coral" />{" "} */}
              <MaterialIcons name="delete" size={26} color="coral" />
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setModalOpen(false)}>
            <View style={styles.modalClose}>
              <Text>
                <Ionicons name="arrow-back" size={24} color="coral" />
              </Text>
              <Text style={styles.return}>Return Home</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.modalHeading}>{item.text}:</Text>
          <Text style={styles.modalBody}>
            {item.body ? item.body : "No description"}
          </Text>
          <Text style={styles.modalBody}>{item.body}</Text>
          <Text style={styles.modalBody}>{item.body}</Text>
        </View>
      </Modal>
    </View>
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
    width: "80%",
    paddingLeft: 10,
  },

  icons: {
    flexDirection: "row",
    columnGap: 20,
  },

  modalContainer: {
    marginTop: 80,
    marginHorizontal: 20,
  },

  modalHeading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },

  modalBody: {
    marginVertical: 10,
  },

  modalClose: {
    flexDirection: "row",
    marginVertical: 30,
  },

  return: {
    fontSize: 20,
    fontStyle: "italic",
    marginLeft: 6,
    color: "coral",
    fontWeight: "bold",
  },
});
