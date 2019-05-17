import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Alert,
  StyleSheet,
  Image
} from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/Feather";
import Ratings from "../components/Rating";
import QuickActionsIcon from "../components/QuickActionsIcon";
import { connect } from "react-redux";
import modal from "../state/ModalSlice";

class TestModal extends Component {
  render() {
    return (
      <View style={style.container}>
        {/* Icon clicked to show modal */}
        <Icon
          name="more-horizontal"
          color={"#000"}
          size={24}
          onPress={() => {
            this.props.dispatch(modal.actions.setTrue());
          }}
        />

        {/* Modal */}
        <Modal
          // FIXME: slide animation not working
          visible={this.props.modal}
          transparent={true}
          swipeDirection="down"
          animationType={"slide"}
          animationOut={"slideInDown"}
          onSwipeComplete={() => this.props.dispatch(modal.actions.toggle())}
          onBackdropPress={() => this.props.dispatch(modal.actions.toggle())}
          hideModalContentWhileAnimating={true}
        >
          <View style={style.mainContainer}>
            {/* Modal Title */}
            <Text style={style.modalHeaderText}> Quick Actions </Text>

            {/* Rate Recipe */}
            <Ratings />

            {/* History */}
            <View style={style.historyContainer}>
              <Text style={style.modalOptionText}> See Previous Versions </Text>
              <Image
                style={style.star}
                source={require("../assets/images/clock.png")}
              />
            </View>

            <View style={style.iconsContainer}>
              {/* Add Annotation*/}
              <QuickActionsIcon
                source={require("../assets/images/edit-3.png")}
                subtext="Annotate"
              />
              {/* Add Recipe */}
              <QuickActionsIcon
                source={require("../assets/images/plus-circle.png")}
                subtext="Add Recipe"
              />
              {/* Add Journal Entry */}
              <QuickActionsIcon
                source={require("../assets/images/book-open.png")}
                subtext="Add Entry"
                navigation={this.props.navigation}
                nextScreen="AddJournalEntry"
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    marginRight: 15
    // backgroundColor: "#fff"
  },
  mainContainer: {
    flex: 1,
    bottom: 0,
    top: 500,
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  },

  modalHeaderText: {
    fontSize: 24,
    textAlign: "center",
    paddingVertical: 15
    // backgroundColor: "#BDBDBD"
  },
  modalOptionText: {
    fontSize: 18,
    textAlign: "center"
  },

  historyContainer: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 10,
    height: 60
    // backgroundColor: "green"
  },

  iconsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});

// visiblity of the modal is stored in the state
export default connect(state => ({ modal: state.modal }))(TestModal);
