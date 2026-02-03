import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CadastroView() {
 return(
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
        <Text style={styles.title}>Crie sua Conta</Text>
        <TextInput style={styles.input} placeholder='Nome Completo' />
        <TextInput style={styles.input} placeholder='Email' />
        <TextInput style={styles.input} placeholder='Telefone' />
        <TextInput style={styles.input} placeholder='Criar Senha' />
        <TouchableOpacity style={styles.cadastrar}>
            <Text style={styles.cadastrarText}>Cadastrar</Text>
        </TouchableOpacity>
        </View>

    </SafeAreaView>
 );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        justifyContent: 'center',
        padding: 24
    },
    
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 32,
        color: '#333'
    },

    input: {
        backgroundColor: '#fff',
        marginBottom: 16,
        borderRadius: 8,
        padding: 15,
        alignItems: 'center'
    },

    cadastrar: {
        backgroundColor: 'rgba(30, 169, 194, 1)',
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 8
    },

    cadastrarText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    }

});