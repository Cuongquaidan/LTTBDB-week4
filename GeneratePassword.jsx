import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";

const GeneratePassword = () => {
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()_+[]{}|;:,.<>?/";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const [lowerCase, setLowerCase] = useState(false);
    const [upperCase, setUpperCase] = useState(false);
    const [includeNumber, setIncludeNumber] = useState(false);
    const [specialSymbol, setSpecialSymbol] = useState(false);
    const [passwordLength, setPasswordLength] = useState(4);
    const [password, setPassword] = useState("");

    const randomIndex = (length) => Math.floor(Math.random() * length);

    const handleGeneratePassword = () => {
        let generatedPassword = "";
        if (isNaN(passwordLength) || passwordLength < 4) {
            alert("Password length must be number at least 4");
        } else {
            let characters = "";
            if (lowerCase) {
                characters += lowerCaseLetters;
                generatedPassword +=
                    lowerCaseLetters[randomIndex(lowerCaseLetters.length)];
            }
            if (upperCase) {
                characters += upperCaseLetters;
                generatedPassword +=
                    upperCaseLetters[randomIndex(upperCaseLetters.length)];
            }
            if (includeNumber) {
                characters += numbers;
                generatedPassword += numbers[randomIndex(numbers.length)];
            }
            if (specialSymbol) {
                characters += specialCharacters;
                generatedPassword +=
                    specialCharacters[randomIndex(specialCharacters.length)];
            }

            if (characters.length === 0 || passwordLength < 4) {
                alert(
                    "Please select at least one character type and ensure the length is at least 4."
                );
                return;
            }
            const bonusGenerate = passwordLength - generatedPassword.length;

            for (let i = 0; i < bonusGenerate; i++) {
                generatedPassword += characters[randomIndex(characters.length)];
            }
            setPassword(generatedPassword);
        }
    };

    return (
        <View
            style={{
                backgroundColor: "#3b3b98",
                padding: 20,
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
            <View
                style={{
                    padding: 20,
                    borderRadius: 8,
                    backgroundColor: "#23235B",
                    height: "100%",
                    justifyContent: "space-between",
                }}
            >
                <Text
                    style={{
                        ...styles.textWhite,
                        textAlign: "center",
                        fontSize: 25,
                        padding: 30,
                    }}
                >
                    PASSWORD {"\n"}GENERATOR
                </Text>
                <TextInput
                    style={{
                        backgroundColor: "#151537",
                        padding: 15,
                        color: "white",
                    }}
                    value={password}
                    editable={false}
                />

                <View style={{ ...styles.row }}>
                    <Text style={styles.textWhite}>Password length</Text>
                    <TextInput
                        style={{
                            backgroundColor: "white",
                            width: "30%",
                            padding: 4,
                            textAlign: "center",
                        }}
                        keyboardType="numeric"
                        onChangeText={(value) => {
                            const parsedValue = parseInt(value, 10);
                            if (!isNaN(parsedValue)) {
                                setPasswordLength(parsedValue);
                            } else {
                                setPasswordLength(value);
                            }
                        }}
                        value={passwordLength.toString()}
                    />
                </View>

                <View style={{ ...styles.row }}>
                    <Text style={styles.textWhite}>
                        Include lower case letters
                    </Text>
                    <CheckBoxCustom
                        selected={lowerCase}
                        onPress={() => setLowerCase((prev) => !prev)}
                    />
                </View>

                <View style={{ ...styles.row }}>
                    <Text style={styles.textWhite}>
                        Include uppercase letters
                    </Text>
                    <CheckBoxCustom
                        selected={upperCase}
                        onPress={() => setUpperCase((prev) => !prev)}
                    />
                </View>

                <View style={{ ...styles.row }}>
                    <Text style={styles.textWhite}>Include numbers</Text>
                    <CheckBoxCustom
                        selected={includeNumber}
                        onPress={() => setIncludeNumber((prev) => !prev)}
                    />
                </View>

                <View style={{ ...styles.row }}>
                    <Text style={styles.textWhite}>
                        Include special symbols
                    </Text>
                    <CheckBoxCustom
                        selected={specialSymbol}
                        onPress={() => setSpecialSymbol((prev) => !prev)}
                    />
                </View>

                <Pressable
                    style={{
                        padding: 10,
                        width: "100%",
                        backgroundColor: "#3b3b98",
                    }}
                    onPress={handleGeneratePassword}
                >
                    <Text style={{ ...styles.textWhite, textAlign: "center" }}>
                        GENERATE PASSWORD
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default GeneratePassword;

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textWhite: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: 700,
    },
});

const CheckBoxCustom = ({ selected = false, onPress = () => {} }) => {
    return (
        <Pressable
            onPress={onPress}
            style={{
                width: 20,
                height: 20,
                backgroundColor: "white",
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#000",
            }}
        >
            <Entypo
                name="check"
                size={18}
                color="black"
                style={{
                    opacity: selected ? 1 : 0,
                }}
            />
        </Pressable>
    );
};
