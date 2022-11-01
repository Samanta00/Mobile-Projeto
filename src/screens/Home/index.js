import * as React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

//Components
import Cards from '../../components/Card/Cards';


export default function Home({ navigation }) {
    return (
            <View style={styles.container}>
                <Cards />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});