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

const Discover = () => {
  const { places } = require('../assets/places')
  const [loadedPlaces, setLoadedPlaces] = useState(places)
  const flatListRef = useRef()
  return (
    <ImageBackground
      source={require('../assets/images/planewing.jpg')}
      blurRadius={10}
    >
      <SafeAreaView
        style={{
          height: Dimensions.get('screen').height,
          width: Dimensions.get('screen').width,
          // margin: 20,
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
            marginBottom: 20,
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
          <FlatList
            data={loadedPlaces}
            ref={flatListRef}
            renderItem={({ item }) => <Place {...item} />}
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
