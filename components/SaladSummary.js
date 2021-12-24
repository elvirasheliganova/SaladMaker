import React, { useContext, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { UserContext } from './UserContext'


const SaladSummary = () => {

  const {favs, setFavs} = useContext(UserContext)
//const favorites = user.favs
  //const obj = {...favorites}
 

 
 
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize: 26}}>Your Salad</Text>
      <View >
        <FlatList 
        data={favs}
        renderItem={({item}) => (
          <View>
            <Text>{item.type}</Text>
          </View>
        )}
        keyExtractor={(item, index) => item.key}
        />
        
      </View>
    </View>
  
)

}

export default SaladSummary
