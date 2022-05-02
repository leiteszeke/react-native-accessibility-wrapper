import React, { useRef } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import AccessibilityWrapper from 'react-native-accessibility-wrapper';
import { Icon } from 'react-native-eva-icons';
import Input from './Input';

export default function App() {
  const iconRef = useRef<TouchableOpacity>(null);
  const inputRef = useRef<TextInput>(null);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text accessibilityRole="header" style={styles.title}>
          Accessibility Wrapper
        </Text>

        <AccessibilityWrapper elements={[inputRef, iconRef]}>
          <View style={styles.inputWrapper}>
            <Input
              secureTextEntry={true}
              ref={inputRef}
              placeholder="Password"
              autoCorrect={false}
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={styles.icon}
              ref={iconRef}
              accessibilityLabel="Show password"
              accessibilityRole="button"
            >
              <Icon
                fill="#000000"
                name={'eye-off-outline'}
                height={20}
                width={20}
              />
            </TouchableOpacity>
          </View>
        </AccessibilityWrapper>
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

  inputWrapper: {
    alignItems: 'center',
    borderColor: '#CCCCCC',
    borderRadius: 8,
    borderWidth: 1,
    height: 50,
    flexDirection: 'row',
  },
  icon: {
    padding: 10,
  },
});
