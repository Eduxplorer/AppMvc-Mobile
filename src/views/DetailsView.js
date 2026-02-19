import { Image, StyleSheet, Text, View } from 'react-native'

import HeaderBar from '../components/HeaderBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

const BANNER_IMAGE = '../../assets/hornet.png';

export default function DetailsView({ navigation }) {
    return (
        <SafeAreaView>
            {/* Barra de navegação - deve ficar fora do ScrollView */}
            <HeaderBar navigation={navigation} />

            {/* Conteúdo scrollavel */}
            <ScrollView>
                <View style={styles.bannerContainer}>
                    <Image
                        source={require(BANNER_IMAGE)}
                        resizeMode='contain'
                        style={styles.bannerImagem}
                    />
                    <View style={styles.bannerOverlay}>
                        <Image
                            source={require('../../assets/icon.png')}
                            resizeMode='contain'
                            style={styles.gameLogo}
                        />
                        <View></View>
                        <View></View>
                    </View>
                </View>

                <Text style={styles.description}>Mussum Ipsum, cacilds vidis litro abertis.  Quem manda na minha terra sou euzis! Leite de capivaris, leite de mula manquis sem cabeça. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Delegadis gente finis, bibendum egestas augue arcu ut est.</Text>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    bannerContainer: {
        height: 220,
        marginHorizontal: 15,
        marginTop: 10,
        borderRadius: 10,
        overflow: 'hidden'


    },
    bannerImagem: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    gameLogo: {
        width: 100,
        height: 100,
        alignSelf: 'flex-start',

    },
    bannerOverlay: {
        flex: 1,
        padding: 15,
        justifyContent: 'space-between' ,
        alignItems: 'flex-end'
    },
    description: {
        fontSize: 14,
        lineHeight: 20,
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#1c1c1c'
    }

});