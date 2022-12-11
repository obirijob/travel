/** @format */

import { View } from 'moti'
import React, { useContext } from 'react'
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
import { AppDataContext } from '../App'

const Menu = ({ setSearch }) => {
  const { width } = Dimensions.get('screen')
  const itemWidth = width / 5

  const appDataContext = useContext(AppDataContext)
  return (
    <View
      style={{
        marginTop: -20,
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
            shadowColor: colors.GREEN,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.8,
            shadowRadius: 15,
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
      <TouchableOpacity onPress={() => appDataContext.switchSearch(true)}>
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
