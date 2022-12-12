/** @format */

import { Image } from 'moti'
import React, { useState } from 'react'
import { Dimensions, TouchableOpacity } from 'react-native'
import { FlatList, View } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import colors from '../assets/Colors'
import constants from '../constants'

const Carousel = ({ images, id }) => {
  const { width, height } = Dimensions.get('screen')
  const [coverImage, setCoverImage] = useState(true)
  return (
    <View>
      <FlatList
        horizontal={true}
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        data={images}
        snapToInterval={width}
        snapToAlignment="start"
        decelerationRate={'fast'}
        style={{
          overflow: 'visible',
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => setCoverImage(!coverImage)}>
            <View
              key={item.id}
              style={{
                width, //: width - 20,
                height: (height * 2) / 3.5,
              }}
            >
              <SharedElement
                id={`place-${id}-image-${index}`}
                style={{ width: '100%', height: '100%' }}
              >
                <Image
                  style={{
                    backgroundColor: colors.BLACK + '44',
                    flex: 1,
                    resizeMode: coverImage ? 'cover' : 'contain',
                    borderRadius: 0,
                    //   marginBottom: 10,
                  }}
                  resizeMode="contain"
                  resizeMethod="resize"
                  source={{ uri: `${constants.BACKEND}/${item}` }}
                />
              </SharedElement>
            </View>
          </TouchableOpacity>
        )}
      />
      {/* <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 20,
          marginVertical: 10,
        }}
      >
        {images.map(() => (
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: colors.GREEN,
              marginHorizontal: 5,
              borderRadius: 10,
            }}
          ></View>
        ))}
      </View> */}
    </View>
  )
}

export default Carousel
