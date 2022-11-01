import { SafeAreaView, View, ScrollView, StyleSheet } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

const December = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Card>
            <Card.Content>
              <Title>Dezembro</Title>
              <Paragraph>
                Dezembro Laranja traz o debate sobre o combate ao câncer de
                pele.
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
    backgroundColor: '#FFA700',
  },
});

export default December;
