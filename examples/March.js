import { SafeAreaView, View, ScrollView, StyleSheet } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

const March = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Card>
            <Card.Content>
              <Title>Março</Title>
              <Paragraph>
                O Março Azul traz o debate sobre a prevenção ao câncer
                colorretal.
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
    backgroundColor: '#0000FF',
  },
});

export default March;
