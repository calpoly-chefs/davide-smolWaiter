import React from "react";
import { createStackNavigator } from "react-navigation";

import QuickActions from "../screens/QuickActions";
import MainTabNavigator from "./MainTabNavigator";
import EmptyScreen from "../screens/EMPTYSCREEN";
import RecipeDetails from "../screens/RecipeDetailsScreen";

const RootStack = createStackNavigator(
  {
    MainTabNavigator: { screen: MainTabNavigator },
    QuickActionsStackNavigator: {
      screen: RecipeDetails,
      screen: QuickActions
    },
    PracticeNavigator: {
      screen: EmptyScreen
    }
  },
  {
    initialRouteName: "MainTabNavigator",
    headerMode: "none",
    mode: "modal",
    transparentCard: true
  }
);

export default RootStack;
