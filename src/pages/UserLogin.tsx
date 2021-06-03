import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';


import { useNavigation } from '@react-navigation/core';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { AntDesign } from '@expo/vector-icons';
import { Button } from '../components/Button';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../assets/EZPOINT_semTitulo.png';



export function UserLogin() {
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFilledEmail, setIsFilledEmail] = useState(false);
    const [isFocusedPwd, setIsFocusedPwd] = useState(false);
    const [isFilledPwd, setIsFilledPwd] = useState(false);
    const [nameEmail, setNameEmail] = useState<string>();
    const [namePwd, setNamePwd] = useState<string>();
    const [typeInput, seTypeInput] = useState<string>();

    const [secure, setSecure] = useState(true);

    const navigation = useNavigation();

    function handleUserLogin() {
        navigation.navigate("Dashboard");
    }

    function handleInputBlur(typeInput: string) {
        if (typeInput === "email") {
            setIsFocusedEmail(false);
            setIsFilledEmail(!!nameEmail);
            seTypeInput("email");
        }
        if (typeInput === "pwd") {
            setIsFocusedPwd(false);
            setIsFilledPwd(!!namePwd);
            seTypeInput("pwd");
        }

    }

    function handleInputFocus(typeInput: string) {
        if (typeInput === "email") {
            setIsFocusedEmail(true);
            seTypeInput("email");
        }


        if (typeInput === "pwd") {
            setIsFocusedPwd(true);
            seTypeInput("pwd");
        }

    }

    function handleInputChange(value: string) {
        if (typeInput === "email") {
            setIsFilledEmail(!!value);
            setNameEmail(value);
        }
        if (typeInput === "pwd") {
            setIsFilledPwd(!!value);
            setNamePwd(value);
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <LinearGradient
                    colors={[colors.azul_marinho, colors.cinza]}
                    style={styles.linearGradientBackGround}
                >
                    <View style={styles.content}>
                        <View style={styles.form}>
                            <Image
                                source={Logo}
                                style={styles.image}
                                resizeMode='contain'
                            />
                            <Text style={styles.title}>
                                Faça o seu login
                        </Text>

                            <Text style={styles.subTitle}>
                                Email
                            </Text>

                            <TextInput
                                style={[
                                    styles.input,
                                    (isFocusedEmail || isFilledEmail) &&
                                    { borderColor: colors.green }
                                ]}
                                placeholder="Digite seu email"
                                onBlur={() => handleInputBlur("email")}
                                onFocus={() => handleInputFocus("email")}
                                onChangeText={handleInputChange}
                                textContentType="password"

                            />


                            <Text style={styles.subTitle}>
                                Senha
                            </Text>
                            <View style={styles.viewInput}>
                                <TextInput
                                    style={[
                                        styles.input,
                                        (isFocusedPwd || isFilledPwd) &&
                                        { borderColor: colors.green }
                                    ]}
                                    placeholder="Digite uma senha"
                                    onBlur={() => handleInputBlur("pwd")}
                                    onFocus={() => handleInputFocus("pwd")}
                                    onChangeText={handleInputChange}
                                    secureTextEntry={secure}
                                />
                                <AntDesign
                                    name="eye"
                                    style={styles.iconEye}
                                    onPress={() => setSecure(!secure)}
                                />
                            </View>
                            <View style={styles.button}>
                                <TouchableOpacity
                                    style={styles.button}
                                    activeOpacity={0.70}
                                    onPress={handleUserLogin}
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
                </LinearGradient>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',

        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },
    image: {
        height: Dimensions.get('window').width * 0.7
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 0
    },
    subTitle: {
        fontFamily: fonts.text,
        textAlign: 'left',
        fontSize: 18,
        paddingHorizontal: 20,
        marginTop: 20,
        color: colors.azul_black
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 15,
        marginTop: 2,
        // paddingLeft:0,
        textAlign: 'left'
    },
    viewInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconEye: {
        fontSize: 18,
        color: colors.azul_black,
        padding: 10,
        alignItems: 'center',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
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