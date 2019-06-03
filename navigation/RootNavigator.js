import React from "react";
import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import MainTabNavigator from "./MainTabNavigator";
import AuthNavigator from "./AuthNavigator";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import JournalHomeScreen from "../screens/JournalHomeScreen";
import AddJournalEntryScreen from "../screens/AddJournalEntryScreen";
import AddRecipeManualScreen from "../screens/AddRecipeManualScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AccountSettingScreen from "../screens/AccountSettingScreen";

import LoginScreen from "../screens/SignInScreen";

const RootStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthNavigator,
    App: MainTabNavigator,

    // the following screen is for testing purposes only
    Practice: AccountSettingScreen
  },
  {
    initialRouteName: "AuthLoading",
    headerMode: "none"
  }
);

export default RootStack;
