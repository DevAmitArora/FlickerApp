import React, {useState} from 'react';
import {StyleSheet, View, FlatList, TextInput} from 'react-native';
import SearchBar from '../components/SearchBar';
import useSearchPhotosResult from '../hooks/useSearchPhotosResult';
import CardItem from '../components/CardItem';
import {setTimeout} from 'core-js';

const Home = () => {
  const [term, setTerm] = useState('');
  const [searchPhotos, results, error] = useSearchPhotosResult();
  const [pageNo, setPageNo] = useState(1);
  const [spanSize, setSpanSize] = useState(1);

  const getImageURL = (photoId, serverId, secret) => {
    return `https://farm1.staticflickr.com/${serverId}/${photoId}_${secret}_z.jpg`;
  };

  const handleLoadMore = () => {
    if (term.length > 0) {
      setPageNo(pageNo + 1);
      searchPhotos(term, pageNo, true);
    }
  };

  const initNewSearch = newSearchText => {
    if (newSearchText !== term) {
      setTerm(newSearchText);
      setPageNo(1);

      this.inDebounce && clearTimeout(this.inDebounce);
      this.inDebounce = setTimeout(
        () => searchPhotos(newSearchText, pageNo, false),
        300,
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar
          term={term}
          onTermChanged={newText => initNewSearch(newText)}
          onTermSubmitted={() => initNewSearch(term)}
        />
        <TextInput
          style={styles.searchBackground}
          placeholder="Span"
          alignSelf="center"
          value={`${spanSize}`}
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={newText => {
            setSpanSize(newText);
          }}
          onEndEditing={() => setSpanSize(spanSize)}
        />
      </View>

      <FlatList
        style={styles.listStyle}
        data={results}
        numColumns={spanSize > 1 && spanSize <= 20 ? spanSize : 1}
        key={spanSize > 1 && spanSize <= 20 ? spanSize : 1}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          console.log('ON END REACHED');
          handleLoadMore();
        }}
        renderItem={({item}) => {
          return (
            <CardItem
              imageSource={getImageURL(item.id, item.server, item.secret)}
              titleText={item.title}
            />
          );
        }}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },

  searchBackground: {
    backgroundColor: '#F0EEEE',
    height: 50,
    marginTop: 15,
    flex: 1,
    marginBottom: 5,
    borderRadius: 4,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 18,
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 5,
  },

  inputStyle: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    marginLeft: 5,
  },
  container: {
    marginBottom: 20,
    marginHorizontal: 5,
  },
  imageContainer: {
    marginTop: 5,
    marginBottom: 5,
  },

  listStyle: {
    marginRight: 5,
    marginBottom: 30,
  },
});

export default Home;
