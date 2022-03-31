import { StyleSheet, View, Button,TextInput } from 'react-native';
import { useState} from "react";
import PropTypes from 'prop-types'


const AddItem = (props) =>{
  const {placeholder, handleOnPress, buttonValue} = props

    const [item, setItem] = useState('');

    const handleOnChange = value =>{
      setItem(value)
    }
    const onPress = () =>{
      console.log(item);
      const value = item
      setItem('')
      handleOnPress(value)
    }
  const {containerAddItem, button, textInput}  = styles;
  return (
      <View style={containerAddItem}>
        <TextInput
            style={textInput}
            placeholder={placeholder}
            value={item}
            onChangeText={handleOnChange}/>
        <Button style={button} 
            onPress={onPress}
            title={buttonValue}
         />
      </View>
  );
}

AddItem.defaultProp = {
    placeholder: '',
    value: ''
}
AddItem.propTypes = {
    placeholder: PropTypes.string,
    handleOnPress: PropTypes.func.isRequired,
    value: PropTypes.string

}

const styles = StyleSheet.create({
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
  textInput:{
    color: '#90caf9'
  }
});

export default AddItem;
