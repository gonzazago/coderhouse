import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TextInput as Input } from 'react-native'

const TextInput = props => {
    const { textInput }  = styles;
    const { placeholder, value, handleOnChange } = props;
  return (
    <TextInput 

    placeholder={placeholder}
    onChangeText={handleOnChange}
    value={value}/>
  )
}
TextInput.defaultProp = {
    placeholder: '',
    value: ''
}

TextInput.propTypes = {
    placeholder: PropTypes.string,
    handleOnChange: PropTypes.func.isRequired,
    value: PropTypes.string

}


const styles = StyleSheet.create({

  });
  
export default TextInput