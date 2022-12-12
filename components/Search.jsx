/** @format */

import { Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import colors from '../assets/Colors'
import { SafeAreaView, View } from 'moti'
import { BlurView } from 'expo-blur'
import CustomText from './CustomText'
import CustomTextInput from './CustomTextInput'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch, faX } from '@fortawesome/free-solid-svg-icons'
import { AppDataContext } from '../App'

const Search = () => {
  const { width, height } = Dimensions.get('screen')
  const [search, setSearch] = useState('')

  const appDataContext = React.useContext(AppDataContext)

  return (
    <BlurView
      style={{
        position: 'absolute',
        height,
        width,
        backgroundColor: colors.WHITE + '55',
        paddingHorizontal: 30,
        paddingTop: 50,
      }}
    >
      <SafeAreaView>
        <CustomText
          content={'Search'}
          style={{ fontFamily: 'db', fontSize: 50, color: colors.GREEN }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              width: '100%',
              // height: 40,
              marginVertical: 20,
              padding: 10,
              paddingLeft: 14,
              borderRadius: 15,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}
            animate={{
              backgroundColor: !!search
                ? colors.BLACK + '55'
                : colors.GREEN + '25',
            }}
          >
            <FontAwesomeIcon
              icon={faSearch}
              color={!!search ? colors.WHITE : colors.GREEN + '55'}
            />
            <CustomTextInput
              placeholder={'Type to Search'}
              placeholderTextColor={colors.GREEN + '55'}
              style={{
                fontSize: 20,
                fontFamily: 'mr',
                color: colors.WHITE,
                flex: 1,
                marginLeft: 10,
              }}
              value={search}
              setText={v => setSearch(v)}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              appDataContext.switchSearch(false)
            }}
          >
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.RED,
                height: 45,
                width: 45,
                marginLeft: 6,
                borderRadius: 14,
              }}
            >
              <FontAwesomeIcon icon={faX} color={colors.WHITE} />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </BlurView>
  )
}

export default Search
