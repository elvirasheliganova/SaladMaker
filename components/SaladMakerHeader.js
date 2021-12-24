import React from 'react'
import { View, Text, Image } from 'react-native'
import SaladItems from './SaladItems'


const SaladMaker = () => {
  return (
    <View style={{flexDirection: 'row', width: '50%', justifyContent: 'space-between', alignItems:'center'}}>
      <View style={{borderRadius: 25, overflow: 'hidden'}}>
        <Image 
        source={require('../assets/salad.jpg')}
        style={{
          width: 100,
          height: 100
        }}/>
      </View>
      <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>Build Your Custom Salad!</Text>
      <View style={{borderRadius: 25, overflow: 'hidden'}}>
        <Image 
        source={require('../assets/salad.jpg')}
        style={{
          width: 100,
          height: 100
        }}/>
      </View>
    </View>
  )
}

export default SaladMaker
