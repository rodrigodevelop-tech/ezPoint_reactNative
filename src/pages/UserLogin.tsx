import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/core";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { AntDesign,Entypo  } from "@expo/vector-icons";

import api from '../services/api';

import Logo from "../assets/EZPOINT_semTitulo-sem_fundo.png";

import { LinearGradient } from 'expo-linear-gradient';

import {useAuth} from '../contexts/auth';

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
  TouchableOpacity,
  Alert
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export function UserLogin() {
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFilledEmail, setIsFilledEmail] = useState(false);
    const [isFocusedPwd, setIsFocusedPwd] = useState(false);
    const [isFilledPwd, setIsFilledPwd] = useState(false);
    const [nameEmail, setNameEmail] = useState<string>('');
    const [namePwd, setNamePwd] = useState<string>('');
    const [typeInput, seTypeInput] = useState<string>();
    const [loggeInUser,setLoggeInUser] = useState({});

    const [secure, setSecure] = useState(true);

    const navigation = useNavigation();

    const { signed,signIn } = useAuth();


    function handleUserLogin() {

        signIn(nameEmail,namePwd);

        // navigation.navigate("Dashboard")    
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
                <View style={styles.content}>
                    <LinearGradient
                        colors={[colors.gradient_roxo_1, colors.gradient_roxo_2,colors.gradient_roxo_3]}
                        style={styles.linearGradientBackGround}
                    >
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
                            <View style={styles.viewInput}>  
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
                            </View>
                                    
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
                                { secure ?
                                    <AntDesign
                                        name="eye"
                                        style={styles.iconEye}
                                        onPress={() => setSecure(!secure)}
                                    />
                                    :
                                    <Entypo 
                                        name="eye-with-line" 
                                        style={styles.iconEye} 
                                        onPress={() => setSecure(!secure)}
                                    />
                                }
                            </View>
                            
                            {/* <TouchableOpacity
                                activeOpacity={0.70}
                                onPress={handleUserCad}
                            >
                                <Text style={styles.titleCad}>
                                    Não tenho um cadastro
                                </Text>
                            </TouchableOpacity> */}

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
                                        >
                                          Continuar
                                        </Text>
                                    </LinearGradient>
                                   
                                </TouchableOpacity>
                            </View>

                        </View>
                    </LinearGradient>
                </View>
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
        backgroundColor: colors.white,
        padding: 10,
        borderRadius:20,
        // borderBottomWidth: 1,
        borderColor: colors.black,
        color: colors.heading,
        width: '100%',
        fontSize: 15,
        marginTop: 2,
        textAlign: 'left',
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
        marginLeft:-40
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
        marginBottom: 10,
        height: 56,
        width: 200
    },

    linearGradientBackGround: {
        flex: 1,
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
    titleCad:{
        fontSize: 14,
        color:colors.heading,
        fontFamily: fonts.text,
        marginTop: 10,
        paddingVertical:15
    },
})

