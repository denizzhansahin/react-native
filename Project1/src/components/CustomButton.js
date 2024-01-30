import { StyleSheet, Text, View , Pressable} from 'react-native'
import React from 'react'

const CustomButton = ({buttonText,setWidth,handleOnPress, buttonColor,pressedButtonColor}) => {
  return (

    <Pressable
    onPress={() => handleOnPress()}
    style={({ pressed }) =>
      [styles.button, {
        backgroundColor: pressed ? pressedButtonColor : buttonColor,
        width: setWidth,
      }]
    }
  >
    <Text style={styles.buttonText}>{buttonText}</Text>
  </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        marginTop: 20,
      },
      buttonText: {
        fontWeight: 'bold',
        color: 'white'
      },
})