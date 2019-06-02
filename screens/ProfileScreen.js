import React from "react";
import {
  View,
  Button,
  StatusBar,
  StyleSheet,
  AsyncStorage,
  Text
} from "react-native";
import UserIcon from "../components/UserIcon.js";
import SettingModal from "../modals/SettingModal.js";
import { connect } from "react-redux";
import { fetchUser } from "../actions/actions";

class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Profile",
    headerRight: <SettingModal navigation={navigation} />
  });

  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    const name = this.props.user.data.fName + "\n" + this.props.user.data.lName;
    const bioText =
      "Anyone can cook! I began my career working at one of the best restaurants in Paris,  Gusteau’s where I started as a garabage boy. Now I own a succesful restaurant, Ratatouille. Follow along with the recipes I try out in my own restaurant and recipes I make at home.";
    return (
      <View style={styles.container}>
        <View style={styles.childContainer}>
          <Text style={styles.username}>{name}</Text>
          <UserIcon size={120} />
        </View>
        <View style={styles.bioText}>
          <Text>{bioText}</Text>
        </View>
        <View style={styles.container}>
          <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
          <StatusBar barStyle="default" />
        </View>
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };
}

function mapStateToProps(state) {
  return {
    user: state.user,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUser: () => dispatch(fetchUser())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);

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
