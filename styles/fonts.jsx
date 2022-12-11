/** @format */

import { useFonts } from 'expo-font';

export default function Fonts() {
  const [fontsLoaded] = useFonts({
    montserrat: require('../assets/fonts/Montserrat/variable.ttf'),
    'montserrat-italic': require('../assets/fonts/Montserrat/variableitalic.ttf'),
  });
}
