import {View, Text} from 'react-native';
import React from 'react';
import FirstAnimation from './src/FirstAnimation';
import SecondAnimation from './src/SecondAnimation';
import AnimateonUIThread from './src/AnimateonUIThread';
import WithDelayAnimation from './src/WithDelayAnimation';
import WithRepeatAnimation from './src/WithRepeatAnimation';
import WithSpringAnimation from './src/WithSpringAnimation';
import WithSequenceAnimation from './src/WithSequenceAnimation';

const App = () => {
  return (
    <>
      <WithSequenceAnimation />
    </>
  );
};

export default App;
