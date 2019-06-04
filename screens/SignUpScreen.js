import React from "react"
import { StyleSheet, Image, View, Text, Button } from "react-native"
import { connect } from 'react-redux'
import { createUser } from "../state/actions"

class SignUpScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../assets/images/littlechef.png')} />
                <Button title="Sign Up" onPress={() => console.log("TODO: create new user")} />
            </View>
        )
    }
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: "#fff",
        alignItems: "center"
    },
    logo: {
        width: 250,
        resizeMode: 'contain'
    }
});
