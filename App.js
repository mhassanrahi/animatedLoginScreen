import React from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ImageBackground,
} from "react-native";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <ImageBackground
                    source={require("./assests/images/header.png")}
                    style={styles.imageBackground}
                />
            </View>
            <View style={styles.footer}>
                <Text>Footer</Text>
            </View>
        </SafeAreaView>
    );
}

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
});
