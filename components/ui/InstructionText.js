import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

function InstructionText({children, style}) {
  return (
    <Text style={[styles.instruction, style]}>{children}</Text>
  )
}

export default InstructionText

const styles = StyleSheet.create({
    instruction: {
        fontSize: 24,
        color: Colors.accent500,
        fontFamily: 'open-sans'
    }
})