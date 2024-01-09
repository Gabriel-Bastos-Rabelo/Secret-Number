import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Alert } from "react-native"
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/colors';
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

        <View style={styles.inputContainer}>
            <TextInput style={styles.inputNumber} maxLength={2} keyboardType="number-pad" value={enteredNumber} onChangeText={handleChangeText} />

            <View style={styles.buttonsContainer}>

                <View style={styles.buttonContainer}>
                    <PrimaryButton children={"Reset"} onPress={resetNumber} />
                </View>

                <View style={styles.buttonContainer}>
                    <PrimaryButton children={"Confirmar"} onPress={handleConfirmInput} />
                </View>
            </View>

        </View>
    )
}

export default StartGameScreen


const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary500,
        elevation: 8,
        borderRadius: 6,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        flexDirection: 'column',
        alignItems: 'center',


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
    }
})