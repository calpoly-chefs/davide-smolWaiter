import React from "react";
import { createStackNavigator } from "react-navigation";
import MainTabNavigator from "./MainTabNavigator";
import EmptyScreen from "../screens/EMPTYSCREEN";
import AddJournalEntryScreen from "../screens/AddJournalEntryScreen";

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainTabNavigator
    },
    // Practice: {
    //   screen: EmptyScreen
    // }
    Practice: {
      screen: AddJournalEntryScreen
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
