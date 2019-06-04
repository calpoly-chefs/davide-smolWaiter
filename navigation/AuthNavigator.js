import React from "react";
import { createStackNavigator } from "react-navigation";
import LoginScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen"

export default AuthStack = createStackNavigator(
    {
        Login: LoginScreen,
        SignUp: SignUpScreen
        // TODO: Forgot password screen 
    },
    {
        headerMode: "none"
    }
);