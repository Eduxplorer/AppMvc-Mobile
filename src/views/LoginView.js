import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'

export default function LoginView() {
    return(
        <SafeAreaView style={ { flex: 1 } }>
        <Text>Página de Login</Text>
        </SafeAreaView>
    );
}