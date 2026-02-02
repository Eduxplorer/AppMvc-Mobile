import 'react-native-gesture-handler'
import { View } from 'react-native';
import HomeView from './src/views/HomeView'
import LoginView from './src/views/LoginView';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // Garante responsividade com IOS
import AppRoutes from './src/routes/AppRoutes';
import { NavigationContainer } from '@react-navigation/native'



export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <AppRoutes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
