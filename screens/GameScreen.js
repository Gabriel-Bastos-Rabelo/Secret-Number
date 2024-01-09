import React, { useEffect } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer'
import { useState } from 'react'
import PrimaryButton from '../components/ui/PrimaryButton'

let min = 1;
let max = 100;
function GameScreen({pickedNumber, gameOver}) {

    
    const generateRandomBetween = (min, max, exclude) => {

        const random = Math.floor(Math.random() * (max - min)) + min

        console.log(exclude);
        console.log(random)
        if(random === exclude){
            return generateRandomBetween(min, max, exclude)
        }

        return random
    }


    const handleGenerateNewNumber = (direction) => {
        console.log("choosed number", pickedNumber)
        console.log("current number", currentGuess);
        if((direction === 'lower' && currentGuess <= pickedNumber) || (direction === 'greater' && currentGuess >= pickedNumber)){
            console.log("chegou aqui")
            Alert.alert("Don't lie", 'You know that this is wrong', [
                {
                    text: 'Sorry',
                    style: 'cancel',
                }
            ]);

            return;
        }
        if(direction == 'lower'){
            max = currentGuess
        }
        else{
            min = currentGuess + 1
        }

        console.log("minimo", min);
        console.log("maximo", max)

       
        const newNumber = generateRandomBetween(min, max, currentGuess);

        setCurrentGuess(newNumber);
    }

    const initialGuess = generateRandomBetween(min, max, pickedNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    
    useEffect(() => {
        if(pickedNumber == currentGuess){
            gameOver()
        }
    }, [currentGuess, pickedNumber, gameOver])
    

    return (
        <View style={styles.screen}>
            <Title children={"Opponent's Guess"}></Title>
            <NumberContainer children={currentGuess}/>

            <View>
                <Text>Higher or lower?</Text>
                <PrimaryButton onPress= {() => handleGenerateNewNumber('greater')}>+</PrimaryButton>
                <PrimaryButton onPress={() => handleGenerateNewNumber('lower')}>-</PrimaryButton>
            </View>

            <View>

            </View>

        </View>
    )
}

export default GameScreen


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    }
})