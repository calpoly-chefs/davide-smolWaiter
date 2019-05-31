import React from "react";
import { View, Button, StatusBar, StyleSheet, AsyncStorage } from "react-native";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "Profile"
    // TODO: add settings icon
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
        <StatusBar barStyle="default" />
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});