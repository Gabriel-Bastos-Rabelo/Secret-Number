import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

function NumberContainer({children}) {
  return (
    
    <Text style={styles.textContainer}>{children}</Text>
    
  )
}

export default NumberContainer


const styles = StyleSheet.create({
    viewContainer: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        margin: 24,
        padding: 24,
        borderRadius: 6
        
    },

    textContainer: {
        
        borderColor: Colors.accent500,
        borderWidth: 2,
        margin: 24,
        padding: 24,
        borderRadius: 6,
        fontSize: 36,
        color: Colors.accent500,
        textAlign: 'center',
        fontFamily: 'open-sans-bold'
    }
})