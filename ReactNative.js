// REACT NATIVE - Javascript Library for mobile - by Beumsk



/**/



// REACT NATIVE TRANSLATES TO IOS AND ANDROID



import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    background: 'red';
  }
})


// cascade doesn't work except for nested <Text><Text></Text></Text>

