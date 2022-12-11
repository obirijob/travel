/** @format */

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Search from './components/Search'
import Discover from './views/Discover'
import MyProfile from './views/MyProfile'
import React, { useState } from 'react'

const Stack = createNativeStackNavigator()
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
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Discover" component={Discover} />
          <Stack.Screen name="MyProfile" component={MyProfile} />
        </Stack.Navigator>
        {search && <Search />}
      </NavigationContainer>
    </AppDataContext.Provider>
  )
}
