import {View, Text, StyleSheet} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import Animated, {
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const WithRepeatAnimation = () => {
  const opacity = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });
  const fadeIn = useCallback(() => {
    'worklet';
    opacity.value = withRepeat(withTiming(1, {duration: 1000}), 3);
  }, [opacity]);
  useEffect(() => {
    runOnUI(fadeIn)();
  }, [fadeIn]);
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, animatedStyle]} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'red',
  },
});
export default WithRepeatAnimation;
