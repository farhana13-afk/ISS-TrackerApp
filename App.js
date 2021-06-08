import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/Home';
import ISSLocationScreen from './screens/ISSLocation';
import TrackerScreen from './screens/Tracker';
import UpdateScreen from './screens/Update';
import 'react-native-gesture-handler';
import {NavigationContainer} from 'react-navigation/native';
import {createStackNavigator} from 'react-navigation/stack';

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initalRouteName="HomeScreen" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="ISSLocation" component={ISSLocationScreen}/>
        <Stack.Screen name="Tracker" component={TrackerScreen}/>
        <Stack.Screen name="Update" component={UpdateScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const stack= createStackNavigator()
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'gray',
    justifycontent:'center',
    alignItems: 'center'
  }
})