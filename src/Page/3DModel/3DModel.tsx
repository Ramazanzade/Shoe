import React from 'react';
import { View, StyleSheet } from 'react-native';
import ModelView from 'react-native-3d-model-view';

const Model = () => {
  return (
    <View style={styles.container}>
    <ModelView
      source={{
        model: require('./q.obj'),
      }}
      style={styles.model}
    />
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  model: {
    width: '100%',
    height: '100%',
  },
});
export default Model


