import { Text, View, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ForgotPassView({ navigation }) {

    const [email, setEmail] = useState('');
    const API_BASE_URL = "http://10.0.2.2:5203/api/Account/forgot-password";

    const handleForgot = async () => {

        if (!email) {
            Alert.alert("Atenção", "Preencha seu Email.");
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}`,
                {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: email
                }
            );

            if (response.ok) {
                Alert.alert("Senha Enviada com Sucesso", "Verifique sua caixa de Email");
                navigation.navigate('EsqueciSenha')
            } else {
                const erroData = response.json();
                const erroMessage = erroData.message || "Erro ao enviar Email.";
                Alert.alert('Erro', erroMessage);
            }
        } catch (error) {
            console.log("Erro ao enviar Email", error);
            Alert.alert("Ocorreu um erro!", `Erro ao enviar email: ${error}`);

        }
    }



    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>Esqueci a senha</Text>
                <Text style={styles.descricao}>Informe seu e-mail cadastrado para receber as instruções de recuperação de senha.</Text>

                <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder='Email'></TextInput>
                <TouchableOpacity style={styles.button} onPress={handleForgot}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.link}>Voltar para o login</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        padding: 24
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 32,
        textAlign: 'center',
        color: '#333'
    },
    input: {
        backgroundColor: '#fff',
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
        fontSize: 16
    },
    link: {
        marginTop: 16,
        textAlign: 'center',
        color: '#0066cc'
    },
    descricao: {
        textAlign: 'center',
        fontSize: 14,
        color: '#666',
        marginBottom: 24
    }

})