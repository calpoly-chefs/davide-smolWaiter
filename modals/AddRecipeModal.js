import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Modal from "react-native-modal";
import { connect } from "react-redux";

class AddRecipeModal extends React.Component {
  static navigationOptions = {
    title: "Add"
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Modal */}
        {/* // TODO: Fix animation of modal */}
        <Modal
          visible={true}
          transparent={true}
          swipeDirection="down"
          animationType={"slide"}
          animationOut={"slide"}
          onSwipeComplete={() => this.props.dispatch(modal.actions.toggle())}
          onBackdropPress={() => this.props.dispatch(modal.actions.toggle())}
          hideModalContentWhileAnimating={true}
        >
          <View style={styles.mainContainer}>
            {/* Modal Title */}
            <Text style={styles.modalHeaderText}> Add Recipe </Text>

            {/* Link, Camera, and Manual */}
            <View style={styles.iconsContainer}>
              <View style={styles.iconContainer}>
                <Icon style={styles.icon} name="link" size={35} />
                <Text style={styles.iconText}> Link </Text>
              </View>
              <View style={styles.iconContainer}>
                <Icon style={styles.icon} name="camera" size={35} />
                <Text style={styles.iconText}> Camera </Text>
              </View>
              <View style={styles.iconContainer}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("AddRecipeManual")
                  }
                >
                  <Icon style={styles.icon} name="edit-2" size={35} />
                  <Text style={styles.iconText}> Manual </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent"
  },
  mainContainer: {
    flex: 1,
    bottom: 0,
    top: 700,
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  },

  modalHeaderText: {
    fontSize: 24,
    textAlign: "center",
    paddingVertical: 15
  },

  iconsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },

  iconContainer: {
    flex: 1,
    alignContent: "center"
  },

  icon: {
    paddingLeft: 45
  },

  iconText: {
    fontSize: 18,
    paddingTop: 15,
    textAlign: "center"
  }
});

export default connect(state => ({ modal: state.modal }))(AddRecipeModal);
