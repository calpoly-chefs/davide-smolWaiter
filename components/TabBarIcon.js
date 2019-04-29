import React from "react";
import { View, Image } from "react-native";

import { Icon } from "expo";
import Colors from "../constants/Colors";

export default class TabBarIcon extends React.Component {
  render() {
    return (
      // TODO: render an individual tab bar icon with subtext
      <View>
        <Image source={require("../assets/images/robot-dev.png")} />;
      </View>

      // NOTE: old method from expo does not support feather icons
      //
      // <Icon.Ionicons
      //   name={this.props.name}
      //   size={26}
      //   style={{ marginBottom: -3 }}
      //   color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      // />
    );
  }
}
