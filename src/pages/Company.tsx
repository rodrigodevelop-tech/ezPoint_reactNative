import React from 'react';
import { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    Alert
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { Button } from '../components/Button';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function Company() {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    const navigation = useNavigation();

    function handleCompany() {
        if(!name)
            return Alert.alert('Me diz o nome da sua empresa!');
            
        navigation.navigate("UserRegister");
    }

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setName(value);
    }


    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={[colors.gradient_roxo_1, colors.gradient_roxo_2,colors.gradient_roxo_3]}
                style={styles.linearGradientBackGround}
            >
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                    <View style={styles.content}>
                        <View style={styles.form}>
                            <Text style={styles.emoji}>
                                🏬
                        </Text>

                            <Text style={styles.title}>
                                Qual o nome da Empresa {'\n'}
                            em que trabalha?
                        </Text>

                            <TextInput
                                style={[
                                    styles.input,
                                    (isFocused || isFilled) &&
                                    { borderColor: colors.heading }
                                ]}
                                placeholder="Nome da Empresa"
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                            />

                            <View style={styles.footer}>
                                <TouchableOpacity
                                    style={styles.button}
                                    activeOpacity={0.70}
                                    onPress={handleCompany}
                                >
                                    <LinearGradient
                                        colors={[colors.azul_black, colors.blue, colors.azul_black]}
                                        style={styles.gradientButton}>
                                        <Text
                                            style={styles.confirmText}
                                        >Continuar</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>


                        </View>
                    </View>
            </KeyboardAvoidingView>
                </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',

        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        flex: 1,
        width: '100%',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },
    emoji: {
        fontSize: 44
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.white,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20
    },
    footer: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 20
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        height: 56,
        width: 200
    },

    linearGradientBackGround: {
        flex: 1,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 5
    },

    confirmText: {
        fontSize: 20,
        fontFamily: fonts.text,
        color: 'white',
        marginTop: 13
    },

    gradientButton: {
        flex: 1,
        paddingLeft: 50,
        paddingRight: 50,
        borderRadius: 10
    },

})
