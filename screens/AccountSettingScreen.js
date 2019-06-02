import React from "react";
import UserIcon from "../components/UserIcon.js";
// TODO: 
// import SettingModal from "../components/SettingModal.js";
import { View, StyleSheet, Text } from "react-native";

export default class AccountSettingScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Account Settings",
    headerRight: <Text style={styles.doneButton}> Done </Text>
  });

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.childContainer}>
          <UserIcon size={120} />
          <Text style={styles.editText}> Edit Photo </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    padding: 30,
    flexDirection: "column"
  },

  doneButton: {
    paddingRight: 10,
    color: "#008000",
    fontSize: 15
  },

  childContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },

  editText: {
    paddingTop: 10,
    color: "#007AFF",
    fontSize: 10
  }
});
