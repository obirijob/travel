/** @format */

import {
  faAngleLeft,
  faComments,
  faHeart,
  faLocationDot,
  faStar,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'moti'
import React from 'react'
import {
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import colors from '../assets/Colors'
import CustomText from '../components/CustomText'
import Carousel from '../components/Carousel'

const Details = ({ navigation, route }) => {
  const item = route.params //navigation.params

  const { width, height } = Dimensions.get('screen')
  // angle-left
  return (
    <ImageBackground
      source={require('../assets/images/planewing.jpg')}
      blurRadius={10}
    >
      <View
        style={{
          borderBottomRightRadius: 100,
          overflow: 'hidden',
        }}
      >
        <Carousel images={item.images} id={item.id} />
        <SafeAreaView style={{ position: 'absolute' }}>
          <View
            style={{
              margin: 20,
              marginTop: 20,
              marginBottom: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: width - 40,
              // zIndex: 99,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.goBack()
              }}
            >
              <FontAwesomeIcon
                icon={faAngleLeft}
                size={30}
                color={colors.WHITE}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                console.log(item)
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: colors.RED,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                  shadowColor: colors.BLACK,
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0.8,
                  shadowRadius: 15,
                }}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  size={20}
                  color={colors.WHITE}
                />
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
      <SafeAreaView style={{ width, height }}>
        <View
          style={{
            marginHorizontal: 20,
            // alignItems: 'center',
            justifyContent: 'flex-start',
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <CustomText
            content={item.name}
            style={{ fontFamily: 'db', fontSize: 40 }}
            sharedElementId={`place-${item.id}-name`}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            opacity: 0.7,
            marginHorizontal: 20,
          }}
        >
          <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: 2 }} />
          <CustomText
            content={item.location + ', '}
            style={{ fontFamily: 'mb', fontSize: 15 }}
          />

          <CustomText
            content={item.country}
            style={{ fontFamily: 'mb', fontSize: 15 }}
          />
        </View>
        <View
          style={{
            marginHorizontal: 20,
            // marginVertical: 5,
            marginTop: 20,
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 30,
            }}
          >
            <FontAwesomeIcon icon={faStar} style={{ color: colors.RED }} />
            <CustomText
              content="4.2"
              style={{
                marginLeft: 5,
                fontFamily: 'mr',
                fontSize: 14,
                color: colors.RED,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 30,
            }}
          >
            <FontAwesomeIcon
              icon={faThumbsUp}
              style={{ color: colors.GREEN }}
            />
            <CustomText
              content="522"
              style={{
                marginLeft: 5,
                fontFamily: 'mr',
                fontSize: 14,
                color: colors.GREEN,
              }}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesomeIcon
              icon={faComments}
              style={{ color: colors.GREEN }}
            />
            <CustomText
              content="42"
              style={{
                marginLeft: 5,
                fontFamily: 'mr',
                fontSize: 14,
                color: colors.GREEN,
              }}
            />
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 10,
            flex: 1,
            overflow: 'scroll',
          }}
        >
          <CustomText content={item.details} style={{ fontFamily: 'mr' }} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

Details.sharedElements = (route, otherRoute, showing) => {
  const item = route.params
  return [{ id: `place-${item.id}-image-0`, animation: 'move' }]
}

export default Details
