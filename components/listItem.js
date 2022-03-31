import React from 'react'
import { FlatList } from 'react-native';
import Item from './item';


const ListItem = ({items}) => {
  const renderItem = ({item})  => <Item item={item.value}/>
  return (
    <FlatList
    data={items}
    renderItem={renderItem}
    keyExtractor = {item => item.id}
    />
  )
}



export default ListItem