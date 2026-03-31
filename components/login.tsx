import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';


export default function Login (){ 
    return(
        <View style={styles.container}>
            <text style={styles.titulo} >Área Restrita</text>
            <TextInput style={styles.input} />
            <TextInput style={styles.input} secureTextEntry={true}/>
            <TouchableOpacity style={styles.botao} >
                    <text style={styles.input} >fazer.Login</text>
            </TouchableOpacity>
        </View>

    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'green', 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,

    },
    titulo:{
        fontFamily: 'arial',
        marginBottom: 20,
        fontSize: 24,
        color: '#00000',
        fontWeight: 'bold',
    },
    input:{
        width: '100%',
        height: 35,
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,

    },
    botao:{
        width: '100%',
        height: 35,
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 10,
    }


})


