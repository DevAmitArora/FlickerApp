import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchBar = ({term, onTermChanged, onTermSubmitted}) => {
  return (
    <View style={styles.searchBackground}>
      <Icon name="search" style={styles.iconStyle} />
      <TextInput
        testID="input"
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={newText => onTermChanged(newText)}
        onEndEditing={() => onTermSubmitted()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBackground: {
    backgroundColor: '#F0EEEE',
    height: 50,
    marginTop: 15,
    flex: 2,
    marginBottom: 5,
    flexDirection: 'row',
    borderRadius: 4,
    marginLeft: 5,
    marginRight: 5,
  },

  inputStyle: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    marginLeft: 5,
  },

  iconStyle: {
    fontSize: 30,
    alignSelf: 'center',
    marginLeft: 5,
  },
});

console.log(SearchBar);
export default SearchBar;
