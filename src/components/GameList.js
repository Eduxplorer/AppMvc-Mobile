import { TouchableOpacity, Image, View, FlatList, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

// const GAMES = [
//     { id: '1', title: 'The Last Guardian', price: 'R$199', discount: '10%', rating: 4.5, image: require('../../assets/icon.png') },
//     { id: '2', title: 'Galactic Odyssey', price: 'R$199', image: require('../../assets/icon.png') },
//     { id: '3', title: 'Costroms', price: 'R$199', discount: '10%',rating: 5, image: require('../../assets/icon.png') },
//     { id: '4', title: 'Orbital Froniter', price: 'R$199', image: require('../../assets/icon.png') }
// ];

// const capaComFallback = ({jogoCapa}) => {

//     const [erro, setErro] = useState(false);
//     const API_BASE_URL = "http://10.0.2.2:7079/assets/";
//     const IMAGEM_PADRAO = "../../assets/icon.png";

//     return(
//         <Image
//         source={ erro ? IMAGEM_PADRAO : {url: `${API_BASE_URL}${jogoCapa}`}}
//         style={style.Image}
//         onError={setErro(true)}
//         resizeMode='cover'
//         />
//     );
// }

const GameItem = ({ item, navigation }) => {

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details')} style={styles.itemContainer}>
            {/* <Image source={{ uri: item.thumbnail }} style={styles.gameImage} /> */}
            {/* <capaComFallback jogoCapa={item.jogoCapa} /> */}

            {item.discount && (
                <View style={styles.discountContainer}>
                    <Text style={styles.discountText}>{item.discount}</Text>
                </View>

            )}



            <View style={styles.gamePriceContainer}>
                <Text style={styles.gamePriceText}>{item.preco}</Text>
            </View>
            <Text style={styles.gameTitle}>{item.nome}</Text>

            {item.rating && (
                <View style={styles.ratingContainer}>
                    {Array(Math.round(item.rating)).fill(0).map((_, i) => (
                        <AntDesign key={i} name='star' size={12} color="#ffd700" />
                    ))}
                    <Text style={styles.ratingText}>{item.avaliacao}</Text>
                </View>
            )}

        </TouchableOpacity>
    );
}

export default function GameList({ title, navigation }) {

    const [games, setGames] = useState([]);

    const API_URL = 'http://10.0.2.2:7079/api/Games/games';





    const getGames = async () => {
        try {
            const response = await fetch(API_URL);
            const json = await response.json();
            console.log(json);

            setGames(json);

            console.log(json);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getGames();
    }, [])

    /*
    useEffect(() => {
        // Faz requisição HTTP GET para uma API
        fetch('https://www.mmobomb.com/api1/games')
        // Converte o corpo da resposta (texto JSON) em objeto JavaScript
        .then(res => res.json())
        // Recebe os dados convertidos
        .then(data => {
            // Atualiza o estado da váriavel com os dados recebidos da API
            setGames(data);
            
        })
        // Se der erro mostra no console
        .catch(error => console.error(error));
    }, []) // Array vazio = Só roda uma vez
    */

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={games}
                renderItem={({ item }) => <GameItem item={item} navigation={navigation} />}
                keyExtractor={item => item.jogosId.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 30
    },
    itemContainer: {
        width: 120,
        marginRight: 15
    },
    gameImage: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginBottom: 5
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
        justifyContent: 'space-between'
    },
    ratingText: {
        color: '#fff',
        fontStyle: 12,
        paddingLeft: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 15,
        marginBottom: 10
    }

})