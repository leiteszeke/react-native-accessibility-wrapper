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
        this.props.elements.map((el) => el.current).filter((el) => el)
      );
    }
  }

  public componentDidUpdate() {
    if (this.props.elements) {
      this.setAccessibilityFields(
        this.props.elements.map((el) => el.current).filter((el) => el)
      );
    }
  }

  private setAccessibilityFields = (
    fields: (React.Component<unknown> | null)[]
  ) => {
    const fieldTags =
      fields &&
      // @ts-ignore Upgrade later
      fields.map((component) => component && findNodeHandle(component));

    return AccessibilityWrapperManager.setAccessibilityFields(
      // @ts-ignore Upgrade later
      findNodeHandle(this.ref.current),
      fieldTags
    );
  };

  public render() {
    // @ts-ignore Upgrade later
    return <AccessibilityWrapper {...this.props} ref={this.ref} />;
  }
}

export default AccessibilityWrapperIOS;
