import { SafeAreaView, View, ScrollView, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const October = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Card>
            <Card.Content>
              <Title>Outubro</Title>
              <Paragraph>
                Outubro Rosa é dedicado à conscientização sobre o câncer de
                mama, foi criado nos Estados Unidos na década de 1990.
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
    backgroundColor: '#FFCBDB',
  },
});

export default October;
