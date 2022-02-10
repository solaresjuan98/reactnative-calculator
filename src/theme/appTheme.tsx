import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "black",
    },
    calculatorContainer: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: 'black',
        justifyContent: 'flex-end'
    },
    result: {
        color: 'white',
        fontSize: 60,
        //marginTop: 40,
        textAlign: 'right',
        marginBottom: 30
    },
    smallResult: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 20,
        textAlign: 'right'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center', 
        marginBottom: 18,
        paddingHorizontal: 10
    },
    btn: {
        height: 80,
        width: 80,
        backgroundColor: "#2D2D2D",
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    btnText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    }
});
