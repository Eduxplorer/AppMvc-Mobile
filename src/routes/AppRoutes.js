import { createStackNavigator} from '@react-navigation/stack'

import HomeView from '../views/HomeView'

import LoginView from '../views/LoginView'

const Stack = createStackNavigator();

export default function AppRoutes() {
    return(
        <Stack.Navigator>
            {/* <Stack.Screen name="Home" component={HomeView} options={{ headerShown: false }} />  */}
            <Stack.Screen name="Home" component={HomeView} options={{ title: 'Minha Home' }} />
            <Stack.Screen name="Login" component={LoginView} options={{ title: 'Meu Login' }} />
                
        </Stack.Navigator>
    );
}