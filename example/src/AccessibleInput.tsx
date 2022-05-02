import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import AccessibilityWrapper from 'react-native-accessibility-wrapper';
import { Icon } from 'react-native-eva-icons';

type AccessibleInputProps = Omit<TextInputProps, 'style'> & {
  accessibility?: {
    input?: {
      label: string;
      hint?: string;
    };
    icon?: {
      label: string;
      hint?: string;
    };
  };
};

const AccessibleInput = (props: AccessibleInputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const iconRef = useRef<TouchableOpacity>(null);
  const inputRef = useRef<TextInput>(null);

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <AccessibilityWrapper style={styles.wrapper} elements={[inputRef, iconRef]}>
      <TextInput
        {...props}
        accessibilityLabel={
          props.accessibility?.input?.label ?? props.placeholder
        }
        accessibilityHint={props.accessibility?.input?.hint ?? ''}
        secureTextEntry={props.secureTextEntry && !showPassword}
        style={styles.input}
        ref={inputRef}
      />

      {props.secureTextEntry && (
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.icon}
          ref={iconRef}
          onPress={togglePassword}
          accessibilityLabel={props.accessibility?.icon?.label ?? ''}
          accessibilityHint={props.accessibility?.icon?.hint ?? ''}
          accessibilityRole="button"
        >
          <Icon
            fill="#000000"
            name={showPassword ? 'eye-outline' : 'eye-off-outline'}
            height={20}
            width={20}
          />
        </TouchableOpacity>
      )}
    </AccessibilityWrapper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    borderColor: '#CCCCCC',
    borderRadius: 8,
    borderWidth: 1,
    height: 50,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    marginHorizontal: 12,
  },
  icon: {
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    width: 50,
  },
});

export default AccessibleInput;
