import React from 'react';
import {StyleSheet, View} from 'react-native';
import FlatCard from './FlatCard';
import Title from './Title';

const VerticalList = ({title, data}) => {
  return (
    <View>
      <Title>{title}</Title>
      <View style={styles.container}>
        {data.map((item) => (
          <FlatCard item={item} key={item.id} />
        ))}
      </View>
    </View>
  );
};

export default VerticalList;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});
