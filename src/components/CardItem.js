import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const CardItem = ({imageSource, style}) => {
  return (
    <View style={[styles.cardStyle, style]}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: imageSource,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
    margin: 5,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 3,
      width: 3,
    },
  },

  imageStyle: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    aspectRatio: 1,
    resizeMode: 'cover',
    borderRadius: 4,
  },
});

export default CardItem;
