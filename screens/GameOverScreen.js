import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Title from '../components/ui/Title'
import Colors from '../constants/colors'
import PrimaryButton from '../components/ui/PrimaryButton'
function GameOverScreen({pickedNumber, times, onPress}) {
  return (
    <View style={styles.rootContainer}>

        <View style = {styles.textContainer}>
            <Title>GAME OVER</Title>
        </View>

        <View style = {styles.imageContainer}>
            <Image style = {styles.image} source={require("../assets/images/success.png")}></Image>

        </View>

        <Text style = {styles.summaryText}>
            Your phone needed <Text style = {styles.highlight}>{times}</Text> round to guess the number <Text style = {styles.highlight}>{pickedNumber}</Text>
        </Text>

        <PrimaryButton onPress = {onPress} style = {styles.button}>Start New Game</PrimaryButton>
    </View>
  )
}

export default GameOverScreen


const styles = StyleSheet.create({
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        margintop: 300,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: Colors.primary500,
        margin: 36
    },

    image: {
        width: '100%',
        height: '100%'
    },

    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center'

    },

    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    },

    button: {
        marginTop: 30
    }

    
})