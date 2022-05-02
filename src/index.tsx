import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-accessibility-wrapper' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

type AccessibilityWrapperProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'AccessibilityWrapperView';

export const AccessibilityWrapperView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<AccessibilityWrapperProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
