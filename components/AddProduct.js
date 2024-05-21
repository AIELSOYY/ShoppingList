import React from 'react'
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import ButtonComponent from './ButtonComponent';
import Colors from '../constants/Colors';

const AddProduct = ({submitHandler}) => {

    const [product, setProduct] = useState("");

    const inputHandler = (val) => {
        setProduct(val)
    }

    const handleClick = () => {
        submitHandler(product);
        setProduct("")
    }

    const handleCancelledClick = () => {
      setProduct("")
    }

  return (
    <View>
        <TextInput style={styles.textInput} placeholder='Nouveau produit' onChangeText={inputHandler} value={product}/>
        {/* <Button onPress={handleClick} title='Valider'/> */}
        <View style={styles.btnContainer}>
          <ButtonComponent onPressHandler={handleClick} style={styles.btnBlue}>
            Valider
          </ButtonComponent>
          <ButtonComponent onPressHandler={handleCancelledClick} btnTitle= 'Annuler' style={styles.btnTomato} >
            Annuler
          </ButtonComponent>
        </View>
    </View>
  )
}

export default AddProduct

const styles= StyleSheet.create({
  btnContainer: {
    flexDirection: 'row', // modifier le flexDirection en 'column'
    justifyContent: 'space-between',
    marginBottom: 20
},
btnBlue: {
    marginHorizontal: 10, 
    backgroundColor: Colors.success,
    width: 150,
    borderRadius: 6
},
btnTomato: {
    marginHorizontal: 10,
    backgroundColor: Colors.danger,
    width: 150,
    borderRadius: 6
},
textInputWrapper: {
  marginTop: 50,
  backgroundColor: 'pink',
  alignItems: 'center',
  height: 200,
  width: "100%"
},
textInput: {
  height: 40,
  borderColor: Colors.gray,
  borderWidth: 1,
  padding: 10,
  margin: 9,
  width: "90%",
  marginBottom: 5,
},
})