import { TouchableOpacity, StyleSheet, View, TextInput, Text } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


export default function HeaderBar({navigation}) {
    return (
        
        <View style={styles.container}>

            {/* Container da Barra de pesquisa */}
            <View style={styles.searchContainer}>

                {/* Icone de pesquisa */}
                <Ionicons name='search' size={20} color='#888' style={styles.searchIcon} />
                
                {/* Input para buscar os jogos */}
                <TextInput style={styles.searchInput} placeholder="Busca jogos, console"
                    placeholderTextColor='#888' />
            </View>


            {/* Container dos icones de menu da conta e carrinho */}
            <View style={styles.accountContainer}>

                {/* Icone para ver informações da conta */}
                <TouchableOpacity style={styles.accountButton} onPress={() => navigation.navigate('Login')}>
                    <Ionicons name='person-circle-outline' size={30} color='#fff' />
                    <Text style={styles.accountText}>Minha Conta</Text>
                </TouchableOpacity>

                {/* Icone para ver o carrinho */}
                <TouchableOpacity>
                    <MaterialCommunityIcons name='cart-outline' size={30} color='#ff8c00' />

                    {/* Bolinha de notificação do carrinho */}
                    <View style={styles.cartBadge}><Text style={styles.textCartBadge}>10</Text></View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    searchIcon: {
        marginRigth: 8
    },
    searchInput: {
        flex: 1,
        color: '#fff'
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
        paddingHorizontal: 10,
        flex: 1,
        marginRigth: 10,
        height: 40,
        borderRadius: 20
    },
    accountContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cartBadge: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: 'red',
        // borderWidth: 1,
        // borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1

    },
    textCartBadge: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 10
    },
    accountButton:{
        alignItems: 'center',
        marginRight: 15
    },
    accountText: {
        color: '#fff',
        fontSize: 10
    }

})