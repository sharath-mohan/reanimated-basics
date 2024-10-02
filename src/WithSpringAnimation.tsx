import {View, Text, StyleSheet} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import Animated, {
  runOnUI,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const WithSpringAnimation = () => {
  const scale1 = useSharedValue(1);
  const scale2 = useSharedValue(1);
  const scale = useCallback(() => {
    'worklet';
    scale1.value = withTiming(2, {duration: 1000});
    scale2.value = withSpring(2, {duration: 1000});
  }, [scale1, scale2]);
  useEffect(() => {
    runOnUI(scale)();
  }, [scale]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [{scale: scale1}],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [{scale: scale2}],
          },
        ]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'green',
  },
});

export default WithSpringAnimation;
