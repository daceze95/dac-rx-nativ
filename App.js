import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { styles } from './Appstyle.jsx'

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.otl}>Hello world!</Text>
      </View>
    </View>
  );
}

