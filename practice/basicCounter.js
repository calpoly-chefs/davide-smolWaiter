import React from 'react';
import { connect } from 'react-redux';
import { View, Button, Text } from 'react-native'

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <View>
        <Text>Counter</Text>
        <View>
          <Text>{this.props.count}</Text>
          <Button title="-" onPress={this.decrement}></Button>
          <Button title="+" onPress={this.increment}></Button>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);
