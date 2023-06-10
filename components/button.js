import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#d7d7d7",
    paddingVertical: 2,
    marginVertical: 10,
    alignSelf: "center",
    borderRadius: 10,
  },

  btnText: {
    color: "coral",
    fontWeight: "bold",
    fontSize: 20,
  },
});
