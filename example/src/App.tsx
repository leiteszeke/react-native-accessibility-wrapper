import React from 'react';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import AccessibleInput from './AccessibleInput';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text accessibilityRole="header" style={styles.title}>
          Accessibility Wrapper
        </Text>

        <AccessibleInput
          placeholder="Password"
          autoCorrect={false}
          secureTextEntry
          autoCapitalize="none"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 12,
  },
});
