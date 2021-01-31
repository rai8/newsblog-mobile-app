import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import SubTitle from './SubTitle';
import Title from './Title';

const BlockCard = ({style, imageStyle, item}) => {
  const {thumbnail, title, desc} = item;
  return (
    <View style={[styles.container, style]}>
      <Image source={{uri: thumbnail}} style={[styles.image, imageStyle]} />
      <View style={styles.contentContainer}>
        <Title>{title}</Title>
        <SubTitle>{desc}</SubTitle>
      </View>
    </View>
  );
};

export default BlockCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 5,
  },
});
