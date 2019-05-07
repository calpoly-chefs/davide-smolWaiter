import React from "react";
import { createStackNavigator } from "react-navigation";
import MainNavigator from "./MainNavigator";
import EmptyScreen from "../screens/EMPTYSCREEN";

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainNavigator
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
