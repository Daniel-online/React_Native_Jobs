import 'expo-router/entry'
import { Form } from '.././app/Form'
import { useState } from 'react'
import { Text, View, SafeAreaView, ScrollView } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { NavigationContainer } from '@react-navigation/native';

import {
  COLORS,
  fonts,
  SIZE,
  images,
  icons,
  SHADOWS,
  SIZES
} from '../jobsift-starter/constants'
import {
  NearbyJobs,
  PopularJobs,
  ScreenHeaderBtn,
  Welcome
} from '../jobsift-starter/components'


const Home = () => {
  return (
    <NavigationContainer >
      
const Stack = createStackNavigator();
  const router = useRouter();
  
  <Stack.Navigator>
        {/* Define your screens here using Stack.Screen */}
        {/* Example: */}
        <Stack.Screen name="Home" component={Form} />
        
      </Stack.Navigator>
  <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: COLORS.lightWhite
    }}
  >

    <Stack.Screen
      options={{
        headerStyle: { backgroundColor: COLORS.lightWhite },
        headerShadowVisible: false,
        headerLeft: () => (
          <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
        ),
        headerRight: () => (
          <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%" />
        ),
        headerTitle: ''
        //headerBackTitle: "aplicaçao"
      }}
    />
     <View>
      <Text>Home Screen</Text>
    </View>
    <View>
      <Form />
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          padding: SIZES.medium
        }}
      >
        <Welcome />
      </View>
    </ScrollView>
  </SafeAreaView>
  </NavigationContainer>);
}

export default Home
