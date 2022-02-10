import React from "react";
import { View, Text } from "react-native";
import { ButtonCalc } from "../components/ButtonCalc";
import { styles } from "../theme/appTheme";
import { useCalculator } from '../hooks/useCalculator';


export const CalculatorScreen = () => {

    const {
        prevNumber,
        number,
        clean,
        positiveNegative,
        buildNumber,
        btnDelete,
        btnSum,
        btnSub,
        btnMul,
        btnDiv,
        calc
    } = useCalculator();

    return (
        <View style={styles.calculatorContainer}>
            {
                (prevNumber !== '0') && (<Text style={styles.smallResult}>{prevNumber}</Text>)
            }

            <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
                {number}
            </Text>

            {/* Buttons row */}
            {/* #2D2D2D: dark gray */}
            {/* #FF9427: orange */}
            <View style={styles.row}>
                <ButtonCalc text="C" color="#9B9B9B" action={clean} />
                <ButtonCalc text="+/-" color="#9B9B9B" action={positiveNegative} />
                <ButtonCalc text="del" color="#9B9B9B" action={btnDelete} />
                <ButtonCalc text="/" color="#FF9427" action={btnDiv} />
            </View>

            <View style={styles.row}>
                <ButtonCalc text="7" action={buildNumber} />
                <ButtonCalc text="8" action={buildNumber} />
                <ButtonCalc text="9" action={buildNumber} />
                <ButtonCalc text="x" color="#FF9427" action={btnMul} />
            </View>

            <View style={styles.row}>
                <ButtonCalc text="4" action={buildNumber} />
                <ButtonCalc text="5" action={buildNumber} />
                <ButtonCalc text="6" action={buildNumber} />
                <ButtonCalc text="-" color="#FF9427" action={btnSub} />
            </View>

            <View style={styles.row}>
                <ButtonCalc text="1" action={buildNumber} />
                <ButtonCalc text="2" action={buildNumber} />
                <ButtonCalc text="3" action={buildNumber} />
                <ButtonCalc text="+" color="#FF9427" action={btnSum} />
            </View>

            <View style={styles.row}>
                <ButtonCalc text="0" action={buildNumber} width />
                <ButtonCalc text="." action={buildNumber} />
                <ButtonCalc text="=" color="#FF9427" action={calc} />
            </View>
        </View>
    );
};
