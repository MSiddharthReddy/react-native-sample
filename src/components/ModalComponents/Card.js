import React from 'react';
import { View } from 'react-native';

const Card = ({ children }) => {
  const { containerStyle } = styles;
  return (
    <View style={containerStyle}>
    {children}
   </View>
  );
};


const styles = {
  containerStyle: {
    backgroundColor: 'rgba(1,1,1,.5)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20
  }

};

export default Card;
