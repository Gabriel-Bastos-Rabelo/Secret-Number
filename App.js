import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient'
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';

export default function App() {

  console.log("esta aqui");
  const [userNumber, setUsetNumber] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  let gameScreen;

  
  const handleUserNumber = (number) => {
    setUsetNumber(number)
    
  }

  const handleGameOver = () => {
    setGameOver(true);
    console.log("game over alterado");
  }

  gameScreen = <StartGameScreen onPickNumber={handleUserNumber}/>

  if(userNumber){
    gameScreen = <GameScreen pickedNumber = {userNumber} gameOver={handleGameOver}/>
  }

  if(gameOver){
    gameScreen = <GameOverScreen/>
  }

  
  


  return (

    <LinearGradient style = {styles.mainContainer} colors={[Colors.primary500, Colors.accent500]}>
      <ImageBackground source={require("./assets/images/background.jpg")} resizeMode='cover' imageStyle={styles.image} style = {styles.mainContainer}>

      <SafeAreaView style = {styles.mainContainer}>
        {gameScreen}
      </SafeAreaView>
      </ImageBackground>

   
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
 mainContainer: {
  flex: 1,

 },

 image: {
  
  opacity: 0.2
 }
});
