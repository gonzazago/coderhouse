import { StyleSheet, View } from 'react-native';
import { useState} from "react";
import ListItem from './components/list/listItem';
import AddItem from './components/AddItem/addItem';

const App = () =>{

  const [items, setItems] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleOnPress = value => {
    const newItem = {id: counter, value}
    setItems([...items, newItem]);
    setCounter(counter+1);
  }
  const handlerModal = (items) =>{
    setItems(items)
  }
  
  const {container}  = styles;
  return (
    <View style={container}>
      <AddItem
        placeholder={'Ingrese Descripcion'}
        buttonValue= {'+'}
        handleOnPress={handleOnPress}
        />
      <ListItem
          items={items}
          emptyListMsg= {'NO EXISTEN ELEMENTOS'}
          headerList = {'LISTA DE ITEMS'}
          handlerModal={handlerModal}
      /> 

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#caf0f8',
    padding: 20,
    flexDirection: 'column',
    alignContent: 'center'
  },
  button: {
    width: 30,
    backgroundColor:'#03045e',
    marginTop:30
  },
  containerAddItem:{
    padding: 20,
    marginTop:10,
    marginBottom: 10,
    backgroundColor: '#90e0ef',
    borderRadius:10,
    flexDirection: 'column'
  },
});

export default App;
