import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ListGrid from 'react-native-grid-list';

const logo = {
  uri: 'https://facebook.github.io/react-native/img/opengraph.png',
};
const items = [
  { id: 1, thumbnail: logo },
  { id: 2, thumbnail: logo },
  { id: 3, thumbnail: logo },
];

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListGrid data={items} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
