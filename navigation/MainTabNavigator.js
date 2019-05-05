import React from "react";
import { Platform } from "react-native";
import TabBarIcon from "../components/TabBarIcon";

import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import RecipesHomeScreen from "../screens/RecipeHomeScreen";
import RecipesDetailsScreen from "../screens/RecipeDetailsScreen";
import JournalHomeScreen from "../screens/JournalHomeScreen";
import JournalDetailsScreen from "../screens/JournalDetailsScreen";
import AddRecipeScreen from "../screens/QuickActions";
import ProfileScreen from "../screens/ProfileScreen";
import ExploreScreen from "../screens/ExploreScreen";

// createStackNavigator provides a way for native transitions between screens
const RecipeStack = createStackNavigator({
  RecipeHome: RecipesHomeScreen,
  RecipeDetails: RecipesDetailsScreen
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
  JournalHome: JournalHomeScreen,
  JournalDetails: JournalDetailsScreen
});

JournalStack.navigationOptions = {
  tabBarLabel: "Journal",
  tabBarIcon: null // TODO: add Journal icon
};

// TODO: modal transition
// const AddModalStack = createStackNavigator({
//   Add: AddRecipeScreen
// });

// AddModalStack.navigationOptions = {
//   tabBarLabel: "Add",
//   tabBarIcon: null // TODO: add Add icon
// };

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
});

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: null // TODO: add Profile icon
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
  // AddModalStack,
  ProfileStack,
  ExploreStack
});
