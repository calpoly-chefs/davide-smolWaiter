import React from "react";
import {
  Image,
  View,
  TouchableWithoutFeedback,
  StyleSheet
} from "react-native";

export default class Rating extends React.Component {
  _onPress(edit, num) {
    if (edit) {
      this.setState({
        fillNum: num
      });
    }
  }

  getStars = (fillNum, dim) => {
    var numStar = [1, 2, 3, 4, 5];
    return numStar.map(num => {
      if (num <= fillNum) {
        return (
          <TouchableWithoutFeedback
            onPress={() => this._onPress(this.props.edit, num)}
          >
            <Image
              style={style(dim).star}
              source={require("../assets/images/starFilled.png")}
            />
          </TouchableWithoutFeedback>
        );
      } else {
        return (
          <TouchableWithoutFeedback
            onPress={() => this._onPress(this.props.edit, num)}
          >
            <Image
              style={style(dim).star}
              source={require("../assets/images/star.png")}
            />
          </TouchableWithoutFeedback>
        );
      }
    });
  };

  state = { fillNum: this.props.fillNum };

  render() {
    const fillNum = this.state.fillNum;
    const dim = this.props.dimension;
    return <View style={style(dim).parent}>{this.getStars(fillNum, dim)}</View>;
  }

  componentDidMount() {
    this.setState();
  }
}

const style = dim =>
  StyleSheet.create({
    parent: {
      flex: 0,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly"
    },

    star: {
      width: dim,
      height: dim
    }
  });
