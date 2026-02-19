import { createStackNavigator} from '@react-navigation/stack'

import HomeView from '../views/HomeView'
import LoginView from '../views/LoginView'
import CadastroView from '../views/CadastroView';
import EsqueciSenhaView from '../views/EsqueciSenhaView';
import DetailsView from '../views/DetailsView';

const Stack = createStackNavigator();

export default function AppRoutes() {
    return(
        <Stack.Navigator>
            {/* <Stack.Screen name="Home" component={HomeView} options={{ headerShown: false }} /> Esse bloco é utilizado para caso você desejar ocultar a barra com o nome da página que fica na parte superior */}
            <Stack.Screen name="Home" component={HomeView} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginView} options={{ title: 'Meu Login' }} />
            <Stack.Screen name="Cadastro"  component={CadastroView} options={{title: 'Cadastre-se'}} />
            <Stack.Screen name="EsqueciSenha" component={EsqueciSenhaView} options={{title: "Recuperar Conta"}} />

            <Stack.Screen name="Details" component={DetailsView} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}