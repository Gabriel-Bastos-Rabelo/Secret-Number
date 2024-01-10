import React, { useEffect } from 'react'
import { Text, View, StyleSheet, Alert, FlatList, ScrollView } from 'react-native'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer'
import { useState } from 'react'
import PrimaryButton from '../components/ui/PrimaryButton'
import InstructionText from '../components/ui/InstructionText'
import Card from '../components/ui/Card'
import Ionicons from '@expo/vector-icons/Ionicons';
import GuessLogItem from '../components/game/GuessLogItem'

let min = 1;
let max = 100;


const generateRandomBetween = (min, max, firstTry, pickedNumber) => {

    const random = Math.floor(Math.random() * (max - min)) + min;


    if(firstTry && random == pickedNumber){
    
        return generateRandomBetween(min, max);
    }
   
    return random;
}




function GameScreen({pickedNumber, gameOver}) {

    

    const [count, setCount] = useState(1);
    const initialGuess = generateRandomBetween(min, max, true, pickedNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([{'round': count, 'number': initialGuess}]);

    
    const handleGenerateNewNumber = (direction) => {
       
        if((direction === 'lower' && currentGuess <= pickedNumber) || (direction === 'greater' && currentGuess >= pickedNumber)){
            
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

      

       
        const newNumber = generateRandomBetween(min, max, false, pickedNumber);
        console.log(min, max)
        setCurrentGuess(newNumber);
        setGuessRounds(currentRounds => [{'round': count + 1, 'number': newNumber}, ...currentRounds]);
        setCount(count + 1);
    }

    
   

    
    useEffect(() => {
        if(pickedNumber == currentGuess){
            gameOver(pickedNumber, count);
            min = 0;
            max = 100;
        }
    }, [currentGuess, pickedNumber, gameOver])


    

    return (
        <View style={styles.screen}>
            <Title children={"Opponent's Guess"}></Title>
            <NumberContainer children={currentGuess}/>

            <Card>
                <InstructionText style={styles.InstructionText}>Higher or lower</InstructionText>
                <View style = {styles.buttonsContainer}>
                    
                        <PrimaryButton style = {styles.buttonContainer} onPress= {() => handleGenerateNewNumber('greater')}>
                            <Ionicons name="add" size={24} color="white" />    
                        </PrimaryButton>
                    
                        <PrimaryButton  style = {styles.buttonContainer}onPress={() => handleGenerateNewNumber('lower')}>
                            <Ionicons name="remove" size={24} color="white" />
                        </PrimaryButton>
                    
                </View>
            </Card>

            <View style = {styles.listContainer}>
                
                
                <FlatList data={guessRounds}  renderItem={({item}) => { return (<GuessLogItem round={item.round} number={item.number}/>)}} keyExtractor={item => item.number}/>
            </View>

        </View>
    )
}

export default GameScreen


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        marginTop: 100
    },

    buttonsContainer: {
        flexDirection: 'row',
    },

    buttonContainer:{
        flex: 1,
        
    },


    InstructionText: {
        marginBottom: 20,

    },


    listContainer: {
        flex: 1
    }
})