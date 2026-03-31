import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

// Async Storage - Para salvar localmente no celular
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function LoginView({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const API_BASE_URL = 'http://10.0.2.2:5203/api/Account/login'

    const handlerLogin = async () => {
        console.log('E-mail: ', email);
        console.log('Senha: ', senha);

        if (!email || !senha) {
            Alert.alert('Atenção', 'Preencha todos os campos!');
            return 
        }

        try{
            const response = await fetch(
                `${API_BASE_URL}`,
                {
                    method: "POST",   
                    headers: {
                        "Content-Type": "application/json" // Tipo de conteúdo enviado 
                    },
                    body: JSON.stringify({
                    email: email,
                    passwordHash: senha
                    })
                }
            );

            let data;

            try{
                // Tenta converter a resposta para um objeto js
                data = await response.json();
            }
            catch{
                data = {};
            }

            if(!response.ok) {
                Alert.alert('Erro', data?.message || "Falha no login")
            }

            console.log('Data: ', data);



            if(response.ok) {
            // Salva os dados do usuário no armazenamento local (celular)
            // await AsyncStorage.setItem('user', JSON.stringify(data));

            Alert.alert('Sucesso', 'Login realizado com sucesso!');
                if(navigation) {
                    navigation.navigate('Home');
                }
            } else {
                Alert.alert('Erro', data?.message || 'E-mail ou senha inválida')
            }
        } catch(error) {
        }


    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    keyboardType='email-address'
                    style={styles.input}
                    placeholder='E-mail'>
                </TextInput>

                <TextInput
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                    style={styles.input}
                    placeholder='Senha'>
                </TextInput>
                <TouchableOpacity onPress={handlerLogin} style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.link}>Cadastro</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('EsqueciSenha')}>
                    <Text style={styles.link}>Esqueceu a senha?</Text>
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
    link: {
        marginTop: 16,
        textAlign: 'center',
        color: '#0066cc'
    }
});