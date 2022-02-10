import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { CalculatorScreen } from "./src/screens/CalculatorScreen";
import { styles } from "./src/theme/appTheme";

export default function App() {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor="#ccc" />
      <CalculatorScreen />
      
    </SafeAreaView>
  );
}
