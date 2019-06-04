import React from "react";
import CloudinaryImage from "react-native-cloudinary-image-display";
import { View, StyleSheet } from "react-native";

export default class UserIcon extends React.Component {
  static navigationOptions = {
    title: "Profile"
  };

  render() {
    const size = this.props.size;
    // const imageId = "user_" + this.props.id + ".png";
    const imageId = "user_1.png";
    return (
      <View style={styles(size).parent}>
        <CloudinaryImage
          cloudName={"littlechef"}
          imageId={imageId}
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
