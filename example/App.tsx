import { StyleSheet, Text, View } from 'react-native';

import * as FaceLivenessDetection from 'face-liveness-detection';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{FaceLivenessDetection.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
