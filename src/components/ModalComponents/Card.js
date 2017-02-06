import React from 'react';
import { View, Dimensions } from 'react-native';

const width = (Dimensions.get('window').width * 20) / 375;


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
    paddingLeft: width,
    paddingRight: width
  }

};

export default Card;
