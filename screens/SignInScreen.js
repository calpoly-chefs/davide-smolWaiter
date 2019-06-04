import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  Button,
  AsyncStorage,
  Alert
} from "react-native";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { login } from "../state/actions";
import store from "../state/configureStore";
import SignInForm from "../components/SignInForm";

class SignInScreen extends React.Component {
  _signInAsync = async creds => {
    this.props
      .login(creds)
      .then(() => {
        const userToken = store.getState().auth.token;
        AsyncStorage.setItem("userToken", userToken.toString());
        this.props.navigation.navigate("App");
      })
      .catch(error => {
        Alert.alert("Identity theft is not a joke, Jim.");
      });
  };

  render() {
    return (
      <View style={styles.parent}>
        <Image
          style={styles.logo}
          source={require("../assets/images/littlechef.png")}
        />
        <View style={styles.child}>
          <View style={styles.signIn}>
            {/* TODO: implement field */}
            <SignInForm onSubmit={this._signInAsync} />
          </View>
          <View style={styles.signUp}>
            <Text style={styles.helpText}> Don't have an account yet? </Text>
            <Button
              title="Create Account"
              onPress={() => this.props.navigation.navigate("SignUp")}
            />
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: credentials => dispatch(login(credentials))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreen);

const styles = StyleSheet.create({
  parent: {
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    marginVertical: 200
  },
  logo: {
    width: 250,
    resizeMode: "contain"
  },
  child: {
    //TODO
  },
  signIn: {
    //TODO
  },
  signUp: {
    alignItems: "center"
  },
  helpText: {
    color: "darkgrey"
  },
  field: {
    // paddingBottom: 100
  }
});
