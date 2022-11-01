import { SafeAreaView, View, ScrollView, StyleSheet } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

const September = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Card>
            <Card.Content>
              <Title>Setembro</Title>
              <Paragraph>
                Setembro, conscientização sobre a prevenção das doenças
                cardiovasculares.
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
    backgroundColor: '#008000',
  },
});

export default September;
