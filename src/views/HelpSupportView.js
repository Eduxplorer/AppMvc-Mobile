import { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';


export function HelpSupport() {
    const [pergunta, setPergunta] = useState(false);

    const abrirPergunta = () => {
        setPergunta(!pergunta);
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#111111ff" }}>
            <View style={styles.perguntasContainer}>
                <Text style={styles.title}>Perguntas Frequentes</Text>
                <View style={styles.buttonContainer}>
                    
                    <TouchableOpacity style={styles.button} onPress={abrirPergunta}>

                        <View style={styles.buttonInterno}>
                            <Text style={styles.buttonTitle}>Como posso solicitar um reembolso?</Text>
                            <Ionicons name="caret-forward-outline" size={20} color="#fff" />
                        </View>
                        
                        {pergunta && <Text style={styles.buttonDescription}>Mussum Ipsum, cacilds vidis litro abertis.  Quem num gosta di mé, boa gentis num é. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Quem num gosta di mim que vai caçá sua turmis!</Text>}
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <View style={styles.buttonInterno}>
                        <Text style={styles.buttonTitle}>Posso testar um jogo antes de comprá-lo?</Text>
                        <Ionicons name="caret-forward-outline" size={20} color="#fff" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <View style={styles.buttonInterno}>
                        <Text style={styles.buttonTitle}>Quais métodos de pagamento são aceitos?</Text>
                        <Ionicons name="caret-forward-outline" size={20} color="#fff" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.suporteContainer}>
                <Text>Não achou o que procura?</Text>
                <TouchableOpacity>
                    <Text>Falar no Suporte</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    perguntasContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        padding: "24"
    },
    title: {
        color: "#fff",
        fontSize: 20,
        marginBottom: 10,
    },
    buttonContainer: {
        flex: 1,
        marginBottom: 10
    },
    button: {
        backgroundColor: "#242424ff",
        padding: 20,
        margin: 5,
        borderRadius: 10

    },
    buttonTitle: {
        color: "#fff",
        marginBottom: 7
    },
    buttonDescription: {
        color: "#9c9c9cff"
    },
    buttonInterno: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});