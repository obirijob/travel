/** @format */

import { View } from 'moti'
import React, { useState, useRef } from 'react'
import CustomText from './CustomText'
import Colors from '../assets/Colors'
import { FlatList, TouchableOpacity } from 'react-native'

const PlacesCategory = ({ filterPlaces }) => {
  const { categories, places } = require('../assets/places')

  const flatListRef = useRef()

  const [selected, setSelected] = useState(0)

  const renderItem = ({ item }) => {
    const { id, label, count } = item
    let isSelected = id === selected

    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          // flatListRef.current.scrollToIndex({ animated: true, index: id })
          setSelected(id)
          filterPlaces(id)
        }}
        key={`place-${id}`}
      >
        <View
          style={{
            marginRight: 8,
            width: 100,
            height: 30,
            alignItems: 'center',
            justifyContent: isSelected ? 'center' : 'flex-end',
            borderRadius: 5,
            opacity: isSelected ? 1 : 0.6,
            flexDirection: 'row',
          }}
          animate={{
            backgroundColor: isSelected ? Colors.GREEN : Colors.WHITE,
          }}
        >
          <CustomText
            content={label}
            style={{
              fontFamily: 'mm',
              color: Colors.BLACK,
              margin: id === 0 ? 5 : 0,
            }}
            animate={{
              color: isSelected ? Colors.WHITE : Colors.GREEN,
            }}
          />
          {isSelected ||
            (count && (
              <View
                style={{
                  backgroundColor: Colors.GREEN,
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 5,
                }}
              >
                <CustomText
                  content={count}
                  style={{
                    fontFamily: 'mb',
                    color: Colors.WHITE,
                    fontSize: 10,
                  }}
                />
              </View>
            ))}
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList
      data={categories}
      ref={flatListRef}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      scrollEnabled={true}
      horizontal={true}
      style={{ flexGrow: 0 }}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 20,
      }}
    />
  )
}

export default PlacesCategory
