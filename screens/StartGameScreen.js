import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Alert, Text } from "react-native"
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    const handleChangeText = (enteredNumber) => {
        setEnteredNumber(enteredNumber)
    }

    const resetNumber = () => {

        setEnteredNumber('')
    }

    const handleConfirmInput = () => {
        const choosenNumber = parseInt(enteredNumber);


        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert('Invalid Number', 'Choose a number between 1 and 99', [
                {
                    text: 'Okay',
                    onPress: resetNumber,
                    style: 'destructive',
                }
            ]);

            return

        }

        onPickNumber(choosenNumber)
    }
    return (
        <View style = {styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput style={styles.inputNumber} maxLength={2} keyboardType="number-pad" value={enteredNumber} onChangeText={handleChangeText} />

                <View style={styles.buttonsContainer}>

                    <View style={styles.buttonContainer}>
                        <PrimaryButton children={"Reset"} onPress={resetNumber} />
                    </View>

                    <View style={styles.buttonContainer}>
                        <PrimaryButton children={"Confirmar"} onPress={handleConfirmInput} />
                    </View>
                </View>

            </Card>

        </View>
    )
}

export default StartGameScreen


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
        
    },

    
    inputNumber: {
        height: 50,
        width: 50,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 1,
        color: Colors.accent500,
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 8





    },


    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 8
    },

    buttonContainer: {
        flex: 1
    },


   
})