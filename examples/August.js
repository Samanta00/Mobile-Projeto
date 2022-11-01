import { SafeAreaView, View, ScrollView, StyleSheet } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

const August = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Card>
            <Card.Content>
              <Title>Agosto</Title>
              <Paragraph>
                tem os dias entre 01 a 07 de agosto como a Semana Mundial da
                Amamentação.
              </Paragraph>
              <Card.Actions>
                <Button icon="book">SABER MAIS</Button>
                <Button icon="step-backward">VOLTAR</Button>
              </Card.Actions>
            </Card.Content>
            <Card.Cover style={styles.background} />
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#EDEEE9',
    height: 180,
  },
  background: {
    backgroundColor: '#DAA520',
  },
});

export default August;
