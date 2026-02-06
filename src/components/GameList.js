import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import {} from '@expo/vector-icons'

const icon = '../../assets/icon.png'


const GAMES = [
    {
        id: '1',
        title: 'The Last Guardian',
        price: 'R$199',
        image:require(icon)
    },
    {
        id: '2',
        title: 'Galactic Odyssey',
        price: 'R$199',
        image:require(icon)
    },
    {
        id: '3',
        title: 'Costroms',
        price: 'R$199',
        image:require(icon)
    },
    {
        id: '4',
        title: 'Orbital Froniter',
        price: 'R$199',
        image:require(icon)
    }
]

const  GameItem = ({item}) => {

    return(
    <TouchableOpacity>
        <Image source={item.image} />
        <View>
            <Text>{item.price}</Text>
        </View>
        <Text>{item.price}</Text>
    </TouchableOpacity>
    );


}


export default function GameList({title}) {

    return(
        <View>
            <Text>{title}</Text>
            <FlatList
                data={GAMES}
                renderItem={({item}) => <GameItem item={item} />}
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
    listContent: {
        paddingHorizontal: 15,
    }
});