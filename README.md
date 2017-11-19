# :godmode: Grid list component

<p align="left">
  <a href="https://npmjs.org/package/react-native-grid-list"><img alt="npm version" src="http://img.shields.io/npm/v/react-native-grid-list.svg"></a>
  <a href="https://npmjs.org/package/react-native-grid-list"><img alt="npm version" src="http://img.shields.io/npm/dm/react-native-grid-list.svg"></a>
  <img alt="npm version" src="https://travis-ci.org/gusgard/react-native-grid-list.svg?branch=master">
</p>

## Installation

```
yarn add react-native-grid-list
```

or

```
npm install react-native-grid-list --save
```

## Example

```js
import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';

import GridList from 'react-native-grid-list';

const items = [
  { thumbnail: { uri:'http://lorempixel.com/640/480/animals'} },
  { thumbnail: {uri: 'https://facebook.github.io/react-native/img/favicon.png'} },
  { thumbnail: {uri: 'http://lorempixel.com/640/480/nature'} },
];

export default class ExampleGrid extends Component {

  renderItem = ({ item, index }) => (
    <Image
      style={styles.image}
      source={item.thumbnail}
    />
  )

  render() {
    return (
      <GridList
        renderItem={this.renderItem}
        data={items}
        numColumns={3}
      />
    );
  }
}

const styles = StyleSheet.create({
  ...
});
```

### Expo

[Example QR](https://snack.expo.io/girdList)

## Props

| Prop       |  Default   |   Type   | Description                                |
| :--------- | :--------: | :------: | :----------------------------------------- |
| numColumns |     3      | `number` | Number of elements in a row                |
| data       | _required_ | `array`  | Data used when render items                |
| renderItem | _required_ |  `func`  | Function that render each item of the grid |

## Author

Gustavo Gard
