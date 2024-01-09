import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import Colors from '../../constants/colors'

function PrimaryButton({ children, onPress }) {


    return (

        <View style={styles.buttonOuterContainer}>
            <Pressable onPress={onPress} android_ripple={{ color: '#60063c' }} style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}>

                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton


const styles = StyleSheet.create({

    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',

    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary600,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,


    },

    buttonText: {
        color: '#ffffff',
        textAlign: 'center'
    },

    pressed: {
        opacity: 0.75
    }
})