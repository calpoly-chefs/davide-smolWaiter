import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";

export default class HomeScreen extends React.Component {
  // Header
  static navigationOptions = {
    title: "Recipes"
    // TODO: add filter button
  };

  render() {
    return (
      // Main Container
      <View style={styles.container}>
        {/* Scrollable Container */}
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          {/* Section I - Little Chef Icon */}
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require("../assets/images/chef-hat-black.png")
                  : require("../assets/images/chef-hat-black.png")
              }
              style={styles.welcomeImage}
            />
          </View>

          {/* Section II - External Links */}
          {/* TODO: convert to a component */}
          <View style={styles.tContainer}>
            <TouchableOpacity
              onPress={this._handleFood1Press}
              style={styles.tNewScreen}
            >
              <Text style={styles.helpLinkText}>Food 1</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tContainer}>
            <TouchableOpacity
              onPress={this._handleFood2Press}
              style={styles.tNewScreen}
            >
              <Text style={styles.helpLinkText}>Food 2</Text>
            </TouchableOpacity>
          </View>

          {/* Section III - New screen */}
          <View style={styles.tContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("RecipeDetails")}
              style={styles.tNewScreen}
            >
              <Text style={styles.tNewScreenText}>
                Click me to visit an individual recipe
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {/* End of -- Scroll Container */}

        {/* Fixed Container */}
        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>
            Learn more about the following text style by visiting...{" "}
          </Text>
          <View
            style={[styles.codeHighlightContainer, styles.navigationFilename]}
          >
            <MonoText style={styles.codeHighlightText}>
              components/StyledText.js
            </MonoText>
          </View>
        </View>
        {/* End of -- Fixed Container */}
      </View>
      // End of -- Main Container
    );
  }

  // First external link
  _handleFood1Press = () => {
    WebBrowser.openBrowserAsync("https://images.app.goo.gl/YCLvQaowsQrwsuqy7");
  };

  // Second external link
  _handleFood2Press = () => {
    WebBrowser.openBrowserAsync("https://images.app.goo.gl/GKcoEizj2dVMbtXZ8");
  };
}

// Style sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,

    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
    paddingHorizontal: 50
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center",
    backgroundColor: "#C0C1B8"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  },

  tContainer: {
    marginTop: 15,
    alignItems: "center",
    backgroundColor: "#F0F0EA"
  },
  tNewScreen: {
    paddingVertical: 15
  },
  tNewScreenText: {
    fontSize: 14,
    color: "#F32D98"
  }
});
