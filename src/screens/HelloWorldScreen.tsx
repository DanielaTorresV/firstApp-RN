import React from 'react';
import { View, Text } from 'react-native';

const HelloWorldScreen = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center'
      }}>
        <Text style={{
          fontSize: 45,
          textAlign: 'center',
          color: 'blue'
        }}>Hello World</Text>
      </View>
  )
}

export default HelloWorldScreen;
