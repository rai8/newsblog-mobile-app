import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import SmallCard from './SmallCard';
import Title from './Title';

const HorizontalList = ({title, data}) => {
  return (
    <View>
      <Title size={20}>{title}</Title>
      <View style={styles.listStyle}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <SmallCard item={item} />}
        />
      </View>
    </View>
  );
};

export default HorizontalList;

const styles = StyleSheet.create({
  listStyle: {
    marginVertical: 15,
  },
});
