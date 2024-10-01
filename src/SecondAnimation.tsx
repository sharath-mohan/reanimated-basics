import {View, Text, StyleSheet, Touchable, Pressable} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
// change color from red to  blue with animation
const SecondAnimation = () => {
  const color = useSharedValue('red');
  //   const animatedStyle = useAnimatedStyle(() => {
  //     return {
  //       backgroundColor: color.value,
  //     };
  //   });
  const updateColor = () => {
    color.value = withTiming('blue', {duration: 1000});
  };

  return (
    <View style={style.container}>
      <Pressable onPress={updateColor}>
        {/* <Animated.View style={[style.circle, animatedStyle]} /> */}
        <Animated.View
          style={[
            style.circle,
            {
              backgroundColor: color,
            },
          ]}
        />
      </Pressable>
    </View>
  );
};
const style = StyleSheet.create({
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
export default SecondAnimation;
