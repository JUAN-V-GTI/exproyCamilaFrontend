import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Header = ({ setView, handleGoHome }) => {
  const navigation = useNavigation();
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonPress = (button) => {
    setActiveButton(button);
    setView(button);
  };

  return (
    <View style={styles.header}>
      <View style={styles.menuButtons}>
        <TouchableOpacity
          style={[
            styles.menuButton1,
            activeButton === "edit" && styles.activeButton,
          ]}
          onPress={() => handleButtonPress("edit")}
        >
          <Text style={styles.menuButtonText}>EDITAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.menuButton2,
            activeButton === "register" && styles.activeButton,
          ]}
          onPress={() => handleButtonPress("register")}
        >
          <Text style={styles.menuButtonText}>REGISTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuButton3, styles.centerIcon]}
          onPress={() => navigation.goBack()}
        >
          <Icon name="logout" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = {
  header: {
    height: 60,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  centerIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  menuButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 20,
  },
  menuButton1: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: "#007bff",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  menuButton2: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: "#007bff",
    borderLeftWidth: 1,
    borderLeftColor: "#d0edff",
    borderRightWidth: 1,
    borderRightColor: "#d0edff",
  },
  menuButton3: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: "#007bff",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  activeButton: {
    backgroundColor: "#8dd684",
  },
  menuButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
};

export default Header;
