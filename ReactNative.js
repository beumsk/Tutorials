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



// ELEMENTS

// basic elements
import React from 'react';
import { Text, View } from 'react-native';
export default function App() {
  return (
    <View>{/* similar to <div> but non-scrolling */}
        <Text>Hello React Native</Text>{/* similar to <p> */}
    </View>
  )
}

// scroll view
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
export default function App() {
  return (
    <View>{/* similar to <div> but non-scrolling */}
      <ScrollView>{/* similar to <div> with scroll => should be used inside View because Parent will define its size */}
        <Text>very long content...</Text>
      </ScrollView>
    </View>
  )
}

// input
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
export default function App() {
  const [input, setInput] = useState('');
  return (
    <View>
      <TextInput placeholder="text" value={input} onChangeText={(e) => setInput(e)} />{/* similar to <input type='text'> */}
      <Text>{input}</Text>
    </View>
  )
}

// image elements
import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
export default function App() {
  return (
    <View>
      <Image source={require('./path-to-img.png')} />{/* similar to <img> */}
      <ImageBackground source={require('./path-to-img.png')}>
        <Text>...</Text>{/* similar to <Image />, but with children */}
      </ImageBackground>
    </View>
  )
}

// interaction elements
import React from 'react';
import { Button, Pressable, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
export default function App() {
  return (
    <View>
      <Button title="Click me" onPress={functionName} />{/* title and onPress are required */}
      <TouchableHighlight onPress={functionName}><Text>Click me</Text></TouchableHighlight>
      <TouchableOpacity onPress={functionName}><Text>Click me</Text></TouchableOpacity>
      <TouchableWithoutFeedback onPress={functionName}><Text>Click me</Text></TouchableWithoutFeedback>
      {/* Pressable is go-to option!! better for style and detects long press */}
      <Pressable onPress={functionName} style={({pressed}) => pressed && {opacity: 0.5}}>
        <Text>Click me</Text>
      </Pressable>
    </View>
  )
}

// flatlist to optimize long lists
import React from 'react';
import { FlatList, Text, View } from 'react-native';
export default function App() {
  const veryLongList = [{text: '', id: ''}];
  return (
    <View>
      {/* keyExtractor is not needed if key is defined in array */}
      <FlatList data={veryLongList} renderItem={x => <Text>{x.item.text}</Text>} keyExtractor={x => x.id} />
    </View>
  )
}




// STYLE
// based on css but not as complete
// cascade doesn't work except for nested <Text><Text></Text></Text>

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
    // colors can be string, hex or rgb-rgba
    backgroundColor: 'red',
    // border cannot use shorthand property => use borderWidth and borderColor
    borderWidth: 1,
    borderColor: 'black'
    // border radius does not work on Text in iOS
    borderRadius: 4
  }
})
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native</Text>
    </View>
  )
}

// everything is flexbox; default direction is column
import React from 'react';
import { Text, View } from 'react-native';
export default function App() {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, background: 'red'}}><Text>1/6</Text></View>
      <View style={{flex: 2, background: 'orange'}}><Text>2/6</Text></View>
      <View style={{flex: 3, background: 'yellow'}}><Text>3/6</Text></View>
    </View>
  )
}



// STATUSBAR
import React, { useEffect } from "react";
// import { StatusBar } from 'react-native'; // expo is simpler
import { StatusBar } from 'expo-status-bar';
export default function App() {
  // useEffect(() => {
  //   StatusBar.setBarStyle("light-content"); // or dark-content
  // }, []);
  return (
    <>
      {/*<StatusBar />*/}
      <StatusBar style="auto" /> {/* or light or dark */}
      <View>
        <Text>Hello React Native</Text>
      </View>
    </>
  )
}



// SAFE VIEW
// npx expo install react-native-safe-area-context
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <View><Text>Safe text</Text></View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}



// PLATFORM SPECIFIC
// check OS (platform)
import React from "react";
import { Platform } from 'react-native';
// platform-specific extensions => BigButton.ios.js & BigButton.android.js
import BigButton from './BigButton'; // will import the right one based on platform
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
        <BigButton />
      </View>
      {/* OR */}
      <Component />;
    </>
  )
}



// Navigation
// need install of react-navigation
// npm install @react-navigation/native @react-navigation/native-stack
// npx expo install react-native-screens react-native-safe-area-context

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
};

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Welcome'}} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const HomeScreen = ({navigation}) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Jane'})
      }
    />
  );
};
const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};









