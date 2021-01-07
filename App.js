import React from "react";
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    ImageBackground,
} from "react-native";

const App = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            <View style={styles.header}>
                <ImageBackground
                    source={require("./assests/images/header.png")}
                    style={styles.imageBackground}
                >
                    <Text style={styles.companyName}>ReactNativeBox</Text>
                    <Text style={styles.signInText}>Sign in to continue</Text>
                </ImageBackground>
            </View>

            <View style={styles.footer}>
                <Text>Footer</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
    },

    header: {
        flex: 1,
    },

    footer: {
        flex: 2,
        padding: 20,
    },
    imageBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    companyName: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 10,
    },

    signInText: {
        color: "yellow",
        fontSize: 16,
    },
});

export default App;
