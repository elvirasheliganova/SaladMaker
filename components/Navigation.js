import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { UserContext } from './UserContext'



const Navigation = () => {

  const {user, favs} = useContext(UserContext)
  
  
  return (
    <View style={{
       
      width: '100%', 
      borderBottomColor: 'black', 
      borderBottomWidth: 1, 
      padding: 15, 
      margin: 15, 
      backgroundColor: 'grey', alignItems: 'flex-end'}}>
      <Text style={{color: 'black', fontSize: 20}}>Welcome, {user}!</Text>
    </View>
  )
}

export default Navigation
