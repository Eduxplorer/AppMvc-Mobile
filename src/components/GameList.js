import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons'

const icon = '../../assets/icon.png'


const GAMES = [
    {
        id: '1',
        title: 'The Last Guardian',
        price: 'R$199',
        discount: '10%',
        rating: 4.5,
        image: require(icon)
    },
    {
        id: '2',
        title: 'Galactic Odyssey',
        price: 'R$199',
        image: require(icon)
    },
    {
        id: '3',
        title: 'Costroms',
        price: 'R$199',
        image: require(icon)
    },
    {
        id: '4',
        title: 'Orbital Froniter',
        price: 'R$199',
        image: require(icon)
    }
]

const GameItem = ({ item }) => {

    return (
        <TouchableOpacity style={styles.itemContainer}>
            <Image style={styles.gameImage} source={item.image} />

            {item.discount && (
                <View style={styles.discountContainer}>
                    <Text style={styles.discountText}>{item.discount}</Text>
                </View>
            )}
            <View style={styles.gamePriceContainer}>
                <Text style={styles.gamePriceText}>{item.price}</Text>
            </View>
            <Text style={styles.gameTitle}>{item.title}</Text>


            {item.rating && (
                <View>
                    {Array(Math.round(item.rating)).fill(0).map((_, i) => (

                    <AntDesign key={i} name='star' size={12} color="#ffd700" />
                    ))}

                </View>
            )}
        </TouchableOpacity>
    );


}


export default function GameList({ title }) {

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={GAMES}
                renderItem={({ item }) => <GameItem item={item} />}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
            />
            {/*          
            o keyExtractor serve para botar a key em cada item da lista
            
            o atributo horizontal serve para saber se o usuário vai poder arrastar a listar e ter essa rolagem
            
            o showsHorizontalScrollIndicator serve para falar se a rolagem vai ter aquela barrinha cinza que fica embaixo
            */}
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        width: 120,
        marginRight: 15,

    },


    gameImage: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginBottom: 2
    },

    gamePriceContainer: {
        alignItems: 'center'
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

    listContent: {
        paddingHorizontal: 15,
    },

});