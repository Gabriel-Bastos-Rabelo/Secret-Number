import React from 'react'
import { View, StyleSheet} from 'react-native'
import Colors from '../../constants/colors'

function Card({children}) {
  return (
    <View style={styles.card}>{children}</View>
  )
}

export default Card

const styles = StyleSheet.create({

    card: {
        marginTop: 36,
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
})