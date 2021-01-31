import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import SubTitle from './SubTitle';
import Title from './Title';

const FlatCard = ({item}) => {
  const {thumbnail, title, desc} = item;
  return (
    <View style={styles.container}>
      <Image source={{uri: thumbnail}} style={styles.image} />
      <View style={styles.contentContainer}>
        <Title>{title}</Title>
        <SubTitle>{desc}</SubTitle>
      </View>
    </View>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 8,
    marginBottom: 10,
    height: 80,
  },
  image: {
    flex: 0.35,
    height: '100%',
  },
  contentContainer: {
    flex: 0.65,
    height: '100%',
    paddingHorizontal: 5,
  },
});
