/** @format */

import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useNavigation } from '@react-navigation/native'
import { View, Image } from 'moti'
import React from 'react'
import { Dimensions } from 'react-native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import colors from '../assets/Colors'
import constants from '../constants'
import CustomText from './CustomText'
import { SharedElement } from 'react-navigation-shared-element'
const Place = ({
  id,
  name,
  images,
  location,
  country,
  details,
  categories,
  styles,
}) => {
  const placesData = require('../assets/places')
  const navigation = useNavigation()
  const category = placesData.categories.filter(cat =>
    categories.includes(cat.id)
  )

  const { width, height } = Dimensions.get('screen')

  return (
    <TouchableOpacity
      style={{ height: '100%' }}
      activeOpacity={1}
      onPress={() => {
        navigation.navigate('Details', {
          id,
          name,
          images,
          location,
          categories,
          country,
          details,
          backgroundColor: colors[category[0].color.toUpperCase()],
        })
      }}
    >
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
          transform: [
            { scale: styles.scale },
            { translateX: styles.transform },
          ],
          shadowColor: colors.GREEN,
          shadowOffset: { width: 3, height: 20 },
          shadowOpacity: 0.8,
          shadowRadius: 15,
        }}
      >
        <SharedElement style={{ height: '80%' }} id={`place-${id}-image-0`}>
          <Image
            source={{
              uri: `${constants.BACKEND}/${images[0]}`,
            }}
            style={{
              borderRadius: 10,
              width: '100%',
              height: '100%',
              // borderBottomStartRadius: 30,
              marginTop: -height / 20,
              backgroundColor: colors.WHITE,
            }}
          />
        </SharedElement>
        <View
          style={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
            marginTop: -50,
          }}
        >
          <CustomText
            content={name}
            style={{ fontFamily: 'db', fontSize: 30 }}
            sharedElementId={`place-${id}-name`}
          />

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
    </TouchableOpacity>
  )
}

export default Place
