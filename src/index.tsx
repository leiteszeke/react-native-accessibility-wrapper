import React from 'react';
import { UIManager, Platform, View } from 'react-native';
import AccessibilityWrapper, {
  AccessibilityWrapperProps,
} from './AccessibilityWrapper';

const LINKING_ERROR =
  `The package 'react-native-accessibility-wrapper' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const ComponentName = 'AccessibilityWrapper';

export const AccessibilityWrapperView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? (props: AccessibilityWrapperProps) =>
        Platform.OS === 'ios' ? (
          <AccessibilityWrapper {...props} />
        ) : (
          <View {...props} />
        )
    : () => {
        throw new Error(LINKING_ERROR);
      };

export default AccessibilityWrapperView;
