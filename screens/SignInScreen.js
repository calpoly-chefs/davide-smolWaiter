import React from "react"
import { StyleSheet, Image, View, Text, Button, AsyncStorage } from "react-native"
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux'
import { login } from "../actions/actions"
import store from "../state/configureStore"
import SignInForm from "../components/SignInForm"

class SignInScreen extends React.Component {
    _signInAsync = async (creds) => {
        await this.props.login(creds);
        const userToken = store.getState().auth.token;
        await AsyncStorage.setItem('userToken', userToken.toString());
        this.props.navigation.navigate('App');
    };

    render() {
        return (
            <View style={styles.parent}>
                <Image
                    style={styles.logo}
                    source={require('../assets/images/littlechef.png')} />
                <View style={styles.child}>
                    <View style={styles.signIn}>

                        {/* TODO: implement field */}

                        <SignInForm onSubmit={this._signInAsync} />
                    </View>
                    <View style={styles.signUp}>
                        <Text style={styles.helpText}> Don't have an account yet? </Text>
                        <Button title="Create Account" onPress={() => this.props.navigation.navigate("SignUp")} />
                    </View>
                </View>

            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (credentials) => dispatch(login(credentials))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInScreen)


const styles = StyleSheet.create({
    parent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: "#fff",
        alignItems: "center",
        marginVertical: 200,
    },
    logo: {
        width: 250,
        resizeMode: 'contain'
    },
    child: {
        // TODO
    },
    signIn: {
        // TODO
    },
    signUp: {
        marginTop: 25
    },
    helpText: {
        color: "darkgrey"
    },
    field: {
        // paddingBottom: 100
    }
});