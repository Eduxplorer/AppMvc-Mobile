import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderBar from '../components/HeaderBar';

export default function HomeView({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>

            {/* Precisamos passar o navigation via props pois o componente não possui acesso direto. Apenas os componentes que estão definidos no AppRoutes possuem acesso ao navigation por padrão. */}
            <HeaderBar navigation={navigation} />
            {/* <Text>Olá Mundo! Estamos na página Home.</Text> */}
            <Button title='Login' onPress={() => navigation.navigate('Login')} />
        </SafeAreaView>
    );
}