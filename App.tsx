import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ide tidak akan datang dalam bentuk sempurna, ide akan jelas saat sudah di jalani, tugas kita hanya memulainya (Mark Zuckerberg)</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
