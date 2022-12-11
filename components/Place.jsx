/** @format */

import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { View, Image } from 'moti'
import React from 'react'
import { Dimensions } from 'react-native'
import Animated from 'react-native-reanimated'
import colors from '../assets/Colors'
import constants from '../constants'
import CustomText from './CustomText'
const Place = ({ id, name, images, location, categories, styles }) => {
  const placesData = require('../assets/places')
  const category = placesData.categories.filter(cat =>
    categories.includes(cat.id)
  )

  const { width, height } = Dimensions.get('screen')

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: colors[category[0].color.toUpperCase()] + '46',
        width: width - 100,
        // height: height - 400,
        marginRight: 15,
        marginTop: height / 20,
        marginBottom: 30,
        padding: 15,
        borderRadius: 10,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 60,
        opacity: styles.opacity,
        transform: [{ scale: styles.scale }, { translateX: styles.transform }],
        shadowColor: colors.GREEN,
        shadowOffset: { width: 3, height: 20 },
        shadowOpacity: 0.8,
        shadowRadius: 15,
      }}
    >
      <Image
        source={{
          uri: `${constants.BACKEND}/${images[0]}`,
        }}
        style={{
          borderRadius: 10,
          width: '100%',
          height: '80%',
          // borderBottomStartRadius: 30,
          marginTop: -height / 20,
          backgroundColor: colors.WHITE,
        }}
      />
      <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        <CustomText content={name} style={{ fontFamily: 'db', fontSize: 30 }} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}
        >
          <FontAwesomeIcon icon={faLocationDot} color={colors.GREEN} />
          <CustomText
            content={location}
            style={{
              fontFamily: 'msb',
              marginLeft: 10,
              fontSize: 15,
              color: colors.GREEN,
            }}
          />
        </View>
      </View>
    </Animated.View>
  )
}

export default Place
