import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "black",
    },
    calculatorContainer: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: "flex-end"
    },
    result: {
        color: "white",
        fontSize: 60,
        textAlign: "right",
    },
    littleResult: {
        color: "rgba(255,255,255,0.5)",
        fontSize: 30,
        textAlign: "right",
    },

    button: {
        height: 80,
        width: 80,
        borderRadius: 100,
        backgroundColor: "#333333",
        justifyContent: "center",
    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontSize: 30,
        fontWeight: "300"
    }
});