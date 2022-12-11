/** @format */

import React from 'react'
import { useFonts } from 'expo-font'
import { TextInput, Text } from 'react-native'

const CustomTextInput = ({
  style,
  animate,
  placeholder,
  placeholderTextColor,
  setText,
  value,
}) => {
  const [fontsLoaded] = useFonts({
    mv: require('../assets/fonts/Montserrat/variable.ttf'),
    mvi: require('../assets/fonts/Montserrat/variableitalic.ttf'),
    mbl: require('../assets/fonts/Montserrat/static/Montserrat-Black.ttf'),
    mbli: require('../assets/fonts/Montserrat/static/Montserrat-BlackItalic.ttf'),
    mb: require('../assets/fonts/Montserrat/static/Montserrat-Bold.ttf'),
    mbi: require('../assets/fonts/Montserrat/static/Montserrat-BoldItalic.ttf'),
    meb: require('../assets/fonts/Montserrat/static/Montserrat-ExtraBold.ttf'),
    mebi: require('../assets/fonts/Montserrat/static/Montserrat-ExtraBoldItalic.ttf'),
    mel: require('../assets/fonts/Montserrat/static/Montserrat-ExtraLight.ttf'),
    meli: require('../assets/fonts/Montserrat/static/Montserrat-ExtraLightItalic.ttf'),
    mi: require('../assets/fonts/Montserrat/static/Montserrat-Italic.ttf'),
    ml: require('../assets/fonts/Montserrat/static/Montserrat-Light.ttf'),
    mli: require('../assets/fonts/Montserrat/static/Montserrat-LightItalic.ttf'),
    mm: require('../assets/fonts/Montserrat/static/Montserrat-Medium.ttf'),
    mmi: require('../assets/fonts/Montserrat/static/Montserrat-MediumItalic.ttf'),
    mr: require('../assets/fonts/Montserrat/static/Montserrat-Regular.ttf'),
    msb: require('../assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf'),
    msbi: require('../assets/fonts/Montserrat/static/Montserrat-SemiBoldItalic.ttf'),
    mt: require('../assets/fonts/Montserrat/static/Montserrat-Thin.ttf'),
    mti: require('../assets/fonts/Montserrat/static/Montserrat-ThinItalic.ttf'),
    db: require('../assets/fonts/Dancing_Script/static/DancingScript-Bold.ttf'),
    dm: require('../assets/fonts/Dancing_Script/static/DancingScript-Medium.ttf'),
    dr: require('../assets/fonts/Dancing_Script/static/DancingScript-Regular.ttf'),
    dsb: require('../assets/fonts/Dancing_Script/static/DancingScript-SemiBold.ttf'),
    dv: require('../assets/fonts/Dancing_Script/variable.ttf'),
  })
  if (!fontsLoaded) {
    return <Text>Error Displaying Component</Text>
  }
  return (
    <TextInput
      style={{ ...style }}
      animate={{ ...animate }}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      onChangeText={v => setText(v)}
      value={value}
    />
  )
}

export default CustomTextInput
