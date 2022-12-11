/** @format */

import { Image, View } from 'moti'
import React from 'react'
import { StyleSheet } from 'react-native'
import colors from '../assets/Colors'

const ProfileImage = ({ style, source }) => {
  return (
    <View
      style={{
        shadowColor: colors.GREEN,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 15,
      }}
    >
      <Image
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          ...style,
        }}
        source={source}
      />
    </View>
  )
}

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
})

export default ProfileImage
