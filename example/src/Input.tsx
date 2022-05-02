import React, { forwardRef } from 'react';

import { StyleSheet, TextInput, View } from 'react-native';

const Input = (props: any, ref: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput
          {...props}
          accessible
          ref={ref}
          style={styles.input}
          onSubmitEditing={props.onSubmitEditing}
          returnKeyType={props.returnKeyType}
        >
          {props.children}
        </TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    height: 50,
    marginHorizontal: 12,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  input: {
    margin: 0,
    padding: 0,
    paddingHorizontal: 0,
    width: '100%',
  },
  icon: {
    width: 16,
    height: 16,
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default forwardRef(Input);
