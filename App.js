import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient'
import { useState, useEffect } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font'

SplashScreen.preventAutoHideAsync()
  .then((result) =>
    console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`),
  )
  .catch(console.warn)

export default function App() {

  
  const [userNumber, setUserNumber] = useState(null);
  const [times, setTimes] = useState(null);
  const [gameOver, setGameOver] = useState(false);


  // Load fonts
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
  
  // Watch for fonts to be loaded, then hide the splash screen
  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync()
    }
    if (fontsLoaded) {
      hideSplashScreen()
    }
  }, [fontsLoaded])
  // Initally return null instead of <AppLoading />
  if (!fontsLoaded) {
    return null
  }

  let gameScreen;

  
  const handleUserNumber = (number) => {
    setUserNumber(number)
    
  }

  const handleGameOver = (pickedNumber, times) => {
    setGameOver(true);
    setTimes(times)
    
  }

  const handleRestartGame = () => {
    setUserNumber(null);
    setGameOver(false);
  }

  gameScreen = <StartGameScreen onPickNumber={handleUserNumber}/>

  if(userNumber){
    gameScreen = <GameScreen pickedNumber = {userNumber} gameOver={handleGameOver}/>
  }

  if(gameOver){
    gameScreen = <GameOverScreen pickedNumber={userNumber} times={times} onPress={handleRestartGame}/>
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
