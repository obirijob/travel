/** @format */

import { Image } from 'moti'
import React, { useState } from 'react'
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import colors from '../assets/Colors'
import constants from '../constants'

const ImageCarousel = ({ images }) => {
  const { width, height } = Dimensions.get('screen')
  const [coverImage, setCoverImage] = useState(true)

  return (
    <View style={{ backgroundColor: colors.BLACK }}>
      <FlatList
        horizontal={true}
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        data={images}
        snapToInterval={width}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setCoverImage(!coverImage)}>
            <Image
              style={{
                width,
                height,
                resizeMode: coverImage ? 'cover' : 'contain',
              }}
              resizeMode="contain"
              resizeMethod="resize"
              source={{ uri: `${constants.BACKEND}/${item}` }}
            />
          </TouchableOpacity>
        )}
      />
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          top: (height * 2) / 3 - 50,
          right: 30,
          transform: [{ translateX: -(20 * images.length) / 2 }],
        }}
      >
        {images.map(i => (
          <View
            key={i}
            style={{
              width: 10,
              height: 10,
              backgroundColor: colors.WHITE,
              margin: 5,
              borderRadius: 10,
              shadowColor: colors.RED,
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.8,
              shadowRadius: 15,
            }}
          />
        ))}
      </View>
    </View>
  )
}

export default ImageCarousel
