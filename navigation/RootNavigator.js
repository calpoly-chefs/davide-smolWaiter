import React from "react";
import { createStackNavigator } from "react-navigation";

import AddRecipeScreen from "../screens/QuickActions";
import MainTabNavigator from "./MainTabNavigator";
import EmptyScreen from "../screens/EMPTYSCREEN";

const RootStack = createStackNavigator(
  {
    MainTabNavigator: { screen: MainTabNavigator },
    AddRecipeStackNavigator: {
      screen: AddRecipeScreen
    },
    PracticeNavigator: {
      screen: EmptyScreen
    }
  },
  {
    initialRouteName: "PracticeNavigator",
    headerMode: "none",
    mode: "modal",
    transparentCard: true
  }
);

export default RootStack;
