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

export const AccessibilityWrapperView = (props: AccessibilityWrapperProps) => {
  const isComponentLinked =
    UIManager.getViewManagerConfig(ComponentName) !== null;
  const isIOS = Platform.OS === 'ios';

  if (!isComponentLinked && isIOS) {
    throw new Error(LINKING_ERROR);
  }

  if (isComponentLinked && isIOS) {
    return <AccessibilityWrapper {...props} />;
  } else {
    return <View {...props} />;
  }
};

export default AccessibilityWrapperView;
