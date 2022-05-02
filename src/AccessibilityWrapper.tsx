import React, { PropsWithChildren } from 'react';
import {
  NativeModules,
  findNodeHandle,
  requireNativeComponent,
  ViewProps,
} from 'react-native';

const { AccessibilityWrapperManager } = NativeModules;

export type AccessibilityWrapperProps = PropsWithChildren<
  ViewProps & {
    elements?: React.RefObject<React.Component>[];
  }
>;

const AccessibilityWrapper = requireNativeComponent(
  'AccessibilityWrapper'
) as React.ComponentClass<unknown>;

class AccessibilityWrapperIOS extends React.Component<AccessibilityWrapperProps> {
  private ref = React.createRef<React.Component<unknown>>();

  public componentDidMount() {
    if (this.props.elements) {
      this.setAccessibilityFields(
        this.props.elements.map((ref) => ref.current)
      );
    }
  }

  public componentDidUpdate() {
    if (this.props.elements) {
      this.setAccessibilityFields(
        this.props.elements.map((ref) => ref.current)
      );
    }
  }

  private setAccessibilityFields = (
    fields: (React.Component<unknown> | null)[]
  ) => {
    const fieldTags =
      fields &&
      fields.map((component) => component && findNodeHandle(component));
    return AccessibilityWrapperManager.setAccessibilityFields(
      findNodeHandle(this.ref.current),
      fieldTags
    );
  };

  public render() {
    return <AccessibilityWrapper {...this.props} ref={this.ref} />;
  }
}

export default AccessibilityWrapperIOS;
