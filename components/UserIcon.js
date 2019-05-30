import React from "react";
import CloudinaryImage from "react-native-cloudinary-image-display";
import { View, StyleSheet, Text } from "react-native";

export default class UserIcon extends React.Component {
  static navigationOptions = {
    title: "Profile"
    // headerRight: <JournalFilter navigation={navigation} />
    // TODO: add settings icon
  };

  render() {
    const size = this.props.size;
    return (
      <View style={styles(size).parent}>
        <CloudinaryImage
          cloudName={"littlechef"}
          imageId={"alfredo.png"}
          width={1}
          height={1}
          style={styles(size).image}
        />
      </View>
    );
  }
}

const styles = size =>
  StyleSheet.create({
    parent: {
      justifyContent: "flex-start",
      flexDirection: "row",
      borderRadius: 100,
      borderColor: "#F0F0EA",
      borderWidth: 1,
      overflow: "hidden",
      height: size
    },

    image: {
      width: size,
      height: size
    }
  });
