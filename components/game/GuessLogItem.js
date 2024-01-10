import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

function GuessLogItem({round, number}) {
  return (
    <View style = {styles.rootContainer}>

  

        <Text style = {styles.textContainer}>#{round}</Text>

        <Text style = {styles.textContainer}>Oponnent's Guess: {number}</Text>
        
    </View>
  )
}

export default GuessLogItem


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: Colors.accent500,
        marginTop: 20,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: Colors.primary500,
        width: '100%',
        

    },

    textContainer: {
        color: 'white',
        fontFamily: 'open-sans'
    }
   
})