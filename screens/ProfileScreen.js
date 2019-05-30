import React from "react";
import UserIcon from "../components/UserIcon.js";
import SettingModal from "../components/SettingModal.js";
import { View, StyleSheet, Text } from "react-native";

export default class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Profile",
    headerRight: <SettingModal navigation={navigation} />
  });

  render() {
    const username = "Alfredo \n Linguini";
    const bioText =
      "Anyone can cook! I began my career working at one of the best restaurants in Paris,  Gusteau’s where I started as a garabage boy. Now I own a succesful restaurant, Ratatouille. Follow along with the recipes I try out in my own restaurant and recipes I make at home.";
    return (
      <View style={styles.container}>
        <View style={styles.childContainer}>
          <Text style={styles.username}> {username} </Text>
          <UserIcon size={120} />
        </View>
        <View style={styles.bioText}>
          <Text>{bioText}</Text>
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

  childContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },

  username: {
    fontSize: 50
  },

  bioText: {
    paddingTop: 30,
    paddingRight: 10,
    paddingLeft: 10
  }
});
