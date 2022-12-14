import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo ao mês de mes</Text>
      <Text style={styles.text}>
        {' '}
        Lorem ipsum mi nam feugiat velit fringilla faucibus sed, posuere taciti
        enim pellentesque gravida vehicula laoreet conubia torquent, quisque hac
        senectus dui adipiscing donec ut. mattis bibendum netus pretium
        consectetur consequat eros at blandit, dapibus a mattis enim porttitor
        in ultricies, etiam platea et tristique torquent fames nostra at, nisi
        curabitur hendrerit laoreet senectus ante. ultricies duis conubia
        venenatis risus class fames sociosqu mattis, vivamus elementum turpis
        hendrerit vitae rutrum sodales cubilia, pharetra eget curae a tincidunt
        varius diam. ultricies a consectetur elementum viverra id orci luctus,
        quisque rhoncus curabitur morbi senectus non, dictumst inceptos quisque
        est tempor mauris.
      </Text>
      <Button
        style={styles.button}
        title="Saber mais"
        onPress={() => props.navigation.navigate('Next')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 17,
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
  },
});

export default Index;
