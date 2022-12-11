/** @format */

import { SafeAreaView, View } from 'moti'
import React, { useRef, useState } from 'react'
import { Dimensions, ImageBackground } from 'react-native'
import Colors from '../assets/Colors'
import CustomText from '../components/CustomText'
import Menu from '../components/Menu'
import Place from '../components/Place'
import PlacesCategory from '../components/PlacesCategory'
import ProfileImage from '../components/ProfileImage'
import { FlatList } from 'react-native'
import ShuffleArray from '../helpers/ShuffleArray'
import Animated from 'react-native-reanimated'

const Discover = () => {
  const { places } = require('../assets/places')
  const [loadedPlaces, setLoadedPlaces] = useState(places)
  const flatListRef = useRef()
  const scrollX = React.useRef(new Animated.Value(0)).current
  const { width, height } = Dimensions.get('screen')

  const vp_width = width - 100

  return (
    <ImageBackground
      source={require('../assets/images/planewing.jpg')}
      blurRadius={10}
    >
      <SafeAreaView
        style={{
          height: Dimensions.get('screen').height,
          width: Dimensions.get('screen').width,
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginTop: 20,
            marginHorizontal: 20,
          }}
        >
          <ProfileImage
            source={{
              uri: 'https://media-exp1.licdn.com/dms/image/C5603AQHBmwpfOgiDkA/profile-displayphoto-shrink_100_100/0/1652278557336?e=1675900800&v=beta&t=Pv5LUd6I4v7rk7cy2Y3Mix67v0AItTO1gOG_eM4Ntog',
            }}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 16,
            // marginBottom: 0,
            marginHorizontal: 20,
          }}
        >
          <CustomText
            content="Discover New Places"
            style={{
              fontFamily: 'dsb',
              fontSize: 40,
              color: Colors.GREEN,
            }}
          />
        </View>
        <PlacesCategory
          filterPlaces={c => {
            if (c === 0) {
              setLoadedPlaces(ShuffleArray(places))
            } else {
              let fil = [...places].filter(p => p.categories.includes(c))
              setLoadedPlaces(ShuffleArray(fil))
            }
          }}
        />
        <View style={{ flex: 1 }}>
          <Animated.FlatList
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
            data={loadedPlaces}
            ref={flatListRef}
            renderItem={({ index, item }) => {
              const inputRange = [
                (index - 1) * vp_width,
                index * vp_width,
                (index + 1) * vp_width,
              ]
              const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.6, 1, 0.6],
              })
              const scale = scrollX.interpolate({
                inputRange,
                outputRange: [1, 1, 0.9],
              })
              const transform = scrollX.interpolate({
                inputRange,
                outputRange: [0, 0, 20],
              })
              return <Place {...item} styles={{ opacity, scale, transform }} />
            }}
            keyExtractor={item => item.id}
            scrollEnabled={true}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 20,
            }}
          />
        </View>
        <Menu />
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Discover
