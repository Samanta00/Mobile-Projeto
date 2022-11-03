import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet, FlatList, Text } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import TesteMeses from '../../screens/meses/mes';

//Objeto com os meses
import { Meses } from '../../utils/meses';

export default function Cards() {
    
        const [mesReferido, setMes] =useState()

    return (

        <SafeAreaView style={styles.container}>
            <FlatList
                data={Meses}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => {
                    const isEnd = index === Meses.length - 1;

                    return(
                    <View style={styles.cardContainer}>
                        <Card style={styles.card}>
                            <Card.Content>
                                <Title>{item.nome}</Title>
                                <Paragraph>{item.resumo}</Paragraph>
                                <Card.Actions>
                                    <Button icon="book" onPress={()=>props.navigation.navigate('TesteMeses')}>SABER MAIS</Button>
                                    <Button icon="step-backward">VOLTAR</Button>
                                </Card.Actions>
                            </Card.Content>
                            <Card.Cover style={{ borderTopWidth: 1,borderTopColor:"#000", backgroundColor: item.cor, height: 8 }} />
                        </Card>
                    </View>
                    );
                }}
                ListHeaderComponent={() => <Text style={styles.footer}></Text>}
                ListFooterComponent={() => <Text style={styles.footer}></Text>}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8
    },
    card: {
        width: "80%"
    },
    footer: {
        margin: 8 
    }
});