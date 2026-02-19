import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderBar from '../components/HeaderBar';
import CustomTabBar from '../components/CustomTabBar';
import QuickCategories from '../components/QuickCategories';
import GameList from '../components/GameList';

export default function HomeView({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>

            {/* Precisamos passar o navigation via props pois o componente não possui acesso direto. Apenas os componentes que estão definidos no AppRoutes possuem acesso ao navigation por padrão. */}
            <HeaderBar navigation={navigation} />

            
            <QuickCategories navigation={navigation} />

            {/* O isVertical é para forçar que os itens ficarão na horizontal */}
        <GameList navigation={navigation} title='Ofertas top da semana' isVertical={false} />
        <GameList navigation={navigation} title='Recomendados para você' isVertical={false} />
        <GameList navigation={navigation} title='Recomendados para você' isVertical={false} />


            {/* Footer */}
            <CustomTabBar navigation={navigation} />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#32343a',
        flex: 1
    }
});