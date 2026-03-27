import React, { useEffect, useState } from 'react';
import {
    TouchableOpacity,
    Image,
    View,
    FlatList,
    StyleSheet,
    Text
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// Importação direta da imagem para garantir que o React Native a gerencie corretamente
import IconPadrao from '../../assets/icon.png';

const API_BASE_URL = "http://10.0.2.2:5203/assets/";

const CapaComFallback = ({ jogoCapa }) => {
    const [erro, setErro] = useState(false);

    // Lógica de fallback: se houver erro ou a string da capa estiver vazia, usa o ícone local
    const source = (erro || !jogoCapa)
        ? IconPadrao
        : { uri: `${API_BASE_URL}${jogoCapa}` };

    return (
        <Image
            source={source}
            style={styles.gameImage} // Corrigido para o nome correto no StyleSheet
            onError={() => setErro(true)} // Corrigido: Passando uma função, não a execução
            resizeMode='cover'
        />
    );
}

const GameItem = ({ item, navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Details', { id: item.id})}
            style={styles.itemContainer}
        >
            <CapaComFallback jogoCapa={item.jogoCapa} />

            {item.discount && (
                <View style={styles.discountContainer}>
                    <Text style={styles.discountText}>{item.discount}</Text>
                </View>
            )}

            <View style={styles.gamePriceContainer}>
                <Text style={styles.gamePriceText}>R$ {item.preco}</Text>
            </View>
            <Text style={styles.gameTitle} numberOfLines={2}>{item.nome}</Text>

            {item.avaliacao !== undefined && (
                <View style={styles.ratingContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        {Array(Math.floor(item.avaliacao || 0)).fill(0).map((_, i) => (
                            <AntDesign key={i} name='star' size={12} color="#ffd700" />
                        ))}
                    </View>
                    <Text style={styles.ratingText}>{item.avaliacao}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
}

export default function GameList({ title, navigation }) {
    const [games, setGames] = useState([]);
    const API_URL = 'http://10.0.2.2:5203/api/games';

    const getGames = async () => {
        try {
            console.log('Iniciando busca de jogos...');
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }

            const json = await response.json();
            setGames(json);
            console.log('Dados recebidos:', json);
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }

    useEffect(() => {
        getGames();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={games}
                renderItem={({ item }) => <GameItem item={item} navigation={navigation} />}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
    },
    itemContainer: {
        width: 120,
        marginRight: 15
    },
    gameImage: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginBottom: 5,
        backgroundColor: '#333' // Fundo cinza enquanto carrega
    },
    gamePriceContainer: {
        alignItems: 'center',
    },
    gamePriceText: {
        color: '#ffa500',
        fontSize: 14,
        fontWeight: 'bold'
    },
    gameTitle: {
        color: '#fff',
        fontSize: 12,
        marginBottom: 3,
        textAlign: 'center'
    },
    listContent: {
        paddingHorizontal: 15,
    },
    discountContainer: {
        position: 'absolute',
        top: 5,
        left: 5,
        backgroundColor: '#9370db',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5,
        zIndex: 10
    },
    discountText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold'
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 4
    },
    ratingText: {
        color: '#fff',
        fontSize: 12, // Corrigido de fontStyle para fontSize
        paddingLeft: 5
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 15,
        marginBottom: 10
    }
});