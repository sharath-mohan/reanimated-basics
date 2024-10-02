import {View, Text, StyleSheet} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import Animated, {
  runOnJS,
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimateonUIThread = () => {
  const [mount, setMount] = React.useState(true);
  const opacity = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });
  const fadeIn = useCallback(() => {
    'worklet';
    opacity.value = withTiming(1, {duration: 1000}, finished => {
      if (finished) {
        runOnJS(setMount)(false);
      }
    });
  }, [opacity]);
  useEffect(() => {
    runOnUI(fadeIn)();
  }, [fadeIn]);
  return (
    <View style={styles.container}>
      {mount && <Animated.View style={[styles.circle, animatedStyle]} />}
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

export default AnimateonUIThread;
