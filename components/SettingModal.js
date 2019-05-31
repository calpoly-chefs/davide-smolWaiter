import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import modal from "../state/ModalSlice";
import UserIcon from "./UserIcon.js";
import ModalWrapper from "react-native-modal-wrapper";
import { connect } from "react-redux";

class SettingModal extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Icon
          name="settings"
          color={"#000"}
          size={24}
          onPress={() => {
            this.props.dispatch(modal.actions.setTrue());
          }}
        />

        <ModalWrapper
          containerStyle={styles.modalContainer}
          visible={this.props.modal}
          transparent={false}
          position="right"
          onRequestClose={() => this.props.dispatch(modal.actions.toggle())}
          hideModalContentWhileAnimating={true}
        >
          <View style={styles.modal}>
            <Text style={styles.heading}> Settings </Text>
            <View style={styles.userInfo}>
              <UserIcon size={50} />
              <Text> Alfredo Linguini</Text>
            </View>
            <View style={styles.childContainer}>
              <Icon name="user" color={"#000"} size={24} />
              <View style={styles.textContainer}>
                <Text style={styles.text}> Edit Profile </Text>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("AccountSetting")
                  }
                >
                  <Text style={styles.text}> Account </Text>
                </TouchableOpacity>
                <Text style={styles.text}> Sign Out </Text>
              </View>
            </View>
          </View>
        </ModalWrapper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingRight: 15
  },
  modalContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "#fff"
  },

  modal: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
    flexDirection: "column",
    width: 250
  },

  userInfo: {
    flexDirection: "row",
    alignItems: "center"
  },

  heading: {
    fontSize: 30
  },

  childContainer: {
    padding: 15,
    flexDirection: "row",
    alignItems: "flex-start"
  },

  textContainer: {
    flexDirection: "column",
    paddingLeft: 15
  },

  text: {
    fontSize: 20,
    paddingBottom: 10
  },

  userIcon: {
    width: 10,
    height: 10
  }
});

export default connect(state => ({ modal: state.modal }))(SettingModal);
