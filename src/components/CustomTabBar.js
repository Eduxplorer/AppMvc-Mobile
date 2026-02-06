import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const TABS = [

    {
        id: '1',
        name: 'Início',
        icon: 'home',
        isCurrent: true,
        route: 'Home'
    },
    {
        id: '2',
        name: 'Categoria',
        icon: 'list',
        isCurrent: true,
        route: ''
    },
    {
        id: '3',
        name: 'Desejos',
        icon: 'heart',
        isCurrent: true,
        route: ''
    },
    {
        id: '4',
        name: 'Pedidos',
        icon: 'mail',
        isCurrent: true,
        route: ''
    },
    {
        id: '5',
        name: 'Perfil',
        icon: 'person',
        isCurrent: true,
        route: 'Login'
    }

]

const TabItem = ({ item, navigation }) => (

    <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate(item.route)}>

        <Ionicons name={`${item.icon}-outline`} size={24} color='#888' />
        <Text style={styles.tabText}>{item.name}</Text>

    </TouchableOpacity>
)


// const TabItem = ({ item, navigation }) => (
//   <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate(item.route)}>

//     <Ionicons name={`${item.icon}-outline`} size={24} color='#888' />

//     <Text style={styles.tabText}>{item.name}</Text>
//   </TouchableOpacity>
// );



export default function CustomTabBar({ navigation }) {
    return (
        <View style={styles.container}>
            {TABS.map(tab => (
                <TabItem key={tab.id} item={tab} navigation={navigation} />
            ))}


        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 65,
        backgroundColor: '#0a0a0a',
        borderWidth: 1,
        borderTopWidth: 1,
        borderTopColor: '#1c1c1c',
        paddingBottom: 5,
        position: 'absolute',
        bottom: 40,
        left: 0,
        right: 0,
        zIndex: 1000
    },
    tabButton: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    tabText: {
        fontSize: 10,
        color: '#888',
        marginTop: '4'
    }
});