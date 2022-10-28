import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const CounterScreen = () => {

 const [counter, setCounter] = useState(10);

  return (
    <View style= { styles.container }>
      <Text style= { styles.title }>
        Counter: { counter }
      </Text>
      <TouchableOpacity
        onPress={ () => setCounter(counter + 1) }
        >
        <View style={ styles.button }>
          <Text>
            +1
          </Text>
        </View>            
      </TouchableOpacity>
    </View>
  )
}

export default CounterScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    top: -10
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 100
  }
})