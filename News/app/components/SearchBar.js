import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search here ..." style={styles.searchInput} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 8,
  },
  searchInput: {
    width: '100%',
    height: '100%',
    paddingLeft: 8,
    fontSize: 16,
  },
});
