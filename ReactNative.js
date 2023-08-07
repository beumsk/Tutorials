// REACT NATIVE - Javascript Library for mobile - by Beumsk



/**/



// REACT NATIVE TRANSLATES TO IOS AND ANDROID




// get started with expo
  // npx create-expo-app --template
  // npx export start
  // npm start
  

// basic example
import React from 'react';
import { Text, View } from 'react-native';
export default function App() {
  return (
    <View>
      <Text>Hello React Native</Text>
    </View>
  )
}


// all elements
import React from 'react';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';
export default function App() {
  return (
    <ScrollView>{/* similar to <div> */}
      <Text>Hello React Native</Text>{/* similar to <p> */}
      <View>{/* similar to <div> but non-scrolling */}
        <Image />{/* similar to <img> */}
        <TextInput />{/* similar to <input type='text'> */}
      </View>
    </ScrollView>
  )
}


// inline style
// shorthand css is not possible => border does not work but borderWidth does
import React from 'react';
import { Text, View } from 'react-native';
export default function App() {
  return (
    <View style={{background: 'red', borderWidth: 1}}>
      <Text>Hello React Native</Text>
    </View>
  )
}


// style with stylesheet
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const styles = StyleSheet.create({
  container: {
    background: 'red',
    borderWidth: 1,
  }
})
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native</Text>
    </View>
  )
}


// check OS (platform)
import React from "react";
import { Platform } from 'react-native';
function ComponentIOS() {return <Text>Hello IOS</Text>}
function ComponentANDROID() {return <Text>Hello ANDROID</Text>}
export default function App() {
  const Component = Platform.select({
    ios: () => require('ComponentIOS'),
    android: () => require('ComponentANDROID'),
  })();
  return (
    <>
      <View>
        {Platform.OS === 'ios' ? <ComponentIOS /> : null }
        {Platform.OS === 'android' ? <ComponentANDROID /> : null }
      </View>
      {/* OR */}
      <Component />;
    </>
  )
}


// platform-specific extensions
// BigButton.ios.js
// BigButton.android.js
import BigButton from './BigButton'; // will import the right one based on platform


// handle statusbar
import React, { useEffect } from "react";
import { StatusBar } from 'react-native';
export default function App() {
  useEffect(() => {
    StatusBar.setBarStyle("light-content"); // or dark-content
  }, []);
  return (
    <>
      <StatusBar />
      <View>
        <Text>Hello React Native</Text>
      </View>
    </>
  )
}


// cascade doesn't work except for nested <Text><Text></Text></Text>

