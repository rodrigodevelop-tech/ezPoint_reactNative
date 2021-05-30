import React from 'react';
import { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
    KeyboardAvoidingView,
    Platform
} from 'react-native';

import {useNavigation} from '@react-navigation/core';

import {Button} from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function Company(){
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    const navigation = useNavigation();

    function handleCompany(){
        navigation.navigate("UserRegister");
    }

    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus(){
        setIsFocused(true);
    }

    function handleInputChange(value: string){
        setIsFilled(!!value);
        setName(value);
    }


    return (
        <SafeAreaView style={styles.container}>
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
                                {borderColor: colors.green }
                            ]}
                            placeholder="Nome da Empresa"
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                        />
                        
                        <View style={styles.footer}>
                            <Button 
                                title="Continuar"
                                onPress={handleCompany}
                            />    
                        </View>
                        
                
                    </View>
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
        justifyContent: 'center'
    },
    content: {
        flex: 1,
        width: '100%',
    },
    form: {
        flex:1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },
    emoji: {
        fontSize: 44
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center' 
    },
    title:{
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
        paddingHorizontal:20
    }

})
