import React from "react";
import { createStackNavigator } from "react-navigation";
import MainTabNavigator from "./MainTabNavigator";

import EmptyScreen from "../practice/EMPTYSCREEN";
import AuthDemo from "../practice/AuthDemo"

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainTabNavigator
    },
    Practice: {
      screen: AuthDemo
    }
  },
  {
    initialRouteName: "Practice",
    headerMode: "none"
    // mode: "modal"
    // transparentCard: true
  }
);

export default RootStack;
