import React from 'react';
import { StyleSheet, ActivityIndicator, View, StatusBar, AsyncStorage } from 'react-native'
import { updateToken } from '../state/actions';
import { connect } from "react-redux";

class AuthLoadingScreen extends React.Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        //const userToken = await AsyncStorage.getItem('userToken');
        const token = await AsyncStorage.getItem('userToken')
        this.props.updateToken(token);
        // console.log("token updated action called for: "+token);
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(token ? 'App' : 'Auth');
    };

    // Render any loading content 
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
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
        updateToken: (tkn) => dispatch(updateToken(tkn))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthLoadingScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
