import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Hola, Coder!</Text>
      <Text style={styles.text2}>Comisión 56680</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text1:{
    color: '#EAFF6A',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:  20,
  },

  text2:{
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold'
  }
});
