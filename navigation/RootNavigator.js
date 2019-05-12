import React from "react";
import { createStackNavigator } from "react-navigation";
import MainTabNavigator from "./MainTabNavigator";
import EmptyScreen from "../screens/EMPTYSCREEN";

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainTabNavigator
    },
    Practice: {
      screen: EmptyScreen
    }
  },
  {
    initialRouteName: "Main",
    headerMode: "none"
    // mode: "modal"
    // transparentCard: true
  }
);

export default RootStack;
