import React from "react";
import { Platform } from "react-native";
import TabBarIcon from "../components/TabBarIcon";

import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import RecipesScreen from "../screens/RecipeScreen";
import JournalScreen from "../screens/JournalScreen";
import AddModal from "../screens/AddModal";
import ProfileScreen from "../screens/ProfileScreen";
import ExploreScreen from "../screens/ExploreScreen";

// createStackNavigator provides a way for native transitions between screens
const RecipeStack = createStackNavigator({
  Recipe: RecipesScreen
});

RecipeStack.navigationOptions = {
  tabBarLabel: "Recipes",
  tabBarIcon: null // TODO: add Recipe icon

  // NOTE: here is an example of the old method for adding
  //       tab bar icons. It does not support feather icons.
  //
  // tabBarIcon: ({ focused }) => (
  //     focused={focused}
  //     name={
  //       Platform.OS === "ios"
  //         ? `ios-information-circle${focused ? "" : "-outline"}`
  //         : "md-information-circle"
  //     }
  //   />
  // )
};

const JournalStack = createStackNavigator({
  Journal: JournalScreen
});

JournalStack.navigationOptions = {
  tabBarLabel: "Journal",
  tabBarIcon: null // TODO: add Journal icon
};

// TODO: modal transition
const AddModalStack = createStackNavigator({
  Add: AddModal
});

AddModalStack.navigationOptions = {
  tabBarLabel: "Add",
  tabBarIcon: null // TODO: add Add icon
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
});

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: null // TODO: add Profile icon

  // NOTE:  additional example of the old method for loading
  //       tab bar icons
  //
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //     focused={focused}
  //     name={Platform.OS === "ios" ? "ios-options" : "md-options"}
  //   />
  // )
};

const ExploreStack = createStackNavigator({
  Explore: ExploreScreen
});

ExploreStack.navigationOptions = {
  tabBarLabel: "Explore",
  tabBarIcon: null // TODO: add Explore icon
};

export default createBottomTabNavigator({
  RecipeStack,
  JournalStack,
  AddModalStack,
  ProfileStack,
  ExploreStack
});
