import 'expo-router/entry'
import { useState } from 'react'
import { Text, View, SafeAreaView, ScrollView } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import {
  COLORS,
  fonts,
  SIZE,
  images,
  icons
} from '../jobsift-starter/constants'
import {
  NearbyJobs,
  PopularJobs,
  ScreenHeaderBtn,
  Welcome
} from '../jobsift-starter/components'
const Home = () => {
  const router = useRouter()

  ;<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
    <Stack.Screen
      options={{
        headerStyle: { backgroundColor: COLORS.lightwhite }
      }}
    />
  </SafeAreaView>
}
export default Home
