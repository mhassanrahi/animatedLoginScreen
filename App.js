import React from "react";
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    ImageBackground,
    TextInput,
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
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Email</Text>
                    <View style={styles.action}>
                        <TextInput
                            placeholder="Your email address"
                            style={styles.textInput}
                        />
                    </View>
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Email</Text>
                    <View style={styles.action}>
                        <TextInput
                            placeholder="Your email address"
                            style={styles.textInput}
                        />
                    </View>
                </View>
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

    label: {
        fontSize: 16,
        fontWeight: "bold",
    },

    inputGroup: {
        marginVertical: 20,
    },
    action: {
        flexDirection: "row",
        borderBottomColor: "#f2f2f2",
        borderBottomWidth: 1,
    },

    textInput: {
        flex: 1,
        marginTop: 5,
        paddingBottom: 5,
        color: "gray",
    },
});

export default App;
