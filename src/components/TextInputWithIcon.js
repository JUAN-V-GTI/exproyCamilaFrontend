// src/components/TextInputWithIcon.js
// src/components/TextInputWithIcon.js
import React from "react";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const TextInputWithIcon = ({ icon, ...props }) => (
  <View style={styles.inputContainer}>
    <Icon name={icon} style={styles.icon} />
    <TextInput style={styles.textInput} {...props} />
  </View>
);

const styles = {
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    paddingVertical: 10,
  },
  icon: {
    color: "#007bff",
    marginRight: 10,
  },
};

export default TextInputWithIcon;
