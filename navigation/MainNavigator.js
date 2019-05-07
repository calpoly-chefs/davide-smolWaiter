import React from "react";
import { createStackNavigator } from "react-navigation";

import QuickActionsScreen from "../screens/QuickActions";
import MainTabNavigator from "./MainTabNavigator";

const MainNavigator = createStackNavigator(
  {
    TabNavigator: {
      screen: MainTabNavigator
    },
    QuickActions: {
      screen: QuickActionsScreen
    }
  },
  {
    initialRouteName: "TabNavigator",
    headerMode: "none",
    mode: "modal",
    transparentCard: true
  }
);

export default MainNavigator;
