/** @format */

import { Image } from 'moti';
import React from 'react';
import { StyleSheet } from 'react-native';

const ProfileImage = ({ style, source }) => {
  return (
    <Image
      style={{
        width: 50,
        height: 50,
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 9,
        },
        shadowOpacity: 0.5,
        shadowRadius: 12.35,
        elevation: 19,

        ...style,
      }}
      source={source}
    />
  );
};

const styles = StyleSheet.create({
  shadow: {
    // borderColor: '#000', // if you need
    // borderWidth: 1,
    // overflow: 'hidden',
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 1,
    elevation: 5,
    shaadowOffset: { width: 0, height: 1 },
  },
});

export default ProfileImage;
