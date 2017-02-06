//Code for ios

//Import React Library - Knows how a component should behave
import React from 'react';
//Import ReactNative component - knows how to take a component
// and show it on the device, also give us primitive components.
import { AppRegistry, View } from 'react-native';
import Main from './src/components/Main';
// import Header from './src/components/header';

//Create a Component
const App = () => (
  <View style={{ flex: 1 }}>
    <Main />
  </View>
);

//Render it to the Device
AppRegistry.registerComponent('sample', () => App);
