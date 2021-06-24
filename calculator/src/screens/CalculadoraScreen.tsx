import React from 'react'
import { View, StyleSheet, Text } from "react-native"
import { styles } from '../theme/appTheme'

const CalculadoraScreen = () => {
    return (
        <View style={styles.calculatorContainer}>
            <Text style={styles.littleResult}>1.500,00</Text>
            <Text style={styles.result}>1.500,00</Text>

            <View>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>1</Text>
                </View>
            </View>

        </View>
    )
}

export default CalculadoraScreen
