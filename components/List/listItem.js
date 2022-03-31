import React, {useState, useEffect} from 'react'
import { StyleSheet, View,Text, FlatList } from 'react-native';
import PropTypes from 'prop-types'
import Item from '../item';
import ModalMobile from '../modal';

const ListItem = props => {
    const {items,emptyListMsg, headerList, handlerModal} = props;
    const {containerList, emptyList, title}  = styles;
    const [item, setItem] = useState({})
    const [listItems, setItems] = useState(items);
    const [ modalVisible, setModalVisible ] = useState(false);
    const [modalMsg, setModalMsg] = useState('');
    
    useEffect(() => {
        setItems(items)
    }, [items]);

    const onPress = (item) =>{
      setItem(item)
      setModalMsg(`DESEA ELIMINAR EL ITEM ${item.value}`);
      setModalVisible(true)
    }
    const onHandlerModal = id =>{
      const updateList = listItems.find ( item => item.id !== id) || []
      setItems(updateList);
      setModalVisible(false)
      //handlerModal(updateList)

    }

    const closeModal = () => {
      setModalVisible(!modalVisible);
    }
    const renderItem = ({item})  => <Item onPress ={onPress} item={item}/>
  return (
    <View style={containerList}>
        
        {
          !listItems.length?
          <Text style={emptyList}>{emptyListMsg}</Text>
          :(
            <>
              <Text style={title}>{headerList}</Text>
              <FlatList
                data={listItems}
                renderItem={renderItem}
                keyExtractor = {item => item.id}
              />
              <ModalMobile
                item={item}
                title ={'ELIMINAR'}
                body= {modalMsg}
                modalVisible={modalVisible}
                actionTitle={'ELIMINAR'}
                closeModal={closeModal}
                onHandlerModal={onHandlerModal}

              />
            </>
          )
        }
        
      </View>
  )
}

ListItem.defaultProps = {
  items: []
}

ListItem.propTypes = {
    items: PropTypes.array,
    emptyListMsg: PropTypes.string.isRequired,
    headerList: PropTypes.string.isRequired,
}



const styles = StyleSheet.create({
  containerList:{
      backgroundColor: '#0096c7',
      flex: 2,
      borderRadius:10,
    },
    emptyList:{
      backgroundColor: '#48cae4',
      borderRadius: 3,
      width: 200,
      height: 100,
      marginTop: 350,
      left:80,
      alignSelf:'center'
    },
    title: {
      textAlign: 'center',
      color: 'white'
    }
});
export default ListItem
