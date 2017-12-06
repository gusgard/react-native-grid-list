import React, { PureComponent } from 'react';
import {
  Dimensions,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import GridList from 'react-native-grid-list';

export const { width, height } = Dimensions.get('window');

const newImage = {
  0: 'business',
  1: 'cats',
  2: 'city',
  3: 'food',
  4: 'nightlife',
  5: 'fashion',
  6: 'people',
  7: 'nature',
  8: 'animals',
  9: 'imageUrl',
};

const image = index => ({
  thumbnail: {
    uri: `https://lorempixel.com/200/200/${
      newImage[index % (Object.keys(newImage).length - 1)]
    }`,
  },
});

const itemsAnimationAndSeparator = Array.from(Array(5)).map((_, index) =>
  image(index),
);
const itemsAnimation = Array.from(Array(6)).map((_, index) => image(index));
const itemsSeparator = Array.from(Array(4)).map((_, index) => image(index));

export default class App extends PureComponent {
  renderItemAnimationAndSeparator = ({ item, animation }) => (
    <Image
      style={styles.imageRadius}
      source={item.thumbnail}
      onLoad={() => animation.start()}
    />
  );
  renderItemAnimation = ({ item, animation }) => (
    <Image
      style={styles.image}
      source={item.thumbnail}
      onLoad={() => animation.start()}
    />
  );

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* AnimationAndSeparator */}
        <Text>Separator and animation when loading</Text>
        <View style={styles.girdAnimationAndSeparator}>
          <GridList
            showAnimation
            showSeparator
            data={itemsAnimationAndSeparator}
            numColumns={3}
            renderItem={this.renderItemAnimationAndSeparator}
            separatorBorderWidth={10}
            separatorBorderColor={'black'}
            animationInitialBackgroundColor={'white'}
          />
        </View>

        {/* Animation */}
        <Text>Animation when loading</Text>
        <View style={styles.girdAnimation}>
          <GridList
            showAnimation
            data={itemsAnimation}
            numColumns={4}
            renderItem={this.renderItemAnimation}
          />
        </View>

        {/* Separator with children */}
        <Text>Separator with children</Text>
        <View style={styles.girdSeparator}>
          <GridList
            showSeparator
            numColumns={2}
            separatorBorderWidth={25}
            separatorBorderColor={'teal'}
          >
            <View style={[styles.child, { backgroundColor: 'thistle' }]}>
              <Text style={styles.text}>1</Text>
            </View>
            <Image style={styles.image} source={itemsSeparator[0].thumbnail} />
            <View style={[styles.child, { backgroundColor: 'skyblue' }]}>
              <Text style={styles.text}>3</Text>
            </View>
            <Image style={styles.image} source={itemsSeparator[3].thumbnail} />
          </GridList>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '5%',
  },
  girdAnimationAndSeparator: {
    backgroundColor: 'black',
  },
  girdAnimation: {
    backgroundColor: 'tomato',
  },
  girdSeparator: {
    borderWidth: 1,
  },
  imageRadius: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  child: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: width * 0.2,
    textAlign: 'center',
  },
});
