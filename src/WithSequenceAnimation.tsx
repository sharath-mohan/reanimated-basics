import {View, Text, StyleSheet} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import Animated, {
  runOnUI,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const WithSequenceAnimation = () => {
  const position = useSharedValue(0);
  const bounce = useCallback(() => {
    'worklet';
    position.value = withRepeat(
      withSequence(withTiming(-200, {duration: 500}), withTiming(0)),
      -1,
      true,
    );
  }, [position]);
  useEffect(() => {
    runOnUI(bounce)();
  }, [bounce]);
  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.circle, {transform: [{translateY: position}]}]}
      />
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
    backgroundColor: 'orange',
  },
});
export default WithSequenceAnimation;
