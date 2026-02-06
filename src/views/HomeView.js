import { Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderBar from '../components/HeaderBar';
import CustomTabBar from '../components/CustomTabBar';
import QuickCategories from '../components/QuickCategories';

export default function HomeView({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>

            {/* Precisamos passar o navigation via props pois o componente não possui acesso direto. Apenas os componentes que estão definidos no AppRoutes possuem acesso ao navigation por padrão. */}
            <HeaderBar navigation={navigation} />

            {/* Footer */}
            <CustomTabBar navigation={navigation} />
            

            <QuickCategories navigation={navigation} />
        </SafeAreaView>
    );
}