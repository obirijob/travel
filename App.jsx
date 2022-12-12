/** @format */

import { NavigationContainer } from '@react-navigation/native'
import Search from './components/Search'
import Discover from './views/Discover'
import MyProfile from './views/MyProfile'
import React, { useState } from 'react'
import Details from './views/Details'

import { enableScreens } from 'react-native-screens'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'

enableScreens()

const Stack = createSharedElementStackNavigator()
export const AppDataContext = React.createContext({
  search: false,
})
export default function App() {
  const [search, setSearch] = useState(false)
  return (
    <AppDataContext.Provider
      value={{
        search,
        switchSearch: v => setSearch(v),
      }}
    >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Discover" headerMode="none">
          <Stack.Screen name="Discover" component={Discover} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="MyProfile" component={MyProfile} />
        </Stack.Navigator>
        {search && <Search />}
      </NavigationContainer>
    </AppDataContext.Provider>
  )
}
