import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EsqueciSenhaView({navigation}) {
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container} >
                <Text style={styles.title}>Recupere sua Conta</Text>
                <Text>Insira seu email abaixo para receber o código de recuperação.</Text>
                <TextInput placeholder='Insira seu E-mail' style={styles.input} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.link}>Voltar para o Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
        padding: 24
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 32,
        textAlign: 'center',
        color: "#333"
    },
    input: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 14,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    button: {
        backgroundColor: '#0066cc',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18
    },
    link:{
        marginTop: 16,
        textAlign: 'center',
        color: '#0066cc'
    }
});