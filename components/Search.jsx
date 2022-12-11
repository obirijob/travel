/** @format */

import { Dimensions } from 'react-native'
import React from 'react'
import colors from '../assets/Colors'
import { SafeAreaView } from 'moti'
import { BlurView } from 'expo-blur'
import CustomText from './CustomText'

const Search = () => {
  const { width, height } = Dimensions.get('screen')
  return (
    <BlurView
      style={{
        position: 'absolute',
        height,
        width,
        backgroundColor: colors.WHITE + '55',
        paddingHorizontal: 30,
        paddingTop: 50,
      }}
    >
      <SafeAreaView>
        <CustomText
          content={'Search'}
          style={{ fontFamily: 'db', fontSize: 50, color: colors.GREEN }}
        />
      </SafeAreaView>
    </BlurView>
  )
}

export default Search
