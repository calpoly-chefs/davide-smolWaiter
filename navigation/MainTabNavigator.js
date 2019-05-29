import React from "react";
import { Platform } from "react-native";

import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import RecipesHomeScreen from "../screens/RecipeHomeScreen";
import RecipesDetailsScreen from "../screens/RecipeDetailsScreen";
import AddJournalEntryScreen from "../screens/AddJournalEntryScreen";
import JournalHomeScreen from "../screens/JournalHomeScreen";
import JournalDetailsScreen from "../screens/JournalDetailsScreen";
import AddRecipeScreen from "../screens/AddModal";
import AddRecipeManualScreen from "../screens/AddRecipeManualScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ExploreScreen from "../screens/ExploreScreen";
import Icon from "react-native-vector-icons/Feather";

// createStackNavigator provides a way for native transitions between screens
const RecipeStack = createStackNavigator({
  RecipeHome: RecipesHomeScreen,
  RecipeDetails: RecipesDetailsScreen,
  AddJournalEntry: AddJournalEntryScreen
});

RecipeStack.navigationOptions = {
  tabBarLabel: "Recipes",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="copy" color={tintColor} size={24} />
  )
};

const JournalStack = createStackNavigator({
  JournalHome: JournalHomeScreen,
  JournalDetails: JournalDetailsScreen,
  AddJournalEntry: AddJournalEntryScreen
});

JournalStack.navigationOptions = {
  tabBarLabel: "Journal",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="book-open" color={tintColor} size={24} />
  )
};

//TODO: modal transition
const AddModalStack = createStackNavigator({
  Add: AddRecipeScreen,
  AddRecipeManual: AddRecipeManualScreen
});

AddModalStack.navigationOptions = {
  tabBarLabel: "Add",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="plus-circle" color={tintColor} size={24} />
  )
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
});

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="user" color={tintColor} size={24} />
  )
};

const ExploreStack = createStackNavigator({
  Explore: ExploreScreen
});

ExploreStack.navigationOptions = {
  tabBarLabel: "Explore",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="search" color={tintColor} size={24} />
  )
};

export default createBottomTabNavigator(
  {
    RecipeStack,
    JournalStack,
    AddModalStack,
    ProfileStack,
    ExploreStack
  },
  {
    tabBarOptions: {
      showLabel: true, // hide labels
      activeTintColor: "#4286f4", // active icon color
      inactiveTintColor: "#999999" // inactive icon color
      // style: {
      //   backgroundColor: "#171F33" // TabBar background
      // }
    }
  }
);
