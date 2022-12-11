/** @format */

import { View } from 'moti'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faHouse,
  faPlus,
  faHeart,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import colors from '../assets/Colors'
import CustomText from './CustomText'
import { Dimensions, TouchableOpacity } from 'react-native'

const Menu = () => {
  const { width } = Dimensions.get('screen')
  const itemWidth = width / 5
  return (
    <View
      style={{
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'flex-end',
        width: width,
      }}
    >
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            width: itemWidth * 2,
          }}
        >
          <FontAwesomeIcon icon={faHouse} size={26} color={colors.GREEN} />
          <CustomText
            content="Discover"
            style={{
              fontFamily: 'mm',
              color: colors.GREEN,
              marginLeft: 10,
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: colors.GREEN,
            marginBottom: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FontAwesomeIcon icon={faPlus} color={colors.WHITE} size={40} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            width: itemWidth,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FontAwesomeIcon icon={faHeart} size={26} color={colors.GREEN} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            width: itemWidth,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FontAwesomeIcon icon={faSearch} size={26} color={colors.GREEN} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Menu
