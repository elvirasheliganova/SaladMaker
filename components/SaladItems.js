import React, { useContext,  useState } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { UserContext } from './UserContext'




const ingredients = [
  {
    id: 1,
    image: require ('../assets/green_apple.jpg'),
    type: 'apple'
},
{
  id: 2,
  image: require ('../assets/ripe_bananas.jpg'),
  type: 'avocado'
},
{
  id: 3,
  image: require ('../assets/ripe_bananas.jpg'),
  type: 'banana'
},
{
  id: 4,
  image: require ('../assets/green_apple.jpg'),
  type: 'carrot'
},
{
  id: 5,
image: require ('../assets/ripe_bananas.jpg'),
type: 'pear'
},
{
  id: 6,
image: require ('../assets/ripe_bananas.jpg'),
type: 'cucumber'
},
]



const SaladItem = () => {
 //const [favs, setFavs] = useState('')
  
  const {favs, setFavs} = useContext(UserContext)
  
  const renderItem = ({item}) => {
    
    
    const fav = true
    //onPress = ({item}) => setFavs => {favs.push(item.type)}
    const onItemPress = (item) => {
      setFavs(prevFavs => [...prevFavs ,item])
      
      //console.log(item)
    }
    
    return (
    
    
    <TouchableOpacity
    onPress={() => onItemPress(item)}
    
    style={{width: 200, height: 200, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', margin: 15, padding: 15}}>
        <Feather name= {favs.includes(item) ?  "thumbs-up" :   ""}  size={20} color="black" style={{alignSelf: 'flex-end', }} />
        <Text>{item.type}</Text>
      <Image 
        source={ item.image } 
        style={{

          marginTop: 10,
          width: 100,
          height: 100
        }}
          />
      
    </TouchableOpacity>
  )}
    
  
  return (
    <View style={{flexDirection: 'row'}} >
      
      {/*<View style={{
        backgroundColor: '#fff',
        width: 170, 
        height: 170,
        padding: 5
      }}>
        <Feather name="thumbs-up" size={20} color="black" style={{alignSelf: 'flex-end'}} />
        <Text style={{alignSelf: 'center'}}>Apple</Text>
        <Image 
        source={require('../assets/green_apple.jpg') }
        style={{
          alignSelf: 'center',
          width: 100,
          height: 100
        }}
          />
      </View>*/}
    
      <FlatList
      
      numColumns={3}
      data={ingredients}
      renderItem={renderItem}
      keyExtractor= {(item) =>item.name} />
    </View>
    
  )
}

export default SaladItem
