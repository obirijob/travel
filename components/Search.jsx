/** @format */

import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import colors from '../assets/Colors'

const Search = () => {
  const { width, height } = Dimensions.get('screen')
  return (
    <View
      style={{
        position: 'absolute',
        height,
        width,
        backgroundColor: colors.WHITE,
      }}
    >
      <Text>Search</Text>
    </View>
  )
}

export default Search
