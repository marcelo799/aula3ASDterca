import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import { useState } from "react";
import Toast from 'react-native-toast-message';
import { supabase } from '../lib/supabase';

export default function Login() {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(false)

    // const validaLogin = () =>{
    //     if(usuario == "admin" && senha == "admin"){
    //             alert("Sucesso!");
    //             Toast.show({
    //                 type: 'sucess',
    //                 text1: 'Sucesso!',
    //                 text2: 'Campeão vencedor!'
    //             });
    //     }else{
    //         alert("Usuário ou senha inválidos!")
    //         Toast.show({
    //                 type: 'error',
    //                 text1: 'Erro!',
    //                 text2: 'Usuário ou senha inválidos.'
    //         }

    //         )
    //     } 
    // }

    async function signInWithEmail() {
        setLoading(true)
        const { error } = await supabase.auth.signInWithPassword({
            email: usuario,
            password: senha,
        })
        if (error) {
            Toast.show({
                type: 'error',
                text1: 'Erro!',
                text2: 'Usuário ou senha inválidos.'
            })
        }
        setLoading(false)
    }
    async function signUpWithEmail() {
        setLoading(true)
        const {
            data: { session },
            error,
        } = await supabase.auth.signUp({
            email: usuario,
            password: senha,
        })
        if (error) {
            Toast.show({
                type: 'error',
                text1: 'Erro!',
                text2: 'Usuário ou senha inválidos.'
            })
        }
        if (!session) {
            Toast.show({
                type: 'error',
                text1: 'Erro!',
                text2: 'Usuário ou senha inválidos.'
            })
        }
        setLoading(false)
    }
    return (
        <View style={styles.container}>
            <text style={styles.titulo} >Área Restrita</text>
            <TextInput
                style={styles.input}
                value={usuario}
                onChangeText={setUsuario}
            />

            <TextInput
                style={styles.input}
                secureTextEntry={true}
                value={senha}
                onChangeText={setSenha}
            />

            <TouchableOpacity style={styles.botao} onPress={signInWithEmail}>
                <text style={styles.input} >fazer.Login</text>
            </TouchableOpacity>

            <Toast />

        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,

    },
    titulo: {
        fontFamily: 'arial',
        marginBottom: 20,
        fontSize: 24,
        color: '#00000',
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        height: 35,
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,

    },
    botao: {
        width: '100%',
        height: 35,
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 10,
    }


})


