import React from 'react';
import { Text } from 'react-native';

const Content = ({ size, color, weight, children, lines, onPress }) => {
  const style = {
    fontSize: size,
    fontWeight: weight,
    color
  };
  return (
    <Text style={style} numberOfLines={lines} onPress={onPress}>{ children }</Text>
  );
};

export default Content;
