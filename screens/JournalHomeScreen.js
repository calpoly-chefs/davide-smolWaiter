import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView
} from "react-native";
import JournalFilter from "../components/JournalFilter.js";
import { connect } from "react-redux";
import JournalCard from "../components/JournalCard.js";

class JournalHomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Journal",
    headerRight: <JournalFilter navigation={navigation} />
  });

  /* recipe, tags, prepTime, cookTime, difficulty, rating, comment, annotation,timestamp */
  render() {
    const journalEntry = this.props.journalEntry.journalEntry.byId;
    const allJournalEntryIDs = this.props.journalEntry.journalEntry.allIds;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          {allJournalEntryIDs.map(id => {
            const entry = journalEntry[id];
            return (
              <TouchableOpacity style={styles.entryContainer}>
                <JournalCard entry={entry} navigation={this.props.navigation} />
              </TouchableOpacity>
            );
          })}
          {/* <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AddJournalEntry")}
            style={styles.tNewScreen}
          >
            <Text style={styles.tNewScreenText}>Add a journal entry!</Text>
          </TouchableOpacity> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 5
  },
  contentContainer: {
    paddingHorizontal: 2,
    paddingVertical: 5
  },
  entryContainer: {
    paddingBottom: 10
  },
  tNewScreen: {
    paddingVertical: 5
  },
  tNewScreenText: {
    fontSize: 14,
    color: "#F0F0EA"
  }
});

export default connect(state => ({ journalEntry: state.journalEntry }))(
  JournalHomeScreen
);
