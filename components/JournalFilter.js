import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Modal from "react-native-modal";
import Rating from "./Rating.js";
import { connect } from "react-redux";

// FIXME: modals need to use the state in order to slide up and down correctly
// import modal from "../state/ModalSlice";

class JournalFilter extends React.Component {
  // TODO:
  //   - needs to be connected to the backend to pull from
  //     db, currently uses old store
  //   - write filtering functions and connect to each filtering type

  render() {
    return (
      <View style={styles.mainContainer}>
        <Icon
          name="sliders"
          color={"#000"}
          size={24}
          onPress={() => {
            this.props.dispatch(modal.actions.setTrue());
          }}
        />

        <Modal
          visible={this.props.modal}
          transparent={false}
          swipeDirection="down"
          animationType={"slide"}
          onSwipeComplete={() => this.props.dispatch(modal.actions.toggle())}
          onBackdropPress={() => this.props.dispatch(modal.actions.toggle())}
          hideModalContentWhileAnimating={true}
        >
          <View style={styles.modalContainer}>
            <View style={styles.mHeader}>
              {/* TODO: place in TouchableOpacity with an onPress to toggle the modal */}
              <Text> Cancel </Text>
              <Text style={styles.headerText}> Sort Journal </Text>
              {/* TODO: place in TouchableOpacity with an onPress to toggle the modal */}
              <Text style={styles.doneButton}> Done </Text>
            </View>
            {/* TODO: connect filters */}
            <View style={styles.filtersContainer}>
              <View style={styles.filterContainer}>
                <Text style={styles.ratingText}>RATING - Highest First</Text>
                <Rating fillNum={5} dimension={20} />
              </View>

              <View style={styles.filterContainer}>
                <Text style={styles.ratingText}>RATING - Lowest First</Text>
                <Rating fillNum={1} dimension={20} />
              </View>

              <View style={styles.filterContainer}>
                <Text style={styles.ratingText}>DATE - Newest First</Text>
                <Text> May 12, 2019 </Text>
              </View>

              <View style={styles.filterContainer}>
                <Text style={styles.ratingText}>DATE - Oldest First</Text>
                <Text> Sept. 4, 1997 </Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // FIXME: this styling is redundent
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingRight: 15
  },
  modalContainer: {
    flex: 1,
    paddingTop: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#fff"
  },
  mHeader: {
    flex: 1,
    flexGrow: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingRight: 15,
    paddingLeft: 15
  },
  headerText: {
    paddingRight: 20,
    fontSize: 18
  },
  doneButton: {
    color: "#008000",
    fontSize: 15
  },
  cancelButton: {
    color: "#7A7A7A",
    fontSize: 15
  },
  filtersContainer: {
    flex: 1,
    flexGrow: 10,
    flexDirection: "column"
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderWidth: 0.5,
    borderColor: "#e4e4e4"
  },
  ratingText: {
    fontSize: 18
  },
  rating: {
    flexDirection: "row",
    paddingBottom: 5
  }
});

export default connect(state => ({ modal: state.modal }))(JournalFilter);
