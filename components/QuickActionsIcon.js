import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { toggleQuickActions } from "../state/actions"

class QuickActionsIcon extends React.Component {
  // props:
  //   * subtext - text display under icon
  //   * source - path for icon, e.g. `{require("../path/to/image.png")}`
  //   * navigation
  //   * nextScreen - name of the next screen

  render() {

    return (
      <TouchableOpacity
        onPress={() => {
          this.props.toggleQuickActions();
          this.props.navigation.navigate(this.props.nextScreen.toString());
        }}
      >
        <View style={style.parent}>
          <View style={style.child}>
            <Image style={style.image} source={this.props.source} />
            <Text>{this.props.subtext}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  parent: {
    flex: 0,
    height: 100,
    paddingHorizontal: 20
    // backgroundColor: "red"
  },
  child: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  image: {
    width: 40,
    height: 40
  }
});

function mapStateToProps(state) {
  return {
    modal: state.modal
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleQuickActions: () => dispatch(toggleQuickActions())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuickActionsIcon)