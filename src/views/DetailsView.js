import {} from 'react-native'

import HeaderBar from '../components/HeaderBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

export default function DetailsView() {
    return(
        <SafeAreaView>
            <ScrollView>
                <HeaderBar />
            </ScrollView>
        </SafeAreaView>
    );
}