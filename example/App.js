import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ListGrid from 'react-native-grid-list';

const logo = {
  uri: 'https://facebook.github.io/react-native/img/opengraph.png',
};
const items = [{ id: 1, picture: logo }, { id: 2, picture: logo }];

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListGrid items={items} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
